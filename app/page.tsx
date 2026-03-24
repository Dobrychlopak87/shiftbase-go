'use client';

import { motion } from 'motion/react';
import { Calendar, Briefcase, FileText, Settings, ChevronLeft, ChevronRight, Plus, Edit2, Trash2, Copy, MessageCircle, Smartphone, Globe, Zap, CheckCircle2, BarChart3, Clock, TrendingUp, Activity, Share2, FileSpreadsheet, FileOutput } from 'lucide-react';

const ShiftBaseLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 1024 1024" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M 502.50 972.67 C494.52,969.29 455.47,951.44 436.50,942.51 C425.74,937.43 377.55,915.33 351.50,903.51 C342.70,899.51 326.50,892.09 315.50,887.01 C304.50,881.93 268.73,865.63 236.00,850.79 C203.27,835.94 166.60,819.30 154.50,813.80 C142.40,808.30 116.66,796.67 97.30,787.94 C77.95,779.22 59.50,770.76 56.30,769.14 C36.73,759.24 25.67,743.83 23.04,722.82 C21.69,712.07 21.63,276.33 22.98,263.56 C24.76,246.59 31.52,237.68 46.22,232.94 C58.25,229.06 62.41,229.92 92.00,242.42 C106.03,248.35 128.30,257.70 141.50,263.19 C154.70,268.69 170.68,275.35 177.00,278.00 C183.32,280.64 201.10,288.00 216.50,294.34 C231.90,300.68 268.80,315.97 298.50,328.32 C360.57,354.13 381.04,362.62 425.50,381.01 C464.92,397.31 465.95,397.83 473.82,405.38 C480.86,412.13 483.88,416.69 487.21,425.58 L 489.42 431.50 L 490.08 590.50 C490.44,677.95 490.79,757.96 490.87,768.30 C491.00,786.84 491.03,787.12 493.45,789.55 C495.26,791.35 496.99,792.00 499.97,792.00 C504.40,792.00 507.47,790.83 531.50,780.02 C540.30,776.06 568.42,763.59 594.00,752.31 C619.58,741.02 648.60,728.18 658.50,723.78 C668.40,719.38 689.33,710.16 705.00,703.30 C720.67,696.43 736.12,689.43 739.32,687.73 C746.48,683.94 752.21,677.60 755.21,670.15 C757.41,664.68 757.49,663.30 757.80,627.25 C757.98,605.13 757.74,590.00 757.20,590.00 C756.69,590.00 752.28,591.85 747.39,594.12 C719.16,607.20 634.76,645.00 630.72,646.38 C624.36,648.53 616.53,648.43 609.91,646.09 C603.79,643.94 576.65,631.88 567.35,627.18 C560.56,623.75 555.47,618.35 553.99,613.00 C553.41,610.95 553.01,589.11 553.01,560.22 C553.00,517.99 553.22,510.41 554.55,507.23 C556.49,502.57 559.51,499.31 564.00,497.02 C568.34,494.80 621.74,471.41 664.50,453.00 C739.48,420.71 740.86,420.05 747.61,413.33 C755.46,405.51 757.19,400.08 757.77,381.49 C758.28,364.96 757.08,354.23 753.91,347.06 C751.56,341.71 745.15,334.81 739.50,331.51 C737.30,330.22 718.62,322.11 698.00,313.48 C677.38,304.85 647.22,292.16 631.00,285.28 C518.31,237.51 525.12,240.13 517.66,241.74 C514.82,242.35 492.02,251.69 467.00,262.50 C410.40,286.95 412.17,286.30 404.00,285.79 C396.62,285.34 402.35,287.59 318.00,252.01 C286.38,238.68 256.23,226.00 251.00,223.85 C239.15,218.96 234.89,216.18 231.87,211.32 C229.63,207.71 229.48,206.46 229.17,188.50 C228.97,177.01 229.25,168.10 229.89,165.96 C232.19,158.30 234.41,157.06 279.00,138.46 C290.18,133.80 375.84,97.97 408.00,84.52 C498.16,46.78 503.41,44.71 510.11,44.23 C518.06,43.65 518.62,43.82 545.50,55.01 C574.85,67.23 640.17,94.10 673.50,107.67 C688.90,113.93 709.83,122.49 720.00,126.68 C730.17,130.87 747.05,137.78 757.50,142.02 C848.05,178.82 883.26,193.19 933.00,213.66 C952.30,221.61 960.85,226.28 969.34,233.53 C977.99,240.91 986.63,253.11 990.53,263.48 C995.65,277.08 995.99,283.27 995.99,362.53 C996.00,441.98 996.00,442.06 990.40,450.15 C984.74,458.35 978.45,462.02 940.13,479.54 C919.98,488.74 902.90,496.59 902.16,496.98 C901.38,497.39 918.04,504.84 942.66,515.08 C979.91,530.58 984.96,532.95 988.70,536.67 C996.41,544.34 996.14,540.48 995.77,637.17 C995.44,721.67 995.42,722.58 993.23,730.38 C988.73,746.39 980.40,759.66 969.24,768.57 C963.26,773.34 948.42,780.93 917.00,795.28 C858.23,822.12 792.89,852.01 775.50,860.02 C764.50,865.09 749.88,871.82 743.00,874.99 C736.12,878.15 720.83,885.24 709.00,890.73 C677.10,905.54 543.82,967.11 534.00,971.57 C527.02,974.74 524.16,975.49 518.00,975.75 C511.32,976.03 509.63,975.69 502.50,972.67 ZM 327.69 717.59 L 330.50 715.17 L 330.50 614.84 C330.50,500.81 331.11,509.12 322.08,500.67 C315.69,494.70 314.17,493.98 251.35,467.14 C193.37,442.37 191.46,441.75 187.16,446.33 L 184.96 448.67 L 185.23 548.08 L 185.50 647.50 L 188.29 653.19 C191.75,660.22 199.40,667.39 208.62,672.23 C212.40,674.21 225.62,680.18 238.00,685.50 C260.00,694.95 315.02,718.19 318.00,719.29 C321.35,720.52 325.03,719.88 327.69,717.59 Z" />
  </svg>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen pb-24 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e0e5ec]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 neu-flat rounded-2xl flex items-center justify-center text-gray-800">
              <ShiftBaseLogo className="w-7 h-7" />
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-800">ShiftBase</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full neu-flat text-sm font-bold text-amber-500">
              <Zap className="w-4 h-4" />
              <span>Nowy wymiar zarządzania czasem</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-800">
              Twój czas.<br />
              <span className="text-amber-500">Twoje zasady.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-xl font-medium">
              ShiftBase to potężne narzędzie do ewidencji czasu pracy, zarządzania projektami i generowania raportów, zamknięte w pięknym, nowoczesnym interfejsie Neumorphism.
            </p>
          </motion.div>

          {/* Calendar Widget (Image 9 Simulation) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[480px]"
          >
            <div className="neu-flat rounded-[2.5rem] p-8 w-full">
              <div className="flex justify-between items-center mb-8">
                <button className="neu-button w-12 h-12 rounded-2xl flex items-center justify-center"><ChevronLeft className="w-6 h-6 text-gray-600"/></button>
                <h3 className="font-black text-lg text-gray-800 tracking-widest uppercase">Marzec 2026</h3>
                <button className="neu-button w-12 h-12 rounded-2xl flex items-center justify-center"><ChevronRight className="w-6 h-6 text-gray-600"/></button>
              </div>
              
              <div className="grid grid-cols-7 gap-3 mb-8 text-center text-xs font-bold text-gray-400">
                <div>PN</div><div>WT</div><div>ŚR</div><div>CZ</div><div>PT</div><div>SB</div><div>ND</div>
                
                {/* Empty slots for offset */}
                <div/><div/><div/><div/><div/><div/>
                <div className="neu-flat-sm rounded-xl aspect-square flex items-center justify-center text-gray-700 font-bold text-lg">1</div>
                
                {[
                  { day: 2 },
                  { day: 3, event: "Sprzątanie Hali", hours: "9.5h", color: "bg-purple-500" },
                  { day: 4, event: "Abc", hours: "8.0h", color: "bg-emerald-500" },
                  { day: 5, event: "Sortownia warzyw", hours: "10.0h", color: "bg-amber-500" },
                  { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 },
                  { day: 10, event: "Sprzątanie Hali", hours: "10.0h", color: "bg-purple-500" },
                  { day: 11, event: "Abc", hours: "5.0h", color: "bg-emerald-500" },
                  { day: 12 }, { day: 13 }, { day: 14 }
                ].map(({ day, event, hours, color }) => (
                  <div key={day} className={`group rounded-xl aspect-square flex flex-col items-center justify-center font-bold text-lg relative cursor-pointer transition-all ${day === 10 ? 'neu-pressed text-amber-500' : 'neu-flat-sm text-gray-700 hover:text-amber-500'}`}>
                    {day}
                    {event && <div className={`w-1.5 h-1.5 ${color} rounded-full mt-1 absolute bottom-2`}></div>}
                    
                    {/* Tooltip */}
                    {event && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                        <div className="neu-flat-sm rounded-xl p-3 text-center flex flex-col gap-1">
                          <span className="text-xs font-black text-gray-700">{event}</span>
                          <span className={`text-xs font-bold ${color.replace('bg-', 'text-')}`}>{hours}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase ml-4 tracking-wider">Zadanie/Temat <span className="text-red-400">*</span></label>
                  <div className="neu-pressed rounded-2xl p-4 mt-2 text-sm text-gray-400 font-medium">Co robiłeś?</div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase ml-4 tracking-wider">Rozpoczęcie <span className="text-red-400">*</span></label>
                    <div className="neu-pressed rounded-2xl p-4 mt-2 text-sm text-gray-800 font-bold flex justify-between cursor-pointer">
                      06:00 <ChevronRight className="w-4 h-4 text-gray-400 rotate-90"/>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase ml-4 tracking-wider">Zakończenie <span className="text-red-400">*</span></label>
                    <div className="neu-pressed rounded-2xl p-4 mt-2 text-sm text-gray-800 font-bold flex justify-between cursor-pointer">
                      16:00 <ChevronRight className="w-4 h-4 text-gray-400 rotate-90"/>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Suma:</p>
                    <p className="text-2xl font-black text-pink-600">10.00h</p>
                  </div>
                  <button className="neu-flat-sm px-8 py-4 rounded-2xl font-black text-amber-500 tracking-wide hover:text-amber-600 transition-colors cursor-pointer">
                    ZATWIERDŹ
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Banner (Image 1 Simulation) */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neu-flat rounded-[2.5rem] p-10 flex flex-col items-center text-center"
          >
            <div className="flex gap-4 mb-8">
              <div className="neu-pressed w-20 h-20 rounded-3xl flex items-center justify-center"><Smartphone className="w-10 h-10 text-gray-600"/></div>
              <div className="neu-flat-sm w-20 h-20 rounded-3xl flex items-center justify-center"><CheckCircle2 className="w-10 h-10 text-gray-600"/></div>
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-2">Wsparcie PWA</h3>
            <p className="text-gray-500 font-medium">(na wszystkie urządzenia)</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="neu-flat rounded-[2.5rem] p-10 flex flex-col items-center text-center justify-center"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 neu-flat-sm rounded-2xl flex items-center justify-center text-gray-800">
                <ShiftBaseLogo className="w-7 h-7" />
              </div>
              <span className="text-4xl font-black text-gray-800">ShiftBase</span>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="neu-flat-sm px-5 py-3 rounded-2xl font-bold text-gray-700 flex items-center gap-2"><span className="text-xl">🇵🇱</span> PL</div>
              <div className="neu-flat-sm px-5 py-3 rounded-2xl font-bold text-gray-700 flex items-center gap-2"><span className="text-xl">🇬🇧</span> EN</div>
              <div className="neu-flat-sm px-5 py-3 rounded-2xl font-bold text-gray-700 flex items-center gap-2"><span className="text-xl">🇺🇦</span> UA</div>
            </div>
            <p className="text-gray-500 font-medium">Trójjęzyczny interfejs</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="neu-flat rounded-[2.5rem] p-10 flex flex-col items-center text-center"
          >
            <div className="flex gap-6 mb-8 items-center">
              <div className="neu-flat-sm w-20 h-20 rounded-3xl flex items-center justify-center"><Zap className="w-10 h-10 text-gray-600"/></div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-2 neu-pressed rounded-full"></div>
                <div className="w-16 h-2 neu-pressed rounded-full"></div>
                <div className="w-10 h-2 neu-pressed rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-2">Profesjonalny UI/UX</h3>
            <p className="text-gray-500 font-medium">(Dźwięki, Animacje)</p>
          </motion.div>
        </div>
      </section>

      {/* Export & Sharing Section */}
      <section className="py-24 px-6 bg-[#e0e5ec]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-20 h-20 rounded-3xl neu-flat flex items-center justify-center text-amber-500 mb-6">
              <Share2 className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-800">
              Eksportuj i <br/><span className="text-amber-500">udostępniaj</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Twoje dane są zawsze gotowe do przesłania. Generuj profesjonalne pliki PDF, arkusze Excel lub wysyłaj zdefiniowane wiadomości bezpośrednio przez WhatsApp.
            </p>
            <ul className="space-y-6 pt-4">
              <li className="flex items-center gap-5 text-gray-600 font-bold text-xl">
                <div className="neu-pressed rounded-full p-3"><FileOutput className="w-6 h-6 text-blue-500" /></div> Eksport do PDF
              </li>
              <li className="flex items-center gap-5 text-gray-600 font-bold text-xl">
                <div className="neu-pressed rounded-full p-3"><FileSpreadsheet className="w-6 h-6 text-emerald-500" /></div> Zestawienia w Excel (XLS)
              </li>
              <li className="flex items-center gap-5 text-gray-600 font-bold text-xl">
                <div className="neu-pressed rounded-full p-3"><MessageCircle className="w-6 h-6 text-green-500" /></div> Bezpośrednia integracja z WhatsApp
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[480px] mx-auto h-[500px] flex items-center justify-center"
          >
            {/* Main Phone Frame */}
            <div className="absolute z-10 w-64 h-[450px] neu-flat rounded-[3rem] p-6 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-2xl font-black text-gray-800">ShiftBase</span>
              </div>
              <div className="w-32 h-32 neu-pressed rounded-3xl flex items-center justify-center opacity-50">
                <ShiftBaseLogo className="w-16 h-16 text-gray-400" />
              </div>
            </div>

            {/* PDF Card (Floating Left) */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute z-20 -left-12 top-20 neu-flat rounded-3xl p-5 w-36 rotate-[-12deg]"
            >
              <div className="flex flex-col items-center gap-3">
                <BarChart3 className="w-12 h-12 text-blue-500" />
                <span className="font-black text-gray-800 text-lg">PDF</span>
              </div>
            </motion.div>

            {/* Excel Card (Floating Right Top) */}
            <motion.div 
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute z-20 -right-8 top-12 neu-flat rounded-3xl p-5 w-40 rotate-[8deg]"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="font-black text-gray-800 text-xl tracking-wider">EXCEL</div>
                <div className="grid grid-cols-4 gap-1 w-full mt-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-3 rounded-sm ${i === 0 ? 'bg-emerald-400' : 'bg-gray-200'}`}></div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-2 self-end">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-bold text-gray-400 leading-none">DANE<br/>XLS</span>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Bubble (Floating Right Bottom) */}
            <motion.div 
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute z-30 -right-16 bottom-24 neu-flat rounded-3xl rounded-bl-sm p-4 w-60 rotate-[-5deg]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full neu-pressed flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-wider leading-tight">Udostępnij na<br/>WhatsApp</span>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-xs font-bold text-gray-800">Wysyłanie...</p>
                  <p className="text-[10px] text-gray-500">Zdefiniowana Wiadomość</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[480px] mx-auto"
          >
            <div className="neu-flat rounded-[2.5rem] p-8 w-full">
              
              {/* Top Stats Grid */}
              <div className="grid grid-cols-2 gap-5 mb-6">
                
                {/* Total */}
                <div className="neu-flat-sm rounded-3xl p-5">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Łączne</span>
                    <div className="w-8 h-8 neu-flat rounded-xl flex items-center justify-center">
                      <Clock className="w-4 h-4 text-amber-500" />
                    </div>
                  </div>
                  <p className="text-3xl font-black text-gray-800 mb-1">59.3h</p>
                  <p className="text-sm font-medium text-gray-500">7 wpisów</p>
                </div>

                {/* Week */}
                <div className="neu-flat-sm rounded-3xl p-5">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tydzień</span>
                    <div className="w-8 h-8 neu-flat rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-amber-500" />
                    </div>
                  </div>
                  <p className="text-3xl font-black text-gray-800 mb-1">23.3h</p>
                  <p className="text-sm font-medium text-gray-500">3 wpisy</p>
                </div>

                {/* Month */}
                <div className="neu-flat-sm rounded-3xl p-5">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Miesiąc</span>
                    <div className="w-8 h-8 neu-flat rounded-xl flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-amber-500" />
                    </div>
                  </div>
                  <p className="text-3xl font-black text-gray-800 mb-1">59.3h</p>
                  <p className="text-sm font-medium text-gray-500">7 wpisów</p>
                </div>

                {/* Average */}
                <div className="neu-flat-sm rounded-3xl p-5">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Średnia</span>
                    <div className="w-8 h-8 neu-flat rounded-xl flex items-center justify-center">
                      <Activity className="w-4 h-4 text-amber-500" />
                    </div>
                  </div>
                  <p className="text-3xl font-black text-gray-800 mb-1">8.5h</p>
                  <p className="text-sm font-medium text-gray-500">dzienna</p>
                </div>

              </div>

              {/* Chart Section */}
              <div className="neu-flat-sm rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-bold text-gray-700">Godziny w tym tygodniu</span>
                </div>
                
                <div className="neu-pressed rounded-2xl p-6 h-48 relative flex items-end justify-between">
                  {/* Chart Bars */}
                  {[
                    { day: 'Pn', val: 7.8, height: '70%' },
                    { day: 'Wt', val: 7.8, height: '70%' },
                    { day: 'Śr', val: 7.8, height: '70%' },
                    { day: 'Cz', val: 0, height: '0%' },
                    { day: 'Pt', val: 0, height: '0%' },
                    { day: 'Sb', val: 0, height: '0%' },
                    { day: 'Nd', val: 0, height: '0%' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 relative z-10 w-8">
                      {item.val > 0 && (
                        <span className="text-xs font-bold text-gray-600 absolute -top-6">{item.val}</span>
                      )}
                      <div className="w-full bg-gray-200/50 rounded-t-lg relative flex-grow flex items-end justify-center" style={{ height: '100px' }}>
                         {item.val > 0 && (
                           <div 
                             className="w-full rounded-t-lg bg-gradient-to-b from-blue-300 via-amber-400 to-amber-600 shadow-[2px_0_5px_rgba(0,0,0,0.2)]" 
                             style={{ height: item.height }}
                           />
                         )}
                      </div>
                      <span className="text-xs font-bold text-gray-600">{item.day}</span>
                    </div>
                  ))}
                  
                  {/* Bottom Line */}
                  <div className="absolute bottom-10 left-4 right-4 h-px bg-gray-300/50"></div>
                </div>
              </div>

            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-20 h-20 rounded-3xl neu-flat flex items-center justify-center text-amber-500 mb-6">
              <BarChart3 className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-800">
              Twój czas pod <br/><span className="text-amber-500">pełną kontrolą</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Śledź swoje postępy na bieżąco. Przejrzysty panel główny (Dashboard) dostarcza Ci najważniejszych statystyk w czasie rzeczywistym.
            </p>
            <ul className="space-y-6 pt-4">
              <li className="flex items-center gap-5 text-gray-600 font-bold text-xl">
                <div className="neu-pressed rounded-full p-3"><CheckCircle2 className="w-6 h-6 text-amber-500" /></div> Szybkie formularze dodawania
              </li>
              <li className="flex items-center gap-5 text-gray-600 font-bold text-xl">
                <div className="neu-pressed rounded-full p-3"><CheckCircle2 className="w-6 h-6 text-amber-500" /></div> Kategoryzacja kolorystyczna
              </li>
              <li className="flex items-center gap-5 text-gray-600 font-bold text-xl">
                <div className="neu-pressed rounded-full p-3"><CheckCircle2 className="w-6 h-6 text-amber-500" /></div> Powiązanie czasu z klientem
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section (Image 8 Simulation) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative w-full max-w-[480px] mx-auto"
          >
            <div className="neu-flat rounded-[2.5rem] p-8 w-full">
              <h3 className="font-black text-2xl text-gray-800 mb-3">Aktywne Projekty</h3>
              <p className="text-gray-500 font-medium mb-8">Zarządzaj swoimi projektami i przypisuj do nich wpisy czasu.</p>
              
              <button className="neu-primary px-6 py-4 rounded-2xl font-bold text-sm mb-8 flex items-center gap-2 tracking-wide w-full justify-center sm:w-auto">
                <Plus className="w-5 h-5"/> DODAJ PROJEKT
              </button>
              
              <div className="neu-pressed rounded-2xl p-4 mb-6 flex justify-between items-center text-gray-600 font-bold cursor-pointer">
                Ostatnie użycie <ChevronRight className="w-5 h-5 rotate-90"/>
              </div>

              <div className="space-y-5">
                {/* Project 1 */}
                <div className="neu-flat-sm rounded-2xl p-5 flex items-center justify-between relative overflow-hidden group cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-400"></div>
                  <div className="pl-3">
                    <h4 className="font-black text-lg text-gray-800 mb-1 group-hover:text-amber-500 transition-colors">Sprzątanie Hali</h4>
                    <p className="text-emerald-500 font-bold">47.5h</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-gray-400 hidden sm:block">Ostatnio użyte: 22.03.2026</span>
                    <div className="flex gap-3">
                      <button className="neu-button w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:text-amber-500"><Edit2 className="w-5 h-5"/></button>
                      <button className="neu-button w-12 h-12 rounded-2xl flex items-center justify-center text-red-400 hover:text-red-600"><Trash2 className="w-5 h-5"/></button>
                    </div>
                  </div>
                </div>
                
                {/* Project 2 */}
                <div className="neu-flat-sm rounded-2xl p-5 flex items-center justify-between relative overflow-hidden group cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-400"></div>
                  <div className="pl-3">
                    <h4 className="font-black text-lg text-gray-800 mb-1 group-hover:text-amber-500 transition-colors">Abc</h4>
                    <p className="text-emerald-500 font-bold">95.0h</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-gray-400 hidden sm:block">Ostatnio użyte: 12.03.2026</span>
                    <div className="flex gap-3">
                      <button className="neu-button w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:text-amber-500"><Edit2 className="w-5 h-5"/></button>
                      <button className="neu-button w-12 h-12 rounded-2xl flex items-center justify-center text-red-400 hover:text-red-600"><Trash2 className="w-5 h-5"/></button>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="neu-flat-sm rounded-2xl p-5 flex items-center justify-between relative overflow-hidden group cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-500"></div>
                  <div className="pl-3">
                    <h4 className="font-black text-lg text-gray-800 mb-1 group-hover:text-amber-500 transition-colors">Sortownia warzyw</h4>
                    <p className="text-amber-500 font-bold">47.5h</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-gray-400 hidden sm:block">Ostatnio użyte: 16.01.2026</span>
                    <div className="flex gap-3">
                      <button className="neu-button w-12 h-12 rounded-2xl flex items-center justify-center text-gray-500 hover:text-amber-500"><Edit2 className="w-5 h-5"/></button>
                      <button className="neu-button w-12 h-12 rounded-2xl flex items-center justify-center text-red-400 hover:text-red-600"><Trash2 className="w-5 h-5"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="w-20 h-20 rounded-3xl neu-flat flex items-center justify-center text-amber-500 mb-6">
              <Briefcase className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-800">
              Zarządzaj bazą <br/><span className="text-amber-500">klientów i projektów</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Dodawaj nowych klientów w mgnieniu oka. Przechowuj dane kontaktowe, notatki i przypisuj do nich projekty. Przejrzysty interfejs w stylu Neumorphism sprawia, że wprowadzanie danych to czysta przyjemność.
            </p>
            <ul className="space-y-6 pt-4">
              <li className="flex items-center gap-5 text-gray-600 font-bold text-xl">
                <div className="neu-pressed rounded-full p-3"><CheckCircle2 className="w-6 h-6 text-amber-500" /></div> Szybkie formularze dodawania
              </li>
              <li className="flex items-center gap-5 text-gray-600 font-bold text-xl">
                <div className="neu-pressed rounded-full p-3"><CheckCircle2 className="w-6 h-6 text-amber-500" /></div> Kategoryzacja kolorystyczna
              </li>
              <li className="flex items-center gap-5 text-gray-600 font-bold text-xl">
                <div className="neu-pressed rounded-full p-3"><CheckCircle2 className="w-6 h-6 text-amber-500" /></div> Powiązanie czasu z klientem
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Reports Section (Image 3 Simulation) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-20 h-20 rounded-3xl neu-flat flex items-center justify-center text-amber-500 mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-800">
              Profesjonalny <br/><span className="text-amber-500">Generator Raportów</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Generuj szczegółowe raporty z przepracowanych godzin. Wybieraj spośród różnych szablonów i błyskawicznie udostępniaj podsumowania bezpośrednio przez WhatsApp lub kopiuj do schowka.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[480px] mx-auto"
          >
            <div className="neu-flat rounded-[2.5rem] p-8 w-full">
              <h3 className="font-black text-2xl text-gray-800 mb-1">Generator Raportów</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Profesjonalne szablony wiadomości</p>
              
              <p className="text-sm font-bold text-gray-800 mb-4">Wybierz Szablon</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="neu-flat-sm rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:text-amber-500 transition-colors">
                  <Zap className="w-6 h-6 text-amber-500"/>
                  <span className="text-xs font-bold text-gray-800">Minimalny</span>
                </div>
                <div className="neu-pressed rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer">
                  <FileText className="w-6 h-6 text-blue-400"/>
                  <span className="text-xs font-bold text-gray-800">Standardowy</span>
                </div>
                <div className="neu-flat-sm rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:text-emerald-500 transition-colors">
                  <BarChart3 className="w-6 h-6 text-emerald-500"/>
                  <span className="text-xs font-bold text-gray-800">Rozbudowany</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="neu-flat-sm rounded-2xl p-4 text-center">
                  <p className="text-3xl font-black text-amber-500 mb-1">47.5</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Godziny</p>
                </div>
                <div className="neu-flat-sm rounded-2xl p-4 text-center">
                  <p className="text-3xl font-black text-gray-800 mb-1">5</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Wpisów</p>
                </div>
                <div className="neu-flat-sm rounded-2xl p-4 text-center">
                  <p className="text-3xl font-black text-purple-500 mb-1">1</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Projektów</p>
                </div>
                <div className="neu-flat-sm rounded-2xl p-4 text-center">
                  <p className="text-3xl font-black text-blue-500 mb-1">5</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dni</p>
                </div>
              </div>

              <div className="neu-pressed rounded-3xl p-6 mb-8 h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e0e5ec] z-10 top-1/2 pointer-events-none"></div>
                <pre className="text-xs font-mono text-gray-600 whitespace-pre-wrap leading-relaxed">
{`# 📊 Generator Raportów
Jan Kazimierz Kowalski
**21.03.2026**

---
**Dane Osobowe**
• Imię (imiona): Jan Kazimierz
• Adres e-mail: kowalski@email.pl`}
                </pre>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="neu-primary py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 tracking-wide">
                  <Copy className="w-5 h-5"/> KOPIUJ
                </button>
                <button className="neu-flat-sm py-4 rounded-2xl font-bold text-sm text-gray-800 flex items-center justify-center gap-2 tracking-wide hover:text-green-600 transition-colors">
                  <MessageCircle className="w-5 h-5"/> WHATSAPP
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
