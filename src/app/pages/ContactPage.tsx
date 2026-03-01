import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, Facebook } from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2416] mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-[#6B6254]">
            Rádi se s vámi spojíme
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-serif text-[#2C2416] mb-8">
                Restaurace Konibar
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#2C2416] mb-2">Adresa</h3>
                    <p className="text-[#6B6254] leading-relaxed">
                      náměstí Republiky 286<br />
                      348 02 Bor u Tachova<br />
                      Česká republika
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[#B8860B] hover:text-[#9A7109] transition-colors"
                    >
                      Zobrazit na mapě →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#2C2416] mb-2">Telefon</h3>
                    <a 
                      href="tel:+420775941501" 
                      className="text-[#B8860B] hover:text-[#9A7109] transition-colors text-lg"
                    >
                      +420 775 941 501
                    </a>
                    <p className="text-[#6B6254] text-sm mt-1">
                      Pro rezervace
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#2C2416] mb-2">Email</h3>
                    <a 
                      href="mailto:restauracekonibar@seznam.cz" 
                      className="text-[#B8860B] hover:text-[#9A7109] transition-colors"
                    >
                      restauracekonibar@seznam.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#2C2416] mb-3">Otevírací doba</h3>
                    <div className="space-y-2 text-[#6B6254]">
                      <div className="flex justify-between gap-8">
                        <span>Pondělí - Pátek</span>
                        <span className="text-[#2C2416]">10:00 - 22:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sobota</span>
                        <span className="text-[#2C2416]">11:00 - 23:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Neděle</span>
                        <span className="text-[#2C2416]">11:00 - 21:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl text-[#2C2416] mb-4">Sledujte nás</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/restauracekonibar?locale=cs_CZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#B8860B] text-white p-3 rounded-full hover:bg-[#9A7109] transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-serif text-[#2C2416] mb-6">
                Napište nám
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <p className="text-green-800 text-lg">
                    ✓ Děkujeme za zprávu! Brzy se vám ozveme.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-[#2C2416] mb-2">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
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
                      className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#2C2416] mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#2C2416] mb-2">
                      Zpráva *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-[#E8E3D8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] bg-[#FAF8F5] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#B8860B] text-white px-6 py-3 rounded-md hover:bg-[#9A7109] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Odeslat zprávu
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div {...fadeInUp} className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=n%C3%A1m%C4%9Bst%C3%AD+Republiky+286,+348+02+Bor+u+Tachova,+Czech+Republic&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurace Konibar location"
          ></iframe>
        </motion.div>

        {/* Quick Call Button - Mobile */}
        <motion.div {...fadeInUp} className="mt-8 lg:hidden">
          <a
            href="tel:+420775941501"
            className="block w-full bg-[#B8860B] text-white px-6 py-4 rounded-md hover:bg-[#9A7109] transition-colors text-center flex items-center justify-center gap-2"
          >
            <Phone size={24} />
            <span className="text-lg">Zavolat: +420 775 941 501</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
