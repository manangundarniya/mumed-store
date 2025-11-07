import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Eye,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RelatedArticles from "../components/blog/RelatedArticles";
import { format } from "date-fns";

export default function ArticleView() {
  const queryClient = useQueryClient();
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");
  const [showShareMenu, setShowShareMenu] = useState(false);

  const { data: article, isLoading } = useQuery({
    queryKey: ["article", articleId],
    queryFn: async () => {
      const articles = await base44.entities.Article.filter({ id: articleId });
      return articles[0];
    },
    enabled: !!articleId,
  });

  const updateViewsMutation = useMutation({
    mutationFn: (id) =>
      base44.entities.Article.update(id, {
        views: (article?.views || 0) + 1,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["article", articleId]);
    },
  });

  useEffect(() => {
    if (article?.id) {
      updateViewsMutation.mutate(article.id);
    }
  }, [article?.id]);

  const shareUrl = window.location.href;
  const shareTitle = article?.title || "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareTitle
    )}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAF9] via-white to-[#F9FAFB] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAF9] via-white to-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Article not found
          </h2>
          <Link to={createPageUrl("Blog")}>
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAF9] via-white to-[#F9FAFB]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#D9F2FF] to-[#BEE9FF] py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Link to={createPageUrl("Blog")}>
            <Button variant="ghost" className="mb-6 hover:bg-white/50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 -mt-8">
        <motion.article
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Featured Image */}
          {article.featured_image && (
            <div className="relative h-96 overflow-hidden">
              <img
                src={article.featured_image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          )}

          <div className="p-8 md:p-12">
            {/* Category Badge */}
            <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white mb-4">
              {article.category}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
              {article.author_name && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold">
                    {article.author_name[0]}
                  </div>
                  <span className="font-medium">{article.author_name}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(
                  new Date(article.published_date || article.created_date),
                  "MMM d, yyyy"
                )}
              </div>
              {article.read_time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.read_time} min read
                </div>
              )}
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {article.views || 0} views
              </div>
            </div>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                {article.excerpt}
              </p>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: "1.8",
                color: "#374151",
              }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-600">
                    Tags:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-blue-200 text-blue-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">
                  Share this article:
                </span>
                <div className="flex gap-3">
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-blue-50"
                    >
                      <Facebook className="w-4 h-4 text-blue-600" />
                    </Button>
                  </a>
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-blue-50"
                    >
                      <Twitter className="w-4 h-4 text-blue-400" />
                    </Button>
                  </a>
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-blue-50"
                    >
                      <Linkedin className="w-4 h-4 text-blue-700" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Articles */}
        <div className="max-w-4xl mx-auto mt-16 mb-16">
          <RelatedArticles currentArticle={article} />
        </div>
      </div>
    </div>
  );
}
