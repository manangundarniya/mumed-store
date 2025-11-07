import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.div
      className={`group relative ${category.bgColor} rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
          {category.title}
        </h3>

        {/* Items list */}
        <ul className="space-y-2 mb-4">
          {category.items.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-center text-sm text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* View more */}
        {/* <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
          <span>View Products</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div> */}
      </div>
    </motion.div>
  );
}
