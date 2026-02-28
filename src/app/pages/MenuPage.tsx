import { useState } from "react";
import { motion } from "motion/react";
import { UtensilsCrossed } from "lucide-react";

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("predkrmy");

  const menuCategories = [
    { id: "predkrmy", name: "Předkrmy & Polévky" },
    { id: "ryby", name: "Ryby & Rizoto" },
    { id: "kure", name: "Kuřecí maso" },
    { id: "hovezi", name: "Hovězí maso" },
    { id: "veprove", name: "Vepřové maso" },
    { id: "speciality", name: "Speciality" },
    { id: "pizza", name: "Pizza" },
    { id: "testoviny", name: "Těstoviny & Gnocchi" },
    { id: "salaty", name: "Saláty" },
    { id: "bezmasne", name: "Bezmasé pokrmy" },
    { id: "detske", name: "Dětské menu" },
    { id: "prilohy", name: "Přílohy" },
    { id: "omacky", name: "Omáčky" },
    { id: "moucniky", name: "Moučníky" },
  ];

  const menuItems = {
    predkrmy: [
      { name: "Ďábelské topinky sypané sýrem", description: "Topinky, masová pikantní směs, sýr | 4 ks", price: "105 Kč" },
      { name: "Gyoza se sójovou omáčkou ★ SPECIAL", description: "Smažené japonské knedlíčky plněné masem | 150 g", price: "115 Kč" },
      { name: "Poctivá domácí česneková polévka", description: "Se sýrem, krutony a šunkou | 0,33 l", price: "49 Kč" },
      { name: "Polévka dle denní nabídky", description: "Více informací u obsluhy", price: "—" },
    ],
    ryby: [
      { name: "Grilovaný steak z lososa s rajčatovým tatarákem", description: "200 g", price: "299 Kč" },
      { name: "Grilovaný pstruh s bylinkovým máslem", description: "250 g", price: "205 Kč" },
      { name: "Rizoto s mořskými plody a zeleninou", description: "300 g", price: "199 Kč" },
    ],
    kure: [
      { name: "Sweet & chilli stehýnka", description: "S barbecue omáčkou a country hranolky | 200 g", price: "235 Kč" },
      { name: "Kuřecí steak s restovanou slaninou a fazolkami", description: "200 g", price: "215 Kč" },
      { name: "Smažená kuřecí kapsa plněná listovým špenátem a nivou", description: "200 g", price: "215 Kč" },
      { name: "Kuřecí směs Konibar", description: "Kuřecí maso, paprika, cibule, žampiony | 200 g", price: "189 Kč" },
      { name: "Smažený kuřecí řízek", description: "200 g", price: "169 Kč" },
    ],
    hovezi: [
      { name: "RIB EYE steak, restované fazolky se slaninou", description: "Steak z vysokého roštěnce | 300 g", price: "489 Kč" },
      { name: "T-Bone steak v pepřové omáčce", description: "Steak s kostí, větší část nízkého roštěnce a menší část pravé svíčkové | 400 g | nutno objednat den dopředu", price: "469 Kč" },
      { name: "Hovězí tatarák", description: "8 ks topinek, česnek | 200 g | nutno objednat den dopředu", price: "349 Kč" },
    ],
    veprove: [
      { name: "Vepřový steak na grilu s restovanou slaninou a sázeným vejcem", description: "200 g", price: "245 Kč" },
      { name: "Medailonky z vepřové panenky na grilu", description: "200 g", price: "255 Kč" },
      { name: "Smažená vepřová kapsa plněná šunkou a sýrem", description: "200 g", price: "225 Kč" },
      { name: "Mexická chilli směs", description: "Vepřové nudličky, kukuřice, hrášek, paprika, chili | 200 g", price: "215 Kč" },
      { name: "Smažený vepřový řízek", description: "200 g", price: "169 Kč" },
    ],
    speciality: [
      { name: "Vepřová panenka v parmazánové krustě s batátovými hranolkami", description: "200 g", price: "299 Kč" },
      { name: "Vepřová směs s camembertem a bramboráčky", description: "200 g", price: "275 Kč" },
      { name: "Marinovaná vepřová žebírka s bylinkovou bagetou, hořčicí a křenem", description: "500 g", price: "315 Kč" },
      { name: "Pečené vepřové koleno s křenem, hořčicí a bylinkovou bagetou", description: "750 g", price: "325 Kč" },
    ],
    pizza: [
      { name: "1. Margherita", description: "Rajčata, mozzarella, bazalka, olivový olej | ⌀ 33 cm", price: "110 Kč" },
      { name: "2. Bianca Noc Cotto", description: "Smetana, šunka, mozzarella, čerstvá rajčata, italské koření | ⌀ 33 cm", price: "159 Kč" },
      { name: "3. Al Funghi", description: "Tomato, mozzarella, čerstvé žampiony, italské koření | ⌀ 33 cm", price: "129 Kč" },
      { name: "4. Catania", description: "Tomato, mozzarella, šunka, vejce, italské koření | ⌀ 33 cm", price: "155 Kč" },
      { name: "5. Salamino", description: "Tomato, mozzarella, pikantní salám, paprika, italské koření | ⌀ 33 cm", price: "155 Kč" },
      { name: "6. Capricciosa", description: "Tomato, mozzarella, šunka, čerstvé žampiony, italské koření | ⌀ 33 cm", price: "145 Kč" },
      { name: "7. Vegetariana", description: "Tomato, mozzarella, čerstvá rajčata, paprika, kukuřice, brokolice, italské koření | ⌀ 33 cm", price: "150 Kč" },
      { name: "8. Ambrosiana", description: "Tomato, mozzarella, šunka, hermelín, italské koření | ⌀ 33 cm", price: "155 Kč" },
      { name: "9. Al Tonno", description: "Tomato, mozzarella, tuňák, cibule, zelené olivy, italské koření | ⌀ 33 cm", price: "139 Kč" },
      { name: "10. Calabresse", description: "Tomato, mozzarella, klobása, cibule, kozí rohy, italské koření | ⌀ 33 cm", price: "139 Kč" },
      { name: "11. Quatro Formaggi", description: "Smetana, mozzarella, niva, uzený sýr, eidam | ⌀ 33 cm", price: "165 Kč" },
      { name: "12. Alla Boscaiola", description: "Tomato, mozzarella, pikantní salám, anglická slanina, čerstvé žampiony, paprika, italské koření | ⌀ 33 cm", price: "155 Kč" },
      { name: "13. Hawai", description: "Smetana, mozzarella, šunka, ananas | ⌀ 33 cm", price: "140 Kč" },
      { name: "14. Rusticana", description: "Tomato, mozzarella, anglická slanina, uzený sýr, smetana, italské koření | ⌀ 33 cm", price: "159 Kč" },
      { name: "15. Mexicana", description: "Tomato, mozzarella, pikantní salám, fazolky, kukuřice, cibule, česnek, italské koření, chilli papričky | ⌀ 33 cm", price: "170 Kč" },
      { name: "16. Spinacie e Pollo", description: "Smetana, mozzarella, listový špenát, kuřecí maso, italské koření | ⌀ 33 cm", price: "170 Kč" },
      { name: "17. All Pollo", description: "Tomato, mozzarella, kuřecí maso, anglická slanina, hráškové lusky, italské koření | ⌀ 33 cm", price: "170 Kč" },
      { name: "18. Fresca", description: "Tomato, mozzarella, šunka, anglická slanina, čerstvé žampiony, kukuřice, italské koření | ⌀ 33 cm", price: "155 Kč" },
      { name: "19. Sorentina", description: "Smetana, mozzarella, šunka, anglická slanina, čerstvé žampiony, hráškové lusky, italské koření | ⌀ 33 cm", price: "155 Kč" },
      { name: "20. Rusticana Special", description: "Tomato, mozzarella, anglická slanina, uzený sýr, smetana, čerstvá rajčata, cibule, italské koření | ⌀ 33 cm", price: "170 Kč" },
      { name: "21. Jumbo (60 cm)", description: "Vhodná pro 2 osoby nebo rodinu", price: "399 Kč" },
      { name: "22. Pizza chléb", description: "", price: "60 Kč" },
      { name: "Pizza krabice", description: "⌀ 33 cm – 15 Kč | ⌀ 60 cm – 40 Kč", price: "od 15 Kč" },
      { name: "Ingredience navíc", description: "", price: "od 10 Kč" },
    ],
    testoviny: [
      { name: "Špagety 'Aglio Olio' sypané parmezánem", description: "Špagety, olivový olej, chilli papričky, česnek, parmazán | 300 g", price: "149 Kč" },
      { name: "Tagliatelle pancetta e funghi", description: "Tagliatelle, slanina, žampiony, česnek, pesto | 300 g", price: "179 Kč" },
      { name: "Gnocchi s listovým špenátem, smetanou a restovaným kuřecím masem", description: "300 g", price: "189 Kč" },
      { name: "Špagety Carbonara", description: "Slanina, parmazán, vejce | 300 g", price: "179 Kč" },
    ],
    salaty: [
      { name: "Caesar salát s kuřecím masem", description: "Římský salát, kuřecí maso, krutony, parmazán, dresing | 350 g", price: "165 Kč" },
      { name: "Míchaný salát", description: "Zelenina dle sezónní nabídky, hořčičný dressing | 150 g", price: "65 Kč" },
      { name: "Zeleninový salát s restovanou anglickou slaninou a vejcem", description: "150 g", price: "145 Kč" },
      { name: "Salát s grilovanými krevetami", description: "150 g", price: "185 Kč" },
      { name: "Extra: Balkánský sýr", description: "20 g", price: "20 Kč" },
      { name: "Extra: Mozzarella", description: "20 g", price: "20 Kč" },
      { name: "Extra: Olivy", description: "20 g", price: "25 Kč" },
      { name: "Extra: Grilované kuřecí kousky", description: "50 g", price: "50 Kč" },
    ],
    bezmasne: [
      { name: "Smažený sýr", description: "150 g", price: "115 Kč" },
      { name: "Smažený Camembert", description: "120 g", price: "115 Kč" },
      { name: "Smažený plísňový sýr Niva", description: "150 g", price: "125 Kč" },
    ],
    detske: [
      { name: "Smažené kuřecí řízečky", description: "Country hranolky, kečup nebo tatarská omáčka | 100 g", price: "115 Kč" },
    ],
    prilohy: [
      { name: "Americké brambory", description: "200 g", price: "49 Kč" },
      { name: "Bramborové krokety", description: "200 g", price: "49 Kč" },
      { name: "Country hranolky", description: "200 g", price: "49 Kč" },
      { name: "Batátové hranolky", description: "200 g", price: "69 Kč" },
      { name: "Šťouchané brambory se slaninou", description: "250 g", price: "59 Kč" },
      { name: "Grilovaná zelenina dle sezónní nabídky", description: "250 g", price: "69 Kč" },
      { name: "Kynuté knedlíky", description: "220 g", price: "40 Kč" },
      { name: "Dušená rýže", description: "200 g", price: "40 Kč" },
      { name: "Bramboráčky", description: "4 ks", price: "59 Kč" },
      { name: "Vařené brambory", description: "200 g", price: "40 Kč" },
      { name: "Bylinková bageta", description: "1 ks", price: "59 Kč" },
    ],
    omacky: [
      { name: "Pepřová smetanová omáčka", description: "100 ml", price: "59 Kč" },
      { name: "Jemná houbová omáčka", description: "100 ml", price: "59 Kč" },
      { name: "Domácí tatarská omáčka", description: "50 ml", price: "35 Kč" },
      { name: "Pikantní omáčka", description: "50 ml", price: "35 Kč" },
      { name: "Česneková omáčka", description: "50 ml", price: "35 Kč" },
      { name: "Kečup", description: "50 ml", price: "30 Kč" },
      { name: "Brusinky", description: "50 ml", price: "40 Kč" },
    ],
    moucniky: [
      { name: "Horké maliny s vanilkovou zmrzlinou a domácí šlehačkou", description: "350 g", price: "110 Kč" },
      { name: "Lívanečky s borůvkovým přelivem a zakysanou smetanou", description: "4 ks", price: "105 Kč" },
      { name: "Čokoládový fondán s vanilkovou zmrzlinou a malinami", description: "1 ks", price: "139 Kč" },
      { name: "Dezerty dle denní nabídky", description: "Více informací u obsluhy", price: "—" },
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

        {/* Pizza order info */}
        {activeCategory === "pizza" && (
          <motion.div {...fadeInUp} className="mt-10 max-w-3xl mx-auto bg-[#FDF6E3] border border-[#B8860B]/30 rounded-lg p-6 text-center">
            <p className="text-[#4A4238] font-semibold text-lg mb-1">Objednávejte na telefonním čísle: +420 775 941 501</p>
            <p className="text-[#6B6254]">Po–Pá: 15:00–21:00 &nbsp;|&nbsp; So–Ne: 12:00–21:00</p>
          </motion.div>
        )}

        {/* Allergen Notice */}
        <motion.div {...fadeInUp} className="mt-16 max-w-3xl mx-auto bg-white rounded-lg p-8">
          <h3 className="text-2xl font-serif text-[#2C2416] mb-4 text-center">
            Důležité informace
          </h3>
          <div className="space-y-3 text-[#4A4238]">
            <p>
              <strong>Alergeny:</strong> Seznam alergenů v jednotlivých jídlech vám na požádání předloží obsluha.
            </p>
            <p>
              <strong>Poloviční porce:</strong> Při objednání ½ porce účtujeme 70 % z původní ceny.
            </p>
            <p>
              <strong>Kontakt:</strong> restauracekonibar@seznam.cz &nbsp;|&nbsp; +420 775 941 501 &nbsp;|&nbsp; www.konibar.cz
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <p className="text-lg text-[#4A4238] mb-6">
            Rezervujte si stůl nebo nás kontaktujte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+420775941501"
              className="bg-[#B8860B] text-white px-8 py-3 rounded-md hover:bg-[#9A7109] transition-colors"
            >
              Zavolejte: +420 775 941 501
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
