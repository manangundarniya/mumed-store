import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ExternalLink } from "lucide-react";

const marketplaces = [
  {
    name: "Trendyol",
    url: "https://www.trendyol.com/en/store/mumed-store-m-1141636?sst=0",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Noon",
    url: "https://www.noon.com/uae-en/seller/p-276487/?link_source=share_btn",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    name: "Amazon",
    url: "https://www.amazon.ae/s?me=ATSZZFDD2A1QN&marketplaceID=A2VIGQ35RCS4UG",
    color: "from-blue-600 to-cyan-600",
  },
];

export default function StickyMarketplaceCTA({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-white/95 backdrop-blur-lg border-t-2 border-blue-200 shadow-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-900">
                Shop Now on:
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {marketplaces.map((marketplace) => (
                <a
                  key={marketplace.name}
                  href={marketplace.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.button
                    className={`w-full bg-gradient-to-r ${marketplace.color} text-white py-3 px-2 rounded-lg shadow-md text-xs font-medium flex items-center justify-center gap-1`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {marketplace.name}
                    <ExternalLink className="w-3 h-3" />
                  </motion.button>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
