import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#D9F2FF] to-[#BEE9FF]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-700">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            {product.price}
          </span>
          <div className="flex gap-2">
            <a
              href="https://www.trendyol.com/en/store/mumed-store-m-1141636?sst=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg shadow-md group"
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                Buy
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
