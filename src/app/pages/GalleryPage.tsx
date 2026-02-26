import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, X } from "lucide-react";
import Masonry from "react-responsive-masonry";

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1761095596755-99ba58997720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzcyMTE2MzYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Gourmet jídlo",
      category: "food"
    },
    {
      url: "https://images.unsplash.com/photo-1768051297578-1ea70392c307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MjA3MzY3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Interiér restaurace",
      category: "interior"
    },
    {
      url: "https://images.unsplash.com/photo-1678684279246-96e6afb970f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBkaW5uZXIlMjBwbGF0ZXxlbnwxfHx8fDE3NzIwNjcwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Grilovaný steak",
      category: "food"
    },
    {
      url: "https://images.unsplash.com/photo-1754799565126-fe1ad148db85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBpenphJTIwaXRhbGlhbiUyMGN1aXNpbmV8ZW58MXx8fHwxNzcyMTE2MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Čerstvá pizza",
      category: "food"
    },
    {
      url: "https://images.unsplash.com/photo-1743793055911-52e19beba5d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwcm9vbSUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzcyMTE2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Jídelna restaurace",
      category: "interior"
    },
    {
      url: "https://images.unsplash.com/photo-1761315413256-e149b40f577b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MjEwOTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Gourmet burger",
      category: "food"
    },
    {
      url: "https://images.unsplash.com/photo-1564093497595-593b96d80180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNhbGFkJTIwYm93bCUyMGhlYWx0aHl8ZW58MXx8fHwxNzcyMDA2NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Čerstvý salát",
      category: "food"
    },
    {
      url: "https://images.unsplash.com/photo-1764015939108-7963106fa73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VwJTIwYm93bCUyMGNvbWZvcnQlMjBmb29kfGVufDF8fHx8MTc3MjA1MTMyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Polévka",
      category: "food"
    },
    {
      url: "https://images.unsplash.com/photo-1590060846796-0418842f3908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcGFzdGElMjBkaXNoJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzIxMTY1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Pasta",
      category: "food"
    },
    {
      url: "https://images.unsplash.com/photo-1741965134280-9094486efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGVzc2VydCUyMHBsYXRpbmd8ZW58MXx8fHwxNzcyMTE2NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Dezert",
      category: "food"
    },
    {
      url: "https://images.unsplash.com/photo-1771325788983-37461c7c2258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwYXBwZXRpemVyfGVufDF8fHx8MTc3MjAxNzQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Předkrm",
      category: "food"
    },
    {
      url: "https://images.unsplash.com/photo-1673968872147-30bcd4bea38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYmFyJTIwY29ja3RhaWxzfGVufDF8fHx8MTc3MjAzNzY0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Bar a nápoje",
      category: "interior"
    },
    {
      url: "https://images.unsplash.com/photo-1770232230192-4ee3d0dbf43c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcmVzdGF1cmFudCUyMHNlYXRpbmd8ZW58MXx8fHwxNzcyMTE2NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Útulné posezení",
      category: "interior"
    },
    {
      url: "https://images.unsplash.com/photo-1695606452803-6708a37d3836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGxhdHRlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzIxMTY1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Mořské plody",
      category: "food"
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
            <Camera size={40} className="text-[#B8860B]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2416]">
              Galerie
            </h1>
          </div>
          <p className="text-xl text-[#6B6254]">
            Nahlédněte do naší kuchyně a prostředí restaurace
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="1rem">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer overflow-hidden rounded-lg relative"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto block group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Call to Action */}
        <motion.div {...fadeInUp} className="mt-16 text-center bg-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2416] mb-4">
            Přijďte ochutnat naše speciality
          </h2>
          <p className="text-lg text-[#6B6254] mb-6 max-w-2xl mx-auto">
            Každé jídlo připravujeme s láskou a pečlivostí. Těšíme se na vaši návštěvu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rezervace"
              className="bg-[#B8860B] text-white px-8 py-3 rounded-md hover:bg-[#9A7109] transition-colors"
            >
              Rezervovat stůl
            </a>
            <a
              href="tel:+420374790133"
              className="bg-[#2C2416] text-white px-8 py-3 rounded-md hover:bg-[#1A1510] transition-colors"
            >
              Zavolat: +420 374 790 133
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#B8860B] transition-colors z-10"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Zvětšený obrázek"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
