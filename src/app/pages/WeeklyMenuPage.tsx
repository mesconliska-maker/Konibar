import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, ChefHat } from "lucide-react";

export function WeeklyMenuPage() {
  const [selectedDay, setSelectedDay] = useState(4); // Thursday = index 4

  const weeklyMenu = [
    {
      day: "Pondělí",
      date: "22.2.",
      soup: { name: "Česnečka s krutony", price: "45 Kč" },
      meals: [
        { name: "Svíčková na smetaně, knedlík", price: "155 Kč" },
        { name: "Kuřecí prsa na žampionech, rýže", price: "145 Kč" },
        { name: "Smažený sýr, brambor, tatarka", price: "125 Kč" },
      ],
    },
    {
      day: "Úterý",
      date: "23.2.",
      soup: { name: "Gulášová polévka", price: "45 Kč" },
      meals: [
        { name: "Vepřový řízek, bramborový salát", price: "145 Kč" },
        { name: "Kuřecí kung-pao, rýže", price: "135 Kč" },
        { name: "Špagety carbonara", price: "125 Kč" },
      ],
    },
    {
      day: "Středa",
      date: "24.2.",
      soup: { name: "Zelňačka", price: "45 Kč" },
      meals: [
        { name: "Moravský vrabec, zelí, knedlík", price: "165 Kč" },
        { name: "Losos na másle, bramborová kaše", price: "175 Kč" },
        { name: "Grilovaná zelenina s fetou", price: "115 Kč" },
      ],
    },
    {
      day: "Čtvrtek",
      date: "25.2.",
      isToday: true,
      soup: { name: "Hovězí vývar s nudlemi", price: "45 Kč" },
      meals: [
        { name: "Vepřová pečeně, knedlík, zelí", price: "145 Kč" },
        { name: "Kuřecí řízek, bramborová kaše", price: "135 Kč" },
        { name: "Lasagne bolognese", price: "135 Kč" },
      ],
    },
    {
      day: "Pátek",
      date: "26.2.",
      soup: { name: "Rybí polévka", price: "50 Kč" },
      meals: [
        { name: "Smažený kapr, bramborový salát", price: "155 Kč" },
        { name: "Kuřecí gyros, hranolky, zelenina", price: "145 Kč" },
        { name: "Rizoto s mořskými plody", price: "165 Kč" },
      ],
    },
    {
      day: "Sobota",
      date: "27.2.",
      soup: { name: "Polévka dle denní nabídky", price: "45 Kč" },
      meals: [
        { name: "Menu 1 dle denní nabídky", price: "—" },
        { name: "Menu 2 dle denní nabídky", price: "—" },
        { name: "Menu 3 dle denní nabídky", price: "—" },
      ],
    },
  ];

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
            <span>Týden 22. - 27. února 2026</span>
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
                  <span className="text-xl text-[#B8860B] font-serif ml-4">
                    {weeklyMenu[selectedDay].soup.price}
                  </span>
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
                    <span className="text-lg text-[#B8860B] font-serif">
                      {menu.soup.price}
                    </span>
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
