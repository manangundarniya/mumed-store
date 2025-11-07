import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

export default function RelatedArticles({ currentArticle }) {
  const { data: articles } = useQuery({
    queryKey: ["related-articles", currentArticle.category],
    queryFn: () =>
      base44.entities.Article.filter(
        {
          status: "published",
          category: currentArticle.category,
        },
        "-published_date",
        4
      ),
    initialData: [],
  });

  const relatedArticles = articles
    .filter((article) => article.id !== currentArticle.id)
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
