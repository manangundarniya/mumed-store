import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand with Logo */}
          <div>
            <div className="bg-white rounded-xl p-4 mb-4 inline-block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6905e6854a2420e11a4a6579/6f30661cd_WhatsApp_Image_2025-11-01_at_30929_PM-removebg-preview.png"
                alt="Mumed Store"
                className="h-20 w-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Mumed Store
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your trusted partner for premium household and personal care
              products in the UAE.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.trendyol.com/en/store/mumed-store-m-1141636?sst=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to={createPageUrl("Home")}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  to={createPageUrl("Blog")}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Blog & Articles
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop With Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.trendyol.com/en/store/mumed-store-m-1141636?sst=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Trendyol Store
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.noon.com/uae-en/seller/p-276487/?link_source=share_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Noon Store
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.ae/s?me=ATSZZFDD2A1QN&marketplaceID=A2VIGQ35RCS4UG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Amazon.ae Store
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+971585151289"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +971 58 515 1289
                </a>
              </li>
              <li>
                <a
                  href="tel:+971045757153"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +971 4 575 7153
                </a>
              </li>
              <li>
                <a
                  href="mailto:mumeddxb@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  mumeddxb@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>© {new Date().getFullYear()} Mumed Store. All rights reserved.</p>
          <p className="mt-2">
            Premium household and personal care products across the UAE
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
