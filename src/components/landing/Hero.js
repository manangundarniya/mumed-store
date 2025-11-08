import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShoppingBag, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { createPageUrl } from "../../utils";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#D9F2FF] via-[#BEE9FF] to-[#A5E0FF]">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-white/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo - clickable */}
          <motion.a
            href="https://www.trendyol.com/en/store/mumed-store-m-1141636?sst=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white/95 backdrop-blur-sm px-3 py-3 rounded-3xl shadow-2xl border-2 border-blue-200/50 hover:border-blue-300/70 transition-all">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6905e6854a2420e11a4a6579/6f30661cd_WhatsApp_Image_2025-11-01_at_30929_PM-removebg-preview.png"
                alt="Mumed Store Logo"
                className="h-48 md:h-52 w-auto mx-auto mb-4"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Mumed Store
              </h1>
              <p className="text-sm md:text-base text-gray-600 mt-2 font-medium">
                UAE's Trusted Supplier
              </p>
            </div>
          </motion.a>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Quality Products
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                Delivered to Your Door
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From cleaning essentials to baby care, find everything you need for
            your home and family. Shop across UAE's top marketplaces with
            confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://www.trendyol.com/en/store/mumed-store-m-1141636?sst=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop on Trendyol
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://www.noon.com/uae-en/seller/p-276487/?link_source=share_btn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-4 py-3 text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Shop on Noon
              </Button>
            </a>
            {/* <Link to={createPageUrl("Blog")} className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-purple-600 text-purple-700 hover:bg-purple-50 px-4 py-3 text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Our Blog
              </Button>
            </Link> */}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="my-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Trusted Seller</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-gray-700 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div> */}
    </section>
  );
}
