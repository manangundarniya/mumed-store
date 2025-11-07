import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactStrip() {
  return (
    <motion.section
      className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white py-4 md:py-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm md:text-base">
          <motion.a
            href="tel:+971585151289"
            className="flex items-center gap-2 hover:text-blue-100 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-4 h-4" />
            <span>+971 58 515 1289</span>
          </motion.a>

          <motion.a
            href="tel:+971045757153"
            className="flex items-center gap-2 hover:text-blue-100 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-4 h-4" />
            <span>+971 4 575 7153</span>
          </motion.a>

          <motion.a
            href="mailto:mumeddxb@gmail.com"
            className="flex items-center gap-2 hover:text-blue-100 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-4 h-4" />
            <span>mumeddxb@gmail.com</span>
          </motion.a>

          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4" />
            <span>Dubai, UAE</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
