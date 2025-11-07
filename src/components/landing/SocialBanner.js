import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function SocialBanner() {
  const socials = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      link: "https://wa.me/971585491256",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      link: "https://www.instagram.com/mumeddxb?igsh=NjlzZjg4cGY4c2Ns",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      link: "https://www.facebook.com", // Replace with your actual page if available
      color: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#E0F3FF] to-[#C9ECFF] py-10">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
        >
          Let’s Stay Connected 💬
        </motion.h2>

        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all`}
            >
              <span className="bg-white/20 p-2 rounded-full">
                {social.icon}
              </span>
              <span className="font-medium text-lg group-hover:underline">
                {social.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
