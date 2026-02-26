import { motion } from "motion/react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
type MenuItem = {
  type: string;
  name: string;
  price: string;
};
import {
  UtensilsCrossed,
  ShoppingBag,
  Truck,
  Star,
  ArrowRight,
  Clock,
  Phone,
  MapPin
} from "lucide-react";

export function HomePage() {

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  /* ✅ AUTOMATICKÉ MENU */

  const [todaysMenu, setTodaysMenu] = useState<MenuItem[]>([]);
  const [todayLabel, setTodayLabel] = useState("");
  const reviews = [
  { name: "Jana Nováková", rating: 5, text: "Vynikající jídlo a milá obsluha." },
  { name: "Petr Svoboda", rating: 4, text: "Skvělá restaurace." },
  { name: "Marie Dvořáková", rating: 4, text: "Pravidelně objednáváme." },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
];

  useEffect(() => {

  async function loadMenu() {

    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHDAe_aQ0-REXRoXqjvW89z1geWJFK_M40BBvPe2u68tmWDcUBkcu7jb3lTwrmMXxKHtkEiKCSOeI7/pub?output=csv";

    const res = await fetch(url);
    const text = await res.text();

    const rows = text.split("\n").slice(1);

    let data: Record<number, MenuItem[]> = {};

    rows.forEach((row) => {
      if (!row.trim()) return;

      const [day, soup, m1, p1, m2, p2] = row.split(",");
      const dayNumber = Number(day);

      data[dayNumber] = [
        { type: "Polévka", name: soup, price: "" },
        { type: "Menu 1", name: m1, price: `${p1} Kč` },
        { type: "Menu 2", name: m2, price: `${p2} Kč` },
      ];
    });

    const days = [
      "Neděle",
      "Pondělí",
      "Úterý",
      "Středa",
      "Čtvrtek",
      "Pátek",
      "Sobota",
    ];

    let today = new Date().getDay();
    setTodayLabel(days[today]);

    if (today === 0) today = 7;

    setTodaysMenu(data[today] || []);
  }

  // ✅ první načtení
  loadMenu();

  // ✅ AUTO REFRESH každých 5 minut
  const interval = setInterval(loadMenu, 300000);

  // ✅ cleanup
  return () => clearInterval(interval);

}, []);

  /* ================= */

  return (
    <div className="bg-[#FAF8F5]">

      {/* TODAY MENU */}
      <section className="py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif">
            Dnešní menu
          </h2>

          <p className="text-[#6B6254] text-lg">
          Dnes je {todayLabel}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">

          {todaysMenu.length === 0 && (
            <p className="text-center">Načítám menu...</p>
          )}

          {todaysMenu.map((item, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="flex justify-between py-6 border-b"
            >
              <div>
                <span className="text-sm text-[#B8860B] uppercase">
                  {item.type}
                </span>
                <h3 className="text-xl">
                  {item.name}
                </h3>
              </div>

              <div className="text-2xl text-[#B8860B]">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>
        </section>   {/* ✅ TOTO DOPLŇ */}

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2416] mb-6">
              Vítejte v Restauraci Konibar
            </h2>
            <p className="text-lg text-[#4A4238] leading-relaxed mb-4">
              Jsme rodinná restaurace s tradicí, která se nachází v centru města Bor u Tachova. 
              Nabízíme každý den čerstvě připravené menu, široký výběr jídel z našeho stálého 
              jídelního lístku a také možnost rozvozu jídel.
            </p>
            <p className="text-lg text-[#4A4238] leading-relaxed">
              Naše kuchyně kombinuje tradiční české recepty s moderními technologiemi přípravy, 
              abychom vám zajistili nezapomenutelný kulinářský zážitek.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Services */}
      <section className="py-16 md:py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-serif text-[#2C2416] text-center mb-12">
            Naše služby
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed size={32} className="text-[#B8860B]" />
              </div>
              <h3 className="text-2xl text-[#2C2416] mb-3">Restaurace</h3>
              <p className="text-[#6B6254]">
                Příjemné prostředí pro vaše rodinné i pracovní setkání
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={32} className="text-[#B8860B]" />
              </div>
              <h3 className="text-2xl text-[#2C2416] mb-3">S sebou</h3>
              <p className="text-[#6B6254]">
                Všechna jídla můžete zakoupit i s sebou
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} className="text-[#B8860B]" />
              </div>
              <h3 className="text-2xl text-[#2C2416] mb-3">Rozvoz</h3>
              <p className="text-[#6B6254]">
                Dovezeme vám jídlo až domů nebo do práce
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2416] mb-4">
              Naše speciality
            </h2>
            <p className="text-lg text-[#6B6254]">Ochutnejte naše nejoblíbenější pokrmy</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Jídlo ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#9A7109] transition-colors"
            >
              Zobrazit celou galerii
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2416] mb-4">
              Recenze hostů
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#B8860B]">
              <Star size={24} fill="currentColor" />
              <span className="text-3xl font-serif">4.2</span>
              <span className="text-[#6B6254]">/ 5</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FAF8F5] p-6 rounded-lg"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "text-[#B8860B] fill-current" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-[#4A4238] mb-4 italic">"{review.text}"</p>
                <p className="text-[#6B6254]">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#2C2416] to-[#4A4238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Rezervujte si stůl ještě dnes
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Zajistěte si místo v naší restauraci a těšte se na výborné jídlo a příjemnou atmosféru
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/rezervace"
                className="bg-[#B8860B] text-white px-8 py-4 rounded-md hover:bg-[#9A7109] transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Online rezervace
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+420374790133"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white/20 transition-all inline-flex items-center gap-2"
              >
                <Phone size={20} />
                +420 374 790 133
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C2416] mb-8">
                Jak nás najdete
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#2C2416] mb-1">Adresa</h3>
                    <p className="text-[#6B6254]">
                      náměstí Republiky 286<br />
                      348 02 Bor u Tachova
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#2C2416] mb-1">Otevírací doba</h3>
                    <p className="text-[#6B6254]">
                      Po–Pá: 10:00 - 22:00<br />
                      So: 11:00 - 23:00<br />
                      Ne: 11:00 - 21:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#2C2416] mb-1">Telefon</h3>
                    <a href="tel:+420374790133" className="text-[#B8860B] hover:text-[#9A7109]">
                      +420 374 790 133
                    </a>
                  </div>
                </div>
              </div>

              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#9A7109] transition-colors mt-8"
              >
                Úplné kontaktní informace
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.9!2d12.7733!3d49.7511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQ1JzA0LjAiTiAxMsKwNDYnMjMuOSJF!5e0!3m2!1sen!2scz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
