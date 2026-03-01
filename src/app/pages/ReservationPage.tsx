import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, Users, MessageSquare, CheckCircle, Phone } from "lucide-react";

export function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF8F5] min-h-screen py-12 md:py-20 flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h1 className="text-4xl font-serif text-[#2C2416] mb-4">
                Rezervace přijata!
              </h1>
              <p className="text-lg text-[#6B6254] mb-6">
                Děkujeme za vaši rezervaci. Potvrzení jsme vám zaslali na email{" "}
                <strong>{formData.email}</strong>
              </p>
              <div className="bg-[#FAF8F5] rounded-lg p-6 mb-8">
                <h2 className="text-xl font-serif text-[#2C2416] mb-4">Shrnutí rezervace</h2>
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-[#6B6254]">Jméno:</span>
                    <span className="text-[#2C2416]">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B6254]">Datum:</span>
                    <span className="text-[#2C2416]">{formData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B6254]">Čas:</span>
                    <span className="text-[#2C2416]">{formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B6254]">Počet hostů:</span>
                    <span className="text-[#2C2416]">{formData.guests}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <a
                  href="/"
                  className="inline-block bg-[#B8860B] text-white px-8 py-3 rounded-md hover:bg-[#9A7109] transition-colors"
                >
                  Zpět na hlavní stránku
                </a>
                <p className="text-[#6B6254]">
                  V případě dotazů nás kontaktujte na{" "}
                  <a href="tel:+420775941501" className="text-[#B8860B] hover:text-[#9A7109]">
                    +420 775 941 501
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2416] mb-4">
            Rezervace stolu
          </h1>
          <p className="text-xl text-[#6B6254]">
            Zajistěte si místo v naší restauraci
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reservation Form */}
          <motion.div {...fadeInUp} className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[#2C2416] mb-2">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jan Novák"
                    className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5]"
                  />
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-[#2C2416] mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+420 123 456 789"
                      className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#2C2416] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jan.novak@email.cz"
                      className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-[#2C2416] mb-2 flex items-center gap-2">
                      <Calendar size={18} className="text-[#B8860B]" />
                      Datum *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-[#2C2416] mb-2 flex items-center gap-2">
                      <Clock size={18} className="text-[#B8860B]" />
                      Čas *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5]"
                    >
                      <option value="">Vyberte čas</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guests" className="block text-[#2C2416] mb-2 flex items-center gap-2">
                    <Users size={18} className="text-[#B8860B]" />
                    Počet hostů *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "osoba" : num < 5 ? "osoby" : "osob"}
                      </option>
                    ))}
                    <option value="10+">Více než 10 osob</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[#2C2416] mb-2 flex items-center gap-2">
                    <MessageSquare size={18} className="text-[#B8860B]" />
                    Poznámka (volitelné)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Speciální požadavky, oslavy, alergeny..."
                    className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#B8860B] text-white px-6 py-4 rounded-md hover:bg-[#9A7109] transition-all hover:scale-[1.02] shadow-md"
                >
                  Potvrdit rezervaci
                </button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-serif text-[#2C2416] mb-4">Potřebujete pomoc?</h3>
              <p className="text-[#6B6254] mb-4">
                Můžete nás také kontaktovat telefonicky
              </p>
              <a
                href="tel:+420374790133"
                className="flex items-center gap-3 bg-[#2C2416] text-white px-4 py-3 rounded-md hover:bg-[#1A1510] transition-colors"
              >
                <Phone size={20} />
                <span>+420 374 790 133</span>
              </a>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-serif text-[#2C2416] mb-4">Otevírací doba</h3>
              <div className="space-y-3 text-[#6B6254]">
                <div className="flex justify-between">
                  <span>Po - Pá</span>
                  <span className="text-[#2C2416]">10:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span className="text-[#2C2416]">11:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Neděle</span>
                  <span className="text-[#2C2416]">11:00 - 21:00</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-[#F5F1E8] rounded-lg p-6">
              <h3 className="text-xl font-serif text-[#2C2416] mb-3">Tipy pro rezervaci</h3>
              <ul className="space-y-2 text-sm text-[#6B6254]">
                <li className="flex items-start gap-2">
                  <span className="text-[#B8860B] mt-1">•</span>
                  <span>Doporučujeme rezervovat zejména o víkendech</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8860B] mt-1">•</span>
                  <span>Pro skupiny nad 10 osob nás raději kontaktujte telefonicky</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8860B] mt-1">•</span>
                  <span>Máte-li speciální požadavky, uveďte je do poznámky</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
