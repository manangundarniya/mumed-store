import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Badge } from "../ui/badge";
import { format } from "date-fns";

export default function ArticleCard({ article, featured = false, index = 0 }) {
  if (featured) {
    return (
      <Link to={`${createPageUrl("ArticleView")}?id=${article.id}`}>
        <motion.div
          className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300"
          whileHover={{ y: -5 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 md:h-auto overflow-hidden bg-gradient-to-br from-[#D9F2FF] to-[#BEE9FF]">
              {article.featured_image ? (
                <img
                  src={article.featured_image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl text-blue-600">📰</span>
                </div>
              )}
              <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                Featured
              </Badge>
            </div>

            <div className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-blue-100 text-blue-700 border-blue-200">
                {article.category}
              </Badge>

              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors line-clamp-2">
                {article.title}
              </h2>

              {article.excerpt && (
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                {article.author_name && (
                  <span className="font-medium text-gray-700">
                    {article.author_name}
                  </span>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {format(
                    new Date(article.published_date || article.created_date),
                    "MMM d, yyyy"
                  )}
                </div>
                {article.read_time && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.read_time} min
                  </div>
                )}
              </div>

              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                Read Article
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link to={`${createPageUrl("ArticleView")}?id=${article.id}`}>
      <motion.div
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
      >
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#D9F2FF] to-[#BEE9FF]">
          {article.featured_image ? (
            <img
              src={article.featured_image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl">📰</span>
            </div>
          )}
          <Badge className="absolute top-4 left-4 bg-white/90 text-blue-700 border-blue-200">
            {article.category}
          </Badge>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {article.excerpt && (
            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
              {article.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              {article.read_time && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.read_time} min
                </div>
              )}
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {article.views || 0}
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
