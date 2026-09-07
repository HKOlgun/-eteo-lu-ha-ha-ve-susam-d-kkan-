import { PhoneCall, Leaf, ShieldCheck, Truck, MapPin, Clock, ArrowRight, Menu, X, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const phoneNumber = "+905323171398";

  const products = [
    {
      title: "Taze Çekilmiş Haşhaş Ezmesi",
      desc: "Sarı ve siyah haşhaş, taş değirmende taze çekilmiş, %100 doğal.",
      badges: ["Taze Çekim", "Katkısız"],
      img: "/hashas.jpeg", // Poppy seeds / spices visual
    },
    {
      title: "Kavrulmuş Susam",
      desc: "Altın sarısı, çıtır, yoğun aromalı yerli susam.",
      badges: ["Yerli Üretim"],
      img: "/susam.jpeg", // Sesame
    },
    {
      title: "Geleneksel Ev Tarhanası",
      desc: "Güneşte kurutulmuş, bol sebzeli, katkısız köy tarhanası.",
      badges: ["Geleneksel", "Doğal"],
      img: "/tarhana.jpeg", // Soup/spices
    },
    {
      title: "Taş Değirmen Tahin",
      desc: "Kıvamı yoğun, saf susamdan çifte kavrulmuş geleneksel usul tahin.",
      badges: ["Çifte Kavrulmuş"],
      img: "/tahin.jpeg", // Tahini / sauce
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-slate bg-brand-cream overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-slate/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-serif text-3xl font-bold tracking-tight text-brand-slate uppercase">
                Çeteoğlu
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] mt-[-4px] text-brand-terracotta">
                Haşhaş & Susam
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center text-[11px] uppercase tracking-widest font-semibold opacity-70">
              <button onClick={() => scrollTo('urunler')} className="hover:text-brand-terracotta transition-colors">Ürünlerimiz</button>
              <button onClick={() => scrollTo('hakkimizda')} className="hover:text-brand-terracotta transition-colors">Hakkımızda</button>
              <button onClick={() => scrollTo('iletisim')} className="hover:text-brand-terracotta transition-colors">İletişim & Konum</button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a 
                href={`tel:${phoneNumber}`} 
                className="bg-brand-olive text-white px-6 py-3 rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-opacity-90 transition-all"
              >
                Hemen Ara / Sipariş Ver
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-slate hover:text-brand-terracotta p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-cream border-t border-brand-slate/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
                <button onClick={() => scrollTo('urunler')} className="block w-full text-left px-3 py-4 text-base font-medium text-brand-slate hover:text-brand-terracotta border-b border-brand-slate/5">Ürünlerimiz</button>
                <button onClick={() => scrollTo('hakkimizda')} className="block w-full text-left px-3 py-4 text-base font-medium text-brand-slate hover:text-brand-terracotta border-b border-brand-slate/5">Hakkımızda</button>
                <button onClick={() => scrollTo('iletisim')} className="block w-full text-left px-3 py-4 text-base font-medium text-brand-slate hover:text-brand-terracotta border-b border-brand-slate/5">İletişim & Konum</button>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="mt-4 flex w-full items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-brand-terracotta hover:bg-brand-terracotta-dark"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Hemen Ara / Sipariş Ver
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left relative"
              >
                <div className="hidden lg:block absolute -left-12 top-0" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  <span className="text-[10px] uppercase tracking-[0.5em] text-brand-terracotta font-bold">Gelenekten Sofranıza</span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] mb-6">
                  Gelenekten Sofranıza <br className="hidden lg:block"/>
                  <span className="italic text-brand-terracotta text-6xl md:text-7xl lg:text-[5.5rem]">Doğal Lezzetler</span>
                </h1>
                <p className="mt-6 text-sm leading-relaxed opacity-80 mb-8 max-w-sm mx-auto lg:mx-0">
                  Yılların tecrübesiyle, taş değirmende özenle çekilen taze haşhaş, altın sarısı kavrulmuş susam ve katkısız yöresel tatlar. Sağlık ve lezzet bir arada.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <button 
                    onClick={() => scrollTo('urunler')}
                    className="bg-brand-slate text-white px-8 py-4 rounded-full text-[12px] uppercase tracking-widest font-bold hover:bg-black transition-colors"
                  >
                    Ürünleri İncele
                  </button>
                  <a 
                    href={`https://wa.me/905323171398`}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-brand-slate text-brand-slate px-8 py-4 rounded-full text-[12px] uppercase tracking-widest font-bold hover:bg-brand-slate hover:text-white transition-colors flex items-center justify-center"
                  >
                    WhatsApp ile Sipariş
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-16 lg:mt-0 lg:col-span-6 relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-brand-slate/10 mix-blend-multiply z-10 rounded-3xl"></div>
                  <img
                    className="w-full h-full object-cover"
                    src="/hero.jpeg"
                    alt="Taş değirmende tahin ve haşhaş"
                  />
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-olive rounded-full opacity-20 blur-3xl z-0"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-terracotta rounded-full opacity-20 blur-3xl z-0"></div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Trust & Value Props Bar */}
        <section className="bg-brand-cream text-brand-slate py-8 border-y border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex gap-3 items-center justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full border border-brand-terracotta flex items-center justify-center text-brand-terracotta text-xs font-bold">1</div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Geleneksel Taş Değirmen</span>
                  <span className="text-[10px] opacity-60 italic">Kusursuz Lezzet</span>
                </div>
              </div>
              <div className="flex gap-3 items-center justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full border border-brand-terracotta flex items-center justify-center text-brand-terracotta text-xs font-bold">2</div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Taze Günlük Çekim</span>
                  <span className="text-[10px] opacity-60 italic">Siparişe Özel Üretim</span>
                </div>
              </div>
              <div className="flex gap-3 items-center justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full border border-brand-terracotta flex items-center justify-center text-brand-terracotta text-xs font-bold">3</div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider">%100 Doğal & Katkısız</span>
                  <span className="text-[10px] opacity-60 italic">Saf ve Temiz İçerik</span>
                </div>
              </div>
              <div className="flex gap-3 items-center justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full border border-brand-terracotta flex items-center justify-center text-brand-terracotta text-xs font-bold">4</div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Türkiye Geneli Kargo</span>
                  <span className="text-[10px] opacity-60 italic">Hızlı Teslimat</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="urunler" className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-[10px] font-bold text-brand-terracotta tracking-[0.3em] uppercase mb-4">Öne Çıkanlar</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-slate">Doğal ve Yöresel <br/>Ürünlerimiz</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 flex flex-col gap-3 border border-black/5 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="relative h-48 md:h-56 overflow-hidden rounded-sm">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow mt-2">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div>
                        <h4 className="font-serif font-bold text-lg text-brand-slate leading-tight">{product.title}</h4>
                      </div>
                      {product.badges[0] && (
                        <span className="text-[10px] bg-brand-cream px-2 py-1 rounded font-bold uppercase tracking-wider text-brand-slate whitespace-nowrap">
                          {product.badges[0]}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] opacity-70 text-brand-slate flex-grow">
                      {product.desc}
                    </p>
                    <a 
                      href={`https://wa.me/905323171398?text=Merhaba, ${product.title} hakkında bilgi almak ve sipariş vermek istiyorum.`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center text-brand-slate text-[11px] uppercase tracking-widest font-bold group/btn hover:text-brand-terracotta transition-colors"
                    >
                      Sipariş Ver
                      <ArrowRight className="w-3 h-3 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Teaser (Optional but good for flow) */}
        <section id="hakkimizda" className="py-24 bg-[#EBE5D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-brand-terracotta tracking-widest uppercase mb-3">Hikayemiz</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-brand-slate mb-6">Taş Değirmenden Gelen Miras</h3>
                <p className="text-brand-slate/80 text-lg leading-relaxed mb-6">
                  Kuşaktan kuşağa aktarılan tecrübemizle, en kaliteli yerli tohumları özenle seçiyor, geleneksel taş değirmenlerimizde hiçbir katkı maddesi kullanmadan taze taze çekiyoruz.
                </p>
                <p className="text-brand-slate/80 text-lg leading-relaxed mb-8">
                  Amacımız, endüstriyel üretimden uzak, özlediğiniz o eski köy lezzetlerini, saflığını ve şifasını koruyarak sofralarınıza ulaştırmaktır.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Yerli ve özenle seçilmiş tohumlar', 'Geleneksel taş değirmen üretimi', 'Koruyucu ve katkı maddesi içermez', 'Taptaze ve günlük sipariş hazırlığı'].map((item, i) => (
                    <li key={i} className="flex items-center text-brand-slate font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-terracotta mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/geleneksel.jpeg" 
                    alt="Geleneksel üretim" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-brand-cream p-8 rounded-3xl shadow-xl hidden md:block">
                  <p className="font-serif text-4xl font-bold text-brand-terracotta mb-2">100%</p>
                  <p className="font-bold text-brand-slate uppercase tracking-wider text-sm">Doğal &<br/>Katkısız</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="iletisim" className="py-24 bg-brand-cream relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold text-brand-terracotta tracking-widest uppercase mb-3">İletişim</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-brand-slate">Bize Ulaşın</h3>
              <p className="mt-4 text-lg text-brand-slate/70">
                Sipariş vermek veya ürünlerimiz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 border border-black/5 rounded-sm">
              
              {/* Contact Info */}
              <div className="flex flex-col justify-center">
                <h4 className="font-serif text-3xl font-bold text-brand-slate mb-8">Mağaza İletişim Bilgileri</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start border-b border-black/5 pb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 border border-brand-terracotta rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-brand-terracotta" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h5 className="text-[11px] font-bold text-brand-slate uppercase tracking-wider mb-1">Adres</h5>
                      <p className="text-brand-slate/70 text-sm leading-relaxed">
                        Barbaros caddesi no:239B<br />
                        Merkez, Uşak
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start border-b border-black/5 pb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 border border-brand-terracotta rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-brand-terracotta" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h5 className="text-[11px] font-bold text-brand-slate uppercase tracking-wider mb-1">Çalışma Saatleri</h5>
                      <p className="text-brand-slate/70 text-sm">
                        Pzt - Cts: 08:00 - 20:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="inline-flex items-center justify-center px-8 py-4 border border-brand-olive text-[12px] font-bold tracking-widest uppercase rounded-full text-brand-slate hover:bg-brand-olive hover:text-white transition-all duration-300"
                    >
                      <PhoneCall className="w-4 h-4 mr-3" />
                      Hemen Ara
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative h-64 lg:h-auto min-h-[300px] w-full border-4 border-white rounded-sm shadow-sm overflow-hidden bg-brand-cream">
                <iframe
                  title="Uşak Merkez Harita Konumu"
                  src="https://maps.google.com/maps?q=Barbaros%20caddesi%20no:239B%20U%C5%9Fak%20merkez&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

            </div>
          </div>
        </section>

      </main>

      <footer className="bg-brand-cream border-t border-black/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12 text-brand-slate">
            
            <div className="md:col-span-12 lg:col-span-5">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-slate uppercase mb-1">
                Çeteoğlu
              </h2>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-terracotta block mb-6">
                Haşhaş & Susam
              </span>
              <p className="text-brand-slate/70 text-[13px] leading-relaxed max-w-sm mb-6">
                Yarım asrı aşan tecrübemizle, taş değirmende özenle hazırladığımız en doğal ve yöresel lezzetleri sofralarınıza ulaştırıyoruz.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-brand-slate hover:border-brand-terracotta hover:text-brand-terracotta transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-brand-slate hover:border-brand-terracotta hover:text-brand-terracotta transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
              <h3 className="text-[11px] font-bold text-brand-slate uppercase tracking-widest mb-4 opacity-50">Hızlı Menü</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollTo('urunler')} className="text-[13px] text-brand-slate/70 hover:text-brand-terracotta transition-colors">Ürünlerimiz</button></li>
                <li><button onClick={() => scrollTo('hakkimizda')} className="text-[13px] text-brand-slate/70 hover:text-brand-terracotta transition-colors">Hakkımızda</button></li>
                <li><button onClick={() => scrollTo('iletisim')} className="text-[13px] text-brand-slate/70 hover:text-brand-terracotta transition-colors">İletişim</button></li>
              </ul>
            </div>

            <div className="md:col-span-6 lg:col-span-3">
              <h3 className="text-[11px] font-bold text-brand-slate uppercase tracking-widest mb-4 opacity-50">İletişim</h3>
              <ul className="space-y-3">
                <li className="text-[13px] text-brand-slate/70 flex items-center">
                  <PhoneCall className="w-4 h-4 mr-3 text-brand-terracotta" />
                  <span>0(532) 317 13 98</span>
                </li>
                <li className="text-[13px] text-brand-slate/70 flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-brand-terracotta" />
                  <span>Merkez, Uşak</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="pt-8 border-t border-black/5 text-center md:flex md:justify-between md:text-left items-center">
            <p className="text-brand-slate/40 text-[11px] uppercase tracking-wider">
              &copy; {new Date().getFullYear()} Çeteoğlu Haşhaş Susam. Tüm hakları saklıdır.
            </p>
            <p className="text-brand-terracotta/80 text-sm mt-4 md:mt-0 italic font-serif">
              "Doğanın en saf hali..."
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

