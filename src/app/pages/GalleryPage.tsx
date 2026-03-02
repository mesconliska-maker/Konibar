import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, X } from "lucide-react";
import Masonry from "react-responsive-masonry";

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { url: "/obrazek5.jpeg", alt: "Restaurace Konibar", category: "interior" },
    { url: "/obrazek6.jpeg", alt: "Restaurace Konibar", category: "interior" },
    { url: "/obrazek7.jpeg", alt: "Restaurace Konibar", category: "food" },
    { url: "/obrazek8.jpeg", alt: "Restaurace Konibar", category: "food" },
    { url: "/obrazek9.jpeg", alt: "Restaurace Konibar", category: "food" },
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
              href="tel:+420775941501"
              className="bg-[#2C2416] text-white px-8 py-3 rounded-md hover:bg-[#1A1510] transition-colors"
            >
              Zavolat: +420 775 941 501

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
