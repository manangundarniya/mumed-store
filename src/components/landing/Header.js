import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header() {
  const navItems = [
    { label: "Home", to: "hero" },
    { label: "Categories", to: "categories" },
    { label: "Featured", to: "featured-products" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Mumed store</h1>
        <nav className="flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
