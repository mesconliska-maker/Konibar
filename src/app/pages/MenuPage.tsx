import { useState } from "react";
import { motion } from "motion/react";
import { UtensilsCrossed } from "lucide-react";

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("predkrmy");

  const menuCategories = [
    { id: "predkrmy", name: "Předkrmy" },
    { id: "hlavni", name: "Hlavní jídla" },
    { id: "pizza", name: "Pizza" },
    { id: "steaky", name: "Steaky" },
    { id: "burgery", name: "Burgery" },
    { id: "salaty", name: "Saláty" },
    { id: "napoje", name: "Nápoje" },
  ];

  const menuItems = {
    predkrmy: [
      { name: "Tatarák z hovězího masa", description: "150g, toast, česnek", price: "175 Kč" },
      { name: "Nakládaný hermelín", description: "s cibulí, paprikou, chlebem", price: "95 Kč" },
      { name: "Česnekový chléb", description: "s hermelínem", price: "75 Kč" },
      { name: "Kuřecí křídla pikantní", description: "8ks, BBQ omáčka", price: "145 Kč" },
      { name: "Smažené sýrové tyčinky", description: "s tatarskou omáčkou", price: "85 Kč" },
    ],
    hlavni: [
      { name: "Svíčková na smetaně", description: "knedlík, brusinky", price: "185 Kč" },
      { name: "Vepřový řízek", description: "bramborový salát", price: "165 Kč" },
      { name: "Kuřecí prsíčka na žampionech", description: "rýže, zelenina", price: "155 Kč" },
      { name: "Smažený sýr", description: "bramborová kaše, tatarská omáčka", price: "135 Kč" },
      { name: "Moravský vrabec", description: "zelí, knedlík", price: "175 Kč" },
      { name: "Vepřová pečeně", description: "knedlík, zelí", price: "155 Kč" },
      { name: "Losos na grilu", description: "bramborová kaše, zelenina", price: "225 Kč" },
      { name: "Kuřecí gyros", description: "hranolky, tzatziki, zelenina", price: "165 Kč" },
    ],
    pizza: [
      { name: "Pizza Margherita", description: "rajčata, mozzarella, bazalka", price: "145 Kč" },
      { name: "Pizza Salámová", description: "salám, mozzarella, rajčata", price: "165 Kč" },
      { name: "Pizza Šunková", description: "šunka, mozzarella, rajčata", price: "165 Kč" },
      { name: "Pizza Hawai", description: "šunka, ananas, mozzarella", price: "175 Kč" },
      { name: "Pizza Quattro Formaggi", description: "4 druhy sýrů", price: "185 Kč" },
      { name: "Pizza Diavola", description: "pikantní salám, pepř, mozzarella", price: "175 Kč" },
      { name: "Pizza Tonno", description: "tuňák, cibule, olivy, mozzarella", price: "185 Kč" },
    ],
    steaky: [
      { name: "Hovězí steak Rib Eye", description: "200g, grilovaná zelenina, hranolky", price: "345 Kč" },
      { name: "Hovězí steak Sirloin", description: "200g, pepřová omáčka, brambory", price: "325 Kč" },
      { name: "Vepřová krkovice", description: "250g, grilovaná zelenina, brambory", price: "195 Kč" },
      { name: "Kuřecí prsa", description: "200g, bylinkové máslo, hranolky", price: "175 Kč" },
      { name: "Vepřová panenka", description: "200g, šampiňonová omáčka, brambory", price: "245 Kč" },
    ],
    burgery: [
      { name: "Classic Burger", description: "hovězí maso, salát, rajče, cibule, okurka", price: "155 Kč" },
      { name: "Cheese Burger", description: "hovězí maso, sýr cheddar, salát, rajče", price: "165 Kč" },
      { name: "BBQ Burger", description: "hovězí maso, BBQ omáčka, bacon, sýr", price: "185 Kč" },
      { name: "Chicken Burger", description: "kuřecí maso, salát, rajče, česnek. omáčka", price: "145 Kč" },
      { name: "Bacon Burger", description: "hovězí maso, crispy bacon, sýr, omáčka", price: "175 Kč" },
    ],
    salaty: [
      { name: "Kuřecí salát", description: "grilované kuře, mix salátů, zelenina, dresing", price: "145 Kč" },
      { name: "Caesar salát", description: "kuře, římský salát, parmazán, krutony", price: "155 Kč" },
      { name: "Řecký salát", description: "rajčata, okurka, feta, olivy, cibule", price: "125 Kč" },
      { name: "Salát s lososem", description: "uzený losos, mix salátů, avokádo", price: "185 Kč" },
      { name: "Zeleninový salát", description: "mix čerstvé zeleniny, dresing", price: "95 Kč" },
    ],
    napoje: [
      { name: "Pilsner Urquell (0,5l)", description: "točené pivo", price: "45 Kč" },
      { name: "Gambrinus (0,5l)", description: "točené pivo", price: "40 Kč" },
      { name: "Radegast (0,5l)", description: "točené pivo", price: "42 Kč" },
      { name: "Coca Cola (0,33l)", description: "", price: "35 Kč" },
      { name: "Kofola (0,33l)", description: "", price: "32 Kč" },
      { name: "Minerální voda (0,33l)", description: "", price: "28 Kč" },
      { name: "Čerstvý pomerančový džus (0,3l)", description: "", price: "55 Kč" },
      { name: "Víno bílé/červené (0,2l)", description: "dle nabídky", price: "45 Kč" },
      { name: "Espresso", description: "", price: "38 Kč" },
      { name: "Cappuccino", description: "", price: "48 Kč" },
    ],
  };

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
            <UtensilsCrossed size={40} className="text-[#B8860B]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2416]">
              Jídelní lístek
            </h1>
          </div>
          <p className="text-xl text-[#6B6254]">
            Objevte naši bohatou nabídku tradičních i moderních pokrmů
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div {...fadeInUp} className="mb-12">
          <div className="flex overflow-x-auto gap-3 pb-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-[#B8860B] text-white shadow-md"
                    : "bg-white text-[#4A4238] hover:bg-[#F5F1E8]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <motion.h2
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-serif text-[#2C2416] mb-8 text-center"
          >
            {menuCategories.find((cat) => cat.id === activeCategory)?.name}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl text-[#2C2416] flex-1 pr-4">{item.name}</h3>
                  <span className="text-2xl text-[#B8860B] font-serif whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-[#6B6254] text-sm leading-relaxed">{item.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Allergen Notice */}
        <motion.div {...fadeInUp} className="mt-16 max-w-3xl mx-auto bg-white rounded-lg p-8">
          <h3 className="text-2xl font-serif text-[#2C2416] mb-4 text-center">
            Důležité informace
          </h3>
          <div className="space-y-3 text-[#4A4238]">
            <p>
              <strong>Alergeny:</strong> Informace o alergenech vám rádi poskytneme na vyžádání.
            </p>
            <p>
              <strong>Rozvoz:</strong> Dovezeme vám jídlo zdarma při objednávce nad 200 Kč v okruhu 5 km.
            </p>
            <p>
              <strong>S sebou:</strong> Všechna jídla můžete objednat s sebou za stejnou cenu.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <p className="text-lg text-[#4A4238] mb-6">
            Rezervujte si stůl nebo si objednejte rozvoz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+420374790133"
              className="bg-[#B8860B] text-white px-8 py-3 rounded-md hover:bg-[#9A7109] transition-colors"
            >
              Zavolejte: +420 374 790 133
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
