'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Clock, Briefcase, FileText, ShieldCheck, ArrowRight, CheckCircle2, Zap, Film } from 'lucide-react';
import VeoGenerator from '@/components/VeoGenerator';

export default function LandingPage() {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Precyzyjna Ewidencja",
      description: "Śledź czas pracy z dokładnością co do minuty. Intuicyjny kalendarz pozwala na szybkie dodawanie wpisów dla pojedynczych dni lub całych zakresów."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-accent-violet" />,
      title: "Zarządzanie Projektami",
      description: "Twórz projekty, przypisuj do nich klientów i kategoryzuj swój czas. Oś czasu pozwala na śledzenie kamieni milowych i postępów."
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      title: "Profesjonalne Raporty",
      description: "Generuj szczegółowe raporty w formacie PDF lub Excel. Błyskawicznie udostępniaj podsumowania bezpośrednio przez WhatsApp."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
      title: "Prywatność Offline",
      description: "Twoje dane są bezpieczne. Aplikacja działa całkowicie offline, przechowując informacje tylko w Twojej przeglądarce. Pełna kontrola."
    }
  ];

  return (
    <main className="flex-1 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#E5A238] rounded-xl flex items-center justify-center text-black font-black text-xl tracking-tighter">
              sb
            </div>
            <span className="text-2xl font-black tracking-tight">shiftbase</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#funkcje" className="hover:text-white transition-colors">Funkcje</a>
            <a href="#interfejs" className="hover:text-white transition-colors">Interfejs</a>
            <a href="#veo" className="hover:text-white transition-colors">Animacje Veo</a>
          </div>
          <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
            Otwórz Aplikację
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary border-primary/20">
              <Zap className="w-4 h-4" />
              <span>Nowość: Wersja 4.0 już dostępna</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Zarządzaj czasem <br />
              <span className="text-gradient">jak profesjonalista.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Shiftbase to Twoje centrum dowodzenia. Śledź godziny, zarządzaj projektami i generuj raporty w mgnieniu oka. Wszystko to w pięknym, nowoczesnym interfejsie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary to-[#E5A238] text-black px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                Rozpocznij za darmo <ArrowRight className="w-5 h-5" />
              </button>
              <button className="glass-card px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                Zobacz demo
              </button>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500 font-medium pt-4">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Działa offline</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Brak ukrytych opłat</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent-violet/20 rounded-[3rem] blur-2xl transform -rotate-6" />
              <Image 
                src="https://cms-assets.youmind.com/media/1773902680482_i1x695_HDpzz5TbgAA1K-G.jpg" 
                alt="Shiftbase Calendar Interface" 
                width={800} 
                height={1600} 
                className="relative z-10 rounded-[2.5rem] shadow-2xl border border-white/10 object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="funkcje" className="py-24 bg-black/50 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Wszystko, czego potrzebujesz</h2>
            <p className="text-gray-400 text-lg">Zaprojektowaliśmy Shiftbase tak, aby maksymalnie uprościć Twoją codzienną pracę, nie rezygnując z zaawansowanych możliwości.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section 1 */}
      <section id="interfejs" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-accent-violet/20 rounded-[3rem] blur-3xl transform rotate-3" />
            <Image 
              src="https://cms-assets.youmind.com/media/1773902679745_hzj4wl_HDpzz5DboAAofOu.jpg" 
              alt="Shiftbase Client Form" 
              width={800} 
              height={800} 
              className="relative z-10 rounded-[2rem] shadow-2xl border border-white/10 object-cover max-w-[450px] mx-auto"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent-violet/20 text-accent-violet flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Zarządzaj bazą <br/><span className="text-gradient-violet">klientów i projektów</span></h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Dodawaj nowych klientów w mgnieniu oka. Przechowuj dane kontaktowe, notatki i przypisuj do nich projekty. Przejrzysty interfejs w stylu "Neumorphism" sprawia, że wprowadzanie danych to czysta przyjemność.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Szybkie formularze dodawania
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Kategoryzacja kolorystyczna projektów
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Powiązanie czasu pracy z klientem
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Showcase Section 2 */}
      <section className="py-24 px-6 bg-black/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Kompleksowy <br/><span className="text-blue-400">profil pracownika</span></h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Trzymaj wszystkie ważne dokumenty i kwalifikacje w jednym miejscu. Aplikacja przypomni Ci o kończących się badaniach lekarskich, szkoleniach BHP czy ważności dokumentów tożsamości.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 rounded-2xl">
                <h4 className="font-bold text-white mb-1">Dokumenty</h4>
                <p className="text-sm text-gray-400">Paszporty, dowody, zezwolenia na pracę.</p>
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <h4 className="font-bold text-white mb-1">Uprawnienia</h4>
                <p className="text-sm text-gray-400">UDT, SEP, certyfikaty zawodowe.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-[3rem] blur-3xl transform -rotate-3" />
            <Image 
              src="https://cms-assets.youmind.com/media/1773902680459_4g013e_HDpzz5SbgAALr6X.jpg" 
              alt="Shiftbase Profile Form" 
              width={800} 
              height={1600} 
              className="relative z-10 rounded-[2rem] shadow-2xl border border-white/10 object-cover max-w-[400px] mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Veo Generator Section */}
      <section id="veo" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
        <VeoGenerator />
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10">Gotowy na zmianę?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
            Dołącz do profesjonalistów, którzy odzyskali kontrolę nad swoim czasem. Bez instalacji, bez zakładania konta.
          </p>
          <button className="bg-gradient-to-r from-primary to-[#E5A238] text-black px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(251,180,74,0.4)] relative z-10">
            Uruchom Shiftbase w przeglądarce
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-black text-sm">
              sb
            </div>
            <span className="font-bold tracking-tight">shiftbase</span>
          </div>
          <div className="text-sm text-gray-500 text-center md:text-left">
            &copy; 2026 Shiftbase. Wszelkie prawa zastrzeżone. Twoje dane są bezpieczne i pozostają na Twoim urządzeniu.
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Prywatność</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
