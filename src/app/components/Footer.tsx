import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2C2416] text-[#E8E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl text-[#B8860B] mb-4">Restaurace Konibar</h3>
            <p className="text-sm leading-relaxed mb-4">
              Tradiční česká kuchyně v srdci Boru u Tachova. Nabízíme denní menu, 
              speciality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-white mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tydeni-menu" className="hover:text-[#B8860B] transition-colors">
                  Týdenní menu
                </Link>
              </li>
              <li>
                <Link to="/jidelni-listek" className="hover:text-[#B8860B] transition-colors">
                  Jídelní lístek
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-[#B8860B] transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/rezervace" className="hover:text-[#B8860B] transition-colors">
                  Rezervace stolu
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg text-white mb-4 flex items-center gap-2">
              <Clock size={18} />
              Otevírací doba
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Pondělí - Pátek:</span>
                <span className="text-white">10:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sobota:</span>
                <span className="text-white">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Neděle:</span>
                <span className="text-white">11:00 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg text-white mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[#B8860B] mt-0.5 flex-shrink-0" />
                <span>nám. Republiky 286<br />348 02 Bor u Tachova</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#B8860B] flex-shrink-0" />
                <a href="tel:+420775941501" className="hover:text-[#B8860B] transition-colors">
                  +420 775941501
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#B8860B] flex-shrink-0" />
                <a href="mailto:info@konibar.cz" className="hover:text-[#B8860B] transition-colors">
                  info@konibar.cz
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/restauracekonibar?locale=cs_CZ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3E3228] p-2 rounded-full hover:bg-[#B8860B] transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3E3228] mt-12 pt-8 text-sm flex justify-between items-center">
          <p>&copy; 2026 Restaurace Konibar. Všechna práva vyhrazena.</p>
          <a href="https://www.comvio.cz" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors">
            Vytvořeno v comvio.cz
          </a>
        </div>
      </div>
    </footer>
  );
}
