import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Calendar, ChefHat } from "lucide-react";

type DayMenu = {
  day: string;
  date: string;
  isToday?: boolean;
  soup: { name: string; price: string };
  meals: { name: string; price: string }[];
};

const DAY_NAMES = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];

// Vrátí datum pro daný den v aktuálním týdnu (1=Po, 2=Út, ..., 6=So)
function getDateForDay(dayIndex: number): string {
  const today = new Date();
  const currentDay = today.getDay(); // 0=Ne, 1=Po, ...
  const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);
  const target = new Date(monday);
  target.setDate(monday.getDate() + (dayIndex - 1)); // dayIndex: 1=Po...6=So
  return `${target.getDate()}.${target.getMonth() + 1}.`;
}

const SHEETS_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHDAe_aQ0-REXRoXqjvW89z1geWJFK_M40BBvPe2u68tmWDcUBkcu7jb3lTwrmMXxKHtkEiKCSOeI7/pub?output=csv";

export function WeeklyMenuPage() {
  const todayJs = new Date().getDay(); // 0=Ne,1=Po,...,6=So
  // Převedeme na index v weeklyMenu (0=Po, 1=Út, ..., 4=Pá, 5=So)
  const todayIndex = todayJs === 0 ? -1 : todayJs - 1; // -1 = neděle (mimo)

  const [selectedDay, setSelectedDay] = useState(Math.max(0, Math.min(todayIndex, 5)));
  const [weeklyMenu, setWeeklyMenu] = useState<DayMenu[]>([
    { day: "Pondělí",  date: getDateForDay(1), meals: [], soup: { name: "Načítám...", price: "" } },
    { day: "Úterý",   date: getDateForDay(2), meals: [], soup: { name: "Načítám...", price: "" } },
    { day: "Středa",  date: getDateForDay(3), meals: [], soup: { name: "Načítám...", price: "" } },
    { day: "Čtvrtek", date: getDateForDay(4), meals: [], soup: { name: "Načítám...", price: "" } },
    { day: "Pátek",   date: getDateForDay(5), meals: [], soup: { name: "Načítám...", price: "" } },
    { day: "Sobota",  date: getDateForDay(6), meals: [], soup: { name: "Načítám...", price: "" } },
  ]);

  useEffect(() => {
    async function loadMenu() {
      try {
        const res = await fetch(SHEETS_URL);
        const text = await res.text();
        const rows = text.split("\n").slice(1);

        // dayNumber z Sheets: 1=Po, 2=Út, 3=St, 4=Čt, 5=Pá, 6=So, 7=Ne
        const data: Record<number, { soup: string; m1: string; p1: string; m2: string; p2: string }> = {};

        rows.forEach((row) => {
          if (!row.trim()) return;
          const [day, soup, m1, p1, m2, p2] = row.split(",");
          const d = Number(day);
          if (d >= 1 && d <= 6) {
            data[d] = { soup: soup?.trim(), m1: m1?.trim(), p1: p1?.trim(), m2: m2?.trim(), p2: p2?.trim() };
          }
        });

        const todayNum = todayJs === 0 ? 7 : todayJs; // 1=Po...7=Ne

        setWeeklyMenu([
          { day: "Pondělí",  date: getDateForDay(1), isToday: todayNum === 1, soup: { name: data[1]?.soup || "—", price: "" }, meals: [ { name: data[1]?.m1 || "—", price: data[1]?.p1 ? `${data[1].p1} Kč` : "" }, { name: data[1]?.m2 || "—", price: data[1]?.p2 ? `${data[1].p2} Kč` : "" } ] },
          { day: "Úterý",   date: getDateForDay(2), isToday: todayNum === 2, soup: { name: data[2]?.soup || "—", price: "" }, meals: [ { name: data[2]?.m1 || "—", price: data[2]?.p1 ? `${data[2].p1} Kč` : "" }, { name: data[2]?.m2 || "—", price: data[2]?.p2 ? `${data[2].p2} Kč` : "" } ] },
          { day: "Středa",  date: getDateForDay(3), isToday: todayNum === 3, soup: { name: data[3]?.soup || "—", price: "" }, meals: [ { name: data[3]?.m1 || "—", price: data[3]?.p1 ? `${data[3].p1} Kč` : "" }, { name: data[3]?.m2 || "—", price: data[3]?.p2 ? `${data[3].p2} Kč` : "" } ] },
          { day: "Čtvrtek", date: getDateForDay(4), isToday: todayNum === 4, soup: { name: data[4]?.soup || "—", price: "" }, meals: [ { name: data[4]?.m1 || "—", price: data[4]?.p1 ? `${data[4].p1} Kč` : "" }, { name: data[4]?.m2 || "—", price: data[4]?.p2 ? `${data[4].p2} Kč` : "" } ] },
          { day: "Pátek",   date: getDateForDay(5), isToday: todayNum === 5, soup: { name: data[5]?.soup || "—", price: "" }, meals: [ { name: data[5]?.m1 || "—", price: data[5]?.p1 ? `${data[5].p1} Kč` : "" }, { name: data[5]?.m2 || "—", price: data[5]?.p2 ? `${data[5].p2} Kč` : "" } ] },
          { day: "Sobota",  date: getDateForDay(6), isToday: todayNum === 6, soup: { name: data[6]?.soup || "—", price: "" }, meals: [ { name: data[6]?.m1 || "—", price: data[6]?.p1 ? `${data[6].p1} Kč` : "" }, { name: data[6]?.m2 || "—", price: data[6]?.p2 ? `${data[6].p2} Kč` : "" } ] },
        ]);
      } catch (e) {
        console.error("Chyba při načítání menu:", e);
      }
    }

    loadMenu();
    const interval = setInterval(loadMenu, 300000);
    return () => clearInterval(interval);
  }, []);

  // Datum pro hlavičku
  const weekStart = getDateForDay(1);
  const weekEnd = getDateForDay(6);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ChefHat size={40} className="text-[#B8860B]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2416]">
              Týdenní menu
            </h1>
          </div>
          <p className="text-xl text-[#6B6254]">
            Každý den čerstvě připravená menu za výhodné ceny
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-[#4A4238]">
            <Calendar size={20} />
            <span>{weekStart} – {weekEnd} {new Date().getFullYear()}</span>
          </div>
        </motion.div>

        {/* Day Selector - Mobile Tabs */}
        <div className="lg:hidden mb-8">
          <div className="flex overflow-x-auto gap-2 pb-2">
            {weeklyMenu.map((menu, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition-all ${
                  selectedDay === index
                    ? "bg-[#B8860B] text-white"
                    : "bg-white text-[#4A4238] hover:bg-[#F5F1E8]"
                } ${menu.isToday ? "ring-2 ring-[#B8860B] ring-offset-2" : ""}`}
              >
                <div className="text-sm font-medium">{menu.day}</div>
                <div className="text-xs opacity-80">{menu.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Display */}
        <div className="lg:hidden">
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className={`p-6 ${weeklyMenu[selectedDay].isToday ? "bg-[#B8860B] text-white" : "bg-[#F5F1E8] text-[#2C2416]"}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-serif">{weeklyMenu[selectedDay].day}</h2>
                  <p className="text-sm opacity-80">{weeklyMenu[selectedDay].date}</p>
                </div>
                {weeklyMenu[selectedDay].isToday && (
                  <span className="bg-white text-[#B8860B] px-3 py-1 rounded-full text-sm">
                    Dnes
                  </span>
                )}
              </div>
            </div>

            <div className="p-6">
              {/* Soup */}
              <div className="mb-6 pb-6 border-b-2 border-[#E8E3D8]">
                <span className="text-xs text-[#B8860B] uppercase tracking-wide block mb-2">
                  Polévka
                </span>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg text-[#2C2416] flex-1">
                    {weeklyMenu[selectedDay].soup.name}
                  </h3>
                </div>
              </div>

              {/* Meals */}
              <div className="space-y-6">
                {weeklyMenu[selectedDay].meals.map((meal, idx) => (
                  <div key={idx}>
                    <span className="text-xs text-[#B8860B] uppercase tracking-wide block mb-2">
                      Menu {idx + 1}
                    </span>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg text-[#2C2416] flex-1">{meal.name}</h3>
                      <span className="text-xl text-[#B8860B] font-serif ml-4">
                        {meal.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Menu Display */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {weeklyMenu.map((menu, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  menu.isToday ? "ring-2 ring-[#B8860B]" : ""
                }`}
              >
                <div className={`p-4 ${menu.isToday ? "bg-[#B8860B] text-white" : "bg-[#F5F1E8] text-[#2C2416]"}`}>
                  <div className="text-center">
                    <h2 className="text-xl font-serif mb-1">{menu.day}</h2>
                    <p className="text-sm opacity-80">{menu.date}</p>
                    {menu.isToday && (
                      <span className="inline-block bg-white text-[#B8860B] px-3 py-1 rounded-full text-xs mt-2">
                        Dnes
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  {/* Soup */}
                  <div className="mb-5 pb-5 border-b border-[#E8E3D8]">
                    <span className="text-xs text-[#B8860B] uppercase tracking-wide block mb-2">
                      Polévka
                    </span>
                    <h3 className="text-sm text-[#2C2416] mb-2 leading-tight">
                      {menu.soup.name}
                    </h3>
                  </div>

                  {/* Meals */}
                  <div className="space-y-4">
                    {menu.meals.map((meal, idx) => (
                      <div key={idx}>
                        <span className="text-xs text-[#B8860B] uppercase tracking-wide block mb-1">
                          Menu {idx + 1}
                        </span>
                        <h3 className="text-sm text-[#2C2416] mb-2 leading-tight">
                          {meal.name}
                        </h3>
                        <span className="text-lg text-[#B8860B] font-serif">
                          {meal.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <motion.div {...fadeInUp} className="mt-12 bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl text-[#2C2416] mb-2">Denní menu</h3>
              <p className="text-[#6B6254]">
                Podáváme denně od 11:00 do 14:00
              </p>
            </div>
            <div>
              <h3 className="text-xl text-[#2C2416] mb-2">S sebou</h3>
              <p className="text-[#6B6254]">
                Všechna menu můžete objednat i s sebou
              </p>
            </div>
            <div>
              <h3 className="text-xl text-[#2C2416] mb-2">Rozvoz</h3>
              <p className="text-[#6B6254]">
                Dovezeme vám oběd zdarma při objednávce nad 200 Kč
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <p className="text-lg text-[#4A4238] mb-6">
            Máte zájem o rezervaci nebo rozvoz?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+420775941501"
              className="bg-[#B8860B] text-white px-8 py-3 rounded-md hover:bg-[#9A7109] transition-colors"
            >
              Zavolejte nám: +420 775 941 501
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
