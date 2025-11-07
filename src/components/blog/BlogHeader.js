import React from "react";
import { motion } from "framer-motion";
import { BookOpen, PenTool, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function BlogHeader() {
  return (
    <div className="bg-gradient-to-br from-[#D9F2FF] via-[#BEE9FF] to-[#A5E0FF] py-20 px-4 relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <Link to={createPageUrl("Home")}>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-700 hover:bg-blue-50 bg-white/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Logo in header */}
          <Link
            to={createPageUrl("Home")}
            className="flex flex-col items-center"
          >
            <div className="bg-white/95 rounded-2xl p-4 shadow-lg">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6905e6854a2420e11a4a6579/6f30661cd_WhatsApp_Image_2025-11-01_at_30929_PM-removebg-preview.png"
                alt="Mumed Store"
                className="h-20 md:h-24 w-auto"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-2">
              Mumed Store
            </h2>
          </Link>

          <Link to={createPageUrl("ArticleEditor")}>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
              <PenTool className="w-4 h-4 mr-2" />
              Write Article
            </Button>
          </Link>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Blog & Articles
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Expert tips, product guides, and insights for home care, cleaning,
            and family wellness in the UAE
          </p>
        </motion.div>
      </div>
    </div>
  );
}
