import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Premium Laundry Detergent",
    category: "Cleaning & Laundry",
    image:
      "https://res.cloudinary.com/ddxaiuefs/image/upload/v1762194316/493ef1f2-81d7-46e9-8fca-6384b9abd335_lkcfe9.jpg",
    description: "High-efficiency formula for spotless cleaning",
    price: "AED 79",
  },
  {
    name: "Luxury Body Wash Set",
    category: "Personal Hygiene",
    image:
      "https://res.cloudinary.com/ddxaiuefs/image/upload/v1762194345/d413425b-c74f-4b8b-bf5f-ebe97971004e_bzjkfe.jpg",
    description: "Moisturizing formula with natural extracts",
    price: "AED 65",
  },
  {
    name: "Baby Care Essentials Kit",
    category: "Baby & Infant Care",
    image:
      "https://res.cloudinary.com/ddxaiuefs/image/upload/v1762194353/b4b0e0ea-33d1-4ec0-af2c-9e1f4b0bb7a0_rldwcr.jpg",
    description: "Complete care package for your little one",
    price: "AED 57",
  },
  {
    name: "Premium Toilet Paper 24-Pack",
    category: "Bathroom Accessories",
    image:
      "https://res.cloudinary.com/ddxaiuefs/image/upload/v1762194357/a0361ba7-cb57-4cf3-9404-bf6a2038b190_jwlfqy.jpg",
    description: "Soft, strong, and absorbent 3-ply tissue",
    price: "AED 55",
  },
  {
    name: "Multi-Surface Cleaner",
    category: "Home Maintenance",
    image:
      "https://res.cloudinary.com/ddxaiuefs/image/upload/v1762194361/2c5ef603-4502-4f6f-a5d1-2f00e58bb05c_akddzn.jpg",
    description: "Powerful cleaning for all surfaces",
    price: "AED 38",
  },
  {
    name: "Organic Feminine Care",
    category: "Feminine Care",
    image:
      "https://res.cloudinary.com/ddxaiuefs/image/upload/v1762194362/d3edc327-359e-4d3b-a224-a131e5a0d9ae_gkcjwe.jpg",
    description: "Natural and gentle protection",
    price: "AED 42",
  },
];

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, products.length - itemsPerPage)
        : Math.max(0, prev - itemsPerPage)
    );
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our most popular items, loved by customers across the UAE
          </p>

          {/* Marketplace buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.trendyol.com/en/store/mumed-store-m-1141636?sst=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg shadow-md">
                Shop on Trendyol
              </Button>
            </a>
            <a
              href="https://www.noon.com/uae-en/seller/p-276487/?link_source=share_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-6 py-2 rounded-lg shadow-md">
                Shop on Noon
              </Button>
            </a>
            <a
              href="https://www.amazon.ae/s?me=ATSZZFDD2A1QN&marketplaceID=A2VIGQ35RCS4UG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg shadow-md">
                Shop on Amazon.ae
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white hover:bg-gray-50 text-gray-900 rounded-full w-12 h-12 p-0 shadow-lg hidden md:flex items-center justify-center"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white hover:bg-gray-50 text-gray-900 rounded-full w-12 h-12 p-0 shadow-lg hidden md:flex items-center justify-center"
            disabled={currentIndex + itemsPerPage >= products.length}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[500px]">
            <AnimatePresence mode="wait">
              {visibleProducts.map((product, index) => (
                <ProductCard
                  key={`${currentIndex}-${index}`}
                  product={product}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile navigation dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {Array.from({ length: products.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
