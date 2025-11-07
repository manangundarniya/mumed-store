import React, { useState, useEffect } from "react";
import { base44 } from "./api/base44Client";
import { createPageUrl } from "./utils";
import { Button } from "./components/ui/button";
import Hero from "./components/landing/Hero";
import ContactStrip from "./components/landing/ContactStrip";
import Categories from "./components/landing/Categories";
import FeaturedProducts from "./components/landing/FeaturedProducts";
import Newsletter from "./components/landing/Newsletter";
import StickyMarketplaceCTA from "./components/landing/StickyMarketplaceCTA";
import Footer from "./components/landing/Footer";
import ArticleCard from "./components/blog/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import SocialBanner from "./components/landing/SocialBanner";
import Header from "./components/landing/Header";

export default function Home() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const { data: articles, isLoading } = useQuery({
    queryKey: ["featured-articles"],
    queryFn: () =>
      base44.entities.Article.filter(
        { status: "published" },
        "-published_date",
        3
      ),
    initialData: [],
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAF9] via-white to-[#F9FAFB]">
      <Header />

      <section id="hero">
        <Hero />
      </section>
      <section id="contact">
        <ContactStrip />
      </section>
      <section id="categories">
        <Categories />
      </section>
      <section id="featured-products">
        <FeaturedProducts />
      </section>
      <section>
        <SocialBanner />
      </section>
      <section id="newsletter">
        <Newsletter />
      </section>

      {/* Blog Preview Section */}
      {/* {articles.length > 0 && (
        <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F9FAFB]">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Latest from Our Blog
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Expert tips, guides, and insights for home care and family
                wellness
              </p>
              <Link to={createPageUrl("Blog")}>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg">
                  View All Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>
      )} */}

      <Footer />
      <StickyMarketplaceCTA show={showStickyCTA} />
    </div>
  );
}
