import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Eye, Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RichTextEditor from "../components/blog/RichTextEditor";
import SEOFields from "../components/blog/SEOFields";
import TagInput from "../components/blog/TagInput";
import { toast } from "sonner";

const categories = [
  "Home Care Tips",
  "Product Guides",
  "Industry News",
  "Cleaning Hacks",
  "Baby Care",
  "Personal Hygiene",
  "Eco-Friendly Living",
];

export default function ArticleEditor() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");

  const [article, setArticle] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featured_image: "",
    category: "",
    tags: [],
    meta_title: "",
    meta_description: "",
    meta_keywords: [],
    author_name: "",
    read_time: 5,
    status: "draft",
  });

  const [uploading, setUploading] = useState(false);

  const { data: existingArticle } = useQuery({
    queryKey: ["article", articleId],
    queryFn: async () => {
      const articles = await base44.entities.Article.filter({ id: articleId });
      return articles[0];
    },
    enabled: !!articleId,
  });

  useEffect(() => {
    if (existingArticle) {
      setArticle(existingArticle);
    }
  }, [existingArticle]);

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Article.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
      toast.success("Article created successfully!");
      navigate(createPageUrl("Blog"));
    },
    onError: () => {
      toast.error("Failed to create article");
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Article.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
      queryClient.invalidateQueries(["article", articleId]);
      toast.success("Article updated successfully!");
      navigate(createPageUrl("Blog"));
    },
    onError: () => {
      toast.error("Failed to update article");
    },
  });

  const handleSubmit = (status) => {
    const dataToSave = {
      ...article,
      status,
      published_date:
        status === "published"
          ? new Date().toISOString()
          : article.published_date,
    };

    if (articleId) {
      updateMutation.mutate({ id: articleId, data: dataToSave });
    } else {
      createMutation.mutate(dataToSave);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setArticle({ ...article, featured_image: file_url });
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image");
    }
    setUploading(false);
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title) => {
    setArticle({
      ...article,
      title,
      slug: generateSlug(title),
      meta_title: title,
    });
  };

  const estimateReadTime = (content) => {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, "");
    const wordCount = textContent.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  useEffect(() => {
    if (article.content) {
      const readTime = estimateReadTime(article.content);
      setArticle((prev) => ({ ...prev, read_time: readTime }));
    }
  }, [article.content]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAF9] via-white to-[#F9FAFB]">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate(createPageUrl("Blog"))}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">
                {articleId ? "Edit Article" : "Create New Article"}
              </h1>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => handleSubmit("draft")}
                disabled={!article.title || !article.content}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button
                onClick={() => handleSubmit("published")}
                disabled={
                  !article.title || !article.content || !article.category
                }
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="title" className="text-base font-semibold">
                      Title *
                    </Label>
                    <Input
                      id="title"
                      value={article.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Enter article title..."
                      className="mt-2 text-lg py-6"
                    />
                  </div>

                  <div>
                    <Label htmlFor="slug" className="text-base font-semibold">
                      URL Slug
                    </Label>
                    <Input
                      id="slug"
                      value={article.slug}
                      onChange={(e) =>
                        setArticle({ ...article, slug: e.target.value })
                      }
                      placeholder="article-url-slug"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="excerpt"
                      className="text-base font-semibold"
                    >
                      Excerpt
                    </Label>
                    <Textarea
                      id="excerpt"
                      value={article.excerpt}
                      onChange={(e) =>
                        setArticle({ ...article, excerpt: e.target.value })
                      }
                      placeholder="Short summary of the article..."
                      className="mt-2 h-24"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-2 block">
                      Content *
                    </Label>
                    <RichTextEditor
                      value={article.content}
                      onChange={(content) =>
                        setArticle({ ...article, content })
                      }
                    />
                  </div>
                </div>
              </motion.div>

              {/* SEO Section */}
              <motion.div
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  SEO Optimization
                </h3>
                <SEOFields article={article} setArticle={setArticle} />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-lg font-bold mb-4">Settings</h3>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="category" className="font-semibold">
                      Category *
                    </Label>
                    <Select
                      value={article.category}
                      onValueChange={(value) =>
                        setArticle({ ...article, category: value })
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="author" className="font-semibold">
                      Author Name
                    </Label>
                    <Input
                      id="author"
                      value={article.author_name}
                      onChange={(e) =>
                        setArticle({ ...article, author_name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="font-semibold">Estimated Read Time</Label>
                    <div className="mt-2 px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-600">
                      {article.read_time} minutes
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-bold mb-4">Featured Image</h3>

                {article.featured_image ? (
                  <div className="space-y-3">
                    <img
                      src={article.featured_image}
                      alt="Featured"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      variant="outline"
                      onClick={() =>
                        setArticle({ ...article, featured_image: "" })
                      }
                      className="w-full"
                    >
                      Remove Image
                    </Button>
                  </div>
                ) : (
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload">
                      <Button
                        variant="outline"
                        className="w-full"
                        disabled={uploading}
                        asChild
                      >
                        <span>
                          <Upload className="w-4 h-4 mr-2" />
                          {uploading ? "Uploading..." : "Upload Image"}
                        </span>
                      </Button>
                    </label>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-bold mb-4">Tags</h3>
                <TagInput
                  tags={article.tags || []}
                  onChange={(tags) => setArticle({ ...article, tags })}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
