'use client';

import { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Play, Video, Loader2, AlertCircle, CheckCircle2, Image as ImageIcon, Film } from 'lucide-react';

export default function VeoGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (!selectedFile.type.startsWith('image/')) {
        setError('Proszę wybrać plik graficzny (np. JPG, PNG).');
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setVideoUrl(null);
      setError(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (!droppedFile.type.startsWith('image/')) {
        setError('Proszę wybrać plik graficzny (np. JPG, PNG).');
        return;
      }
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
      setVideoUrl(null);
      setError(null);
    }
  };

  const generateVideo = async () => {
    if (!file) {
      setError('Proszę najpierw wgrać zdjęcie.');
      return;
    }

    setLoading(true);
    setError(null);
    setStatus('Inicjalizacja...');

    try {
      // Check for API key using AI Studio's injected methods if available
      const aistudio = (window as any).aistudio;
      if (aistudio && aistudio.hasSelectedApiKey) {
        const hasKey = await aistudio.hasSelectedApiKey();
        if (!hasKey) {
          setStatus('Oczekiwanie na wybór klucza API...');
          await aistudio.openSelectKey();
        }
      }

      setStatus('Przetwarzanie obrazu...');
      const base64Data = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          const base64 = result.split(',')[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      // Initialize GenAI client right before the call to ensure fresh key
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || (process.env as any).API_KEY;
      if (!apiKey && !aistudio) {
        throw new Error('Brak klucza API. Upewnij się, że zmienna środowiskowa jest ustawiona.');
      }
      
      const ai = new GoogleGenAI({ apiKey: apiKey as string });

      setStatus('Generowanie wideo (to może potrwać kilka minut)...');
      
      const requestConfig: any = {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: aspectRatio
      };

      const requestPayload: any = {
        model: 'veo-3.1-fast-generate-preview',
        image: {
          imageBytes: base64Data,
          mimeType: file.type,
        },
        config: requestConfig
      };

      if (prompt.trim()) {
        requestPayload.prompt = prompt.trim();
      }

      let operation = await ai.models.generateVideos(requestPayload);

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 8000));
        setStatus('Model Veo pracuje nad Twoim wideo... Proszę czekać.');
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (!downloadLink) {
        throw new Error('Nie udało się wygenerować wideo. Spróbuj ponownie.');
      }

      setStatus('Pobieranie gotowego wideo...');
      const response = await fetch(downloadLink, {
        method: 'GET',
        headers: {
          'x-goog-api-key': (apiKey as string) || '',
        },
      });

      if (!response.ok) {
        throw new Error('Błąd podczas pobierania wideo z serwera.');
      }

      const videoBlob = await response.blob();
      const videoObjectUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoObjectUrl);
      setStatus('');
      
    } catch (err: any) {
      console.error('Veo Generation Error:', err);
      // Handle specific AI Studio error where entity is not found
      if (err.message?.includes('Requested entity was not found') && (window as any).aistudio) {
        setError('Klucz API wygasł lub jest nieprawidłowy. Proszę wybrać go ponownie.');
        await (window as any).aistudio.openSelectKey();
      } else {
        setError(err.message || 'Wystąpił nieoczekiwany błąd podczas generowania wideo.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-6 md:p-10 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent-violet/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl mb-4">
              <Video className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ożyw swoje grafiki z Veo</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Przetestuj potęgę modelu Google Veo 3.1. Wgraj prototyp, zrzut ekranu lub dowolną grafikę, a sztuczna inteligencja przekształci ją w płynne wideo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Controls */}
            <div className="space-y-6">
              {/* Upload Area */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center min-h-[240px]
                  ${preview ? 'border-primary/50 bg-primary/5' : 'border-gray-700 hover:border-gray-500 hover:bg-white/5'}`}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                
                {preview ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={preview} 
                      alt="Preview" 
                      className="max-h-[200px] object-contain rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                      <p className="text-white font-medium flex items-center gap-2">
                        <Upload className="w-4 h-4" /> Zmień zdjęcie
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-lg font-medium mb-2">Kliknij lub upuść zdjęcie tutaj</p>
                    <p className="text-sm text-gray-500">Obsługiwane formaty: JPG, PNG, WEBP</p>
                  </>
                )}
              </div>

              {/* Settings */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Opcjonalny prompt (wskazówka dla AI)
                  </label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Np. Delikatny ruch kamery, płynne przejścia..."
                    className="w-full bg-black/50 border border-gray-700 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none h-24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Proporcje wideo
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setAspectRatio('16:9')}
                      className={`flex-1 py-3 rounded-xl border font-medium transition-colors ${
                        aspectRatio === '16:9' 
                          ? 'bg-primary/20 border-primary text-primary' 
                          : 'bg-black/50 border-gray-700 text-gray-400 hover:border-gray-500'
                      }`}
                    >
                      16:9 (Poziome)
                    </button>
                    <button
                      onClick={() => setAspectRatio('9:16')}
                      className={`flex-1 py-3 rounded-xl border font-medium transition-colors ${
                        aspectRatio === '9:16' 
                          ? 'bg-primary/20 border-primary text-primary' 
                          : 'bg-black/50 border-gray-700 text-gray-400 hover:border-gray-500'
                      }`}
                    >
                      9:16 (Pionowe)
                    </button>
                  </div>
                </div>

                <button
                  onClick={generateVideo}
                  disabled={!file || loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-[#E5A238] text-black font-bold text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generowanie...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current" />
                      Animuj z Veo
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Result / Status */}
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-6 left-6 right-6 bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl flex items-start gap-3 z-20"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {videoUrl ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <div className="flex items-center gap-2 text-green-400 mb-4 bg-green-400/10 px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Wideo gotowe!</span>
                  </div>
                  <video 
                    src={videoUrl} 
                    controls 
                    autoPlay 
                    loop 
                    className="w-full max-h-[400px] rounded-xl shadow-2xl border border-gray-700 bg-black"
                  />
                </motion.div>
              ) : loading ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-gray-800 rounded-full"></div>
                    <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                    <Video className="w-8 h-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Praca w toku</h3>
                    <p className="text-primary font-medium animate-pulse">{status}</p>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center text-gray-500 flex flex-col items-center">
                  <Film className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-lg font-medium text-gray-400 mb-2">Miejsce na Twoje wideo</p>
                  <p className="text-sm max-w-xs">Wgraj grafikę i kliknij "Animuj z Veo", aby zobaczyć magię sztucznej inteligencji.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
