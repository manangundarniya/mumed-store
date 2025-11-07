import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { Sparkles, Baby, Droplet, Home, Flower2, Scissors } from "lucide-react";

const categories = [
  {
    title: "Cleaning & Laundry",
    icon: Sparkles,
    items: [
      "Detergents",
      "Fabric Softeners",
      "Dishwashing Liquid",
      "Surface Cleaners",
      "Laundry Pods",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Personal Hygiene & Toiletries",
    icon: Droplet,
    items: ["Soaps", "Shampoos", "Body Wash", "Toothpaste", "Deodorants"],
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Baby & Infant Care",
    icon: Baby,
    items: [
      "Diapers",
      "Baby Wipes",
      "Baby Shampoo",
      "Diaper Cream",
      "Baby Powder",
    ],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
  {
    title: "Feminine & Incontinence Care",
    icon: Flower2,
    items: [
      "Sanitary Pads",
      "Tampons",
      "Panty Liners",
      "Adult Diapers",
      "Intimate Wash",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    title: "Bathroom Accessories & Paper",
    icon: Scissors,
    items: [
      "Toilet Paper",
      "Tissues",
      "Paper Towels",
      "Trash Bags",
      "Shower Accessories",
    ],
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Home Maintenance",
    icon: Home,
    items: [
      "Air Fresheners",
      "Insect Repellents",
      "Floor Cleaners",
      "Glass Cleaners",
      "Disinfectants",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
];

export default function Categories() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9F2FF]/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BEE9FF]/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of household and personal care
            products
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
