import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Search, Filter, BookOpen, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArticleCard from "../components/blog/ArticleCard";
import BlogHeader from "../components/blog/BlogHeader";

const categories = [
  "All",
  "Home Care Tips",
  "Product Guides",
  "Industry News",
  "Cleaning Hacks",
  "Baby Care",
  "Personal Hygiene",
  "Eco-Friendly Living",
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      base44.entities.Article.filter(
        { status: "published" },
        "-published_date"
      ),
    initialData: [],
  });

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAF9] via-white to-[#F9FAFB]">
      <BlogHeader />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles, tips, guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-base rounded-xl border-2 border-gray-200 focus:border-blue-400"
            />
          </div>

          {/* Category Filter */}
          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-lg ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === "All" && !searchQuery && (
          <motion.div
            className="max-w-6xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Article
              </h2>
            </div>
            <ArticleCard article={featuredArticle} featured={true} />
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All"
                ? "Latest Articles"
                : selectedCategory}
            </h2>
            <span className="text-gray-500 ml-2">
              ({filteredArticles.length})
            </span>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl h-96 animate-pulse"
                />
              ))}
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
