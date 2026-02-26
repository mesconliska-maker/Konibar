import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Domů" },
    { path: "/tydeni-menu", label: "Týdenní menu" },
    { path: "/jidelni-listek", label: "Jídelní lístek" },
    { path: "/galerie", label: "Galerie" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF8F5] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-serif text-[#2C2416]">
              Restaurace <span className="text-[#B8860B]">Konibar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base transition-colors relative ${
                  isActive(link.path)
                    ? "text-[#B8860B]"
                    : "text-[#4A4238] hover:text-[#B8860B]"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#B8860B]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/rezervace"
              className="bg-[#B8860B] text-white px-6 py-2.5 rounded-md hover:bg-[#9A7109] transition-colors"
            >
              Rezervace
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-[#4A4238] hover:bg-[#F5F1E8] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#E8E3D8] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "bg-[#F5F1E8] text-[#B8860B]"
                      : "text-[#4A4238] hover:bg-[#F5F1E8]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/rezervace"
                onClick={() => setIsOpen(false)}
                className="block bg-[#B8860B] text-white px-4 py-3 rounded-md hover:bg-[#9A7109] transition-colors text-center"
              >
                Rezervace stolu
              </Link>
              <a
                href="tel:+420374790133"
                className="flex items-center justify-center space-x-2 bg-[#2C2416] text-white px-4 py-3 rounded-md hover:bg-[#1A1510] transition-colors"
              >
                <Phone size={18} />
                <span>+420 374 790 133</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
