import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function SEOFields({ article, setArticle }) {
  const metaTitleLength = article.meta_title?.length || 0;
  const metaDescriptionLength = article.meta_description?.length || 0;

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="meta_title">Meta Title</Label>
          <span
            className={`text-xs ${
              metaTitleLength > 60 ? "text-red-600" : "text-gray-500"
            }`}
          >
            {metaTitleLength}/60
          </span>
        </div>
        <Input
          id="meta_title"
          value={article.meta_title || ""}
          onChange={(e) =>
            setArticle({ ...article, meta_title: e.target.value })
          }
          placeholder="SEO-optimized title (60 chars max)"
          maxLength={60}
        />
        <p className="text-xs text-gray-500 mt-1">
          Appears in search engine results
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="meta_description">Meta Description</Label>
          <span
            className={`text-xs ${
              metaDescriptionLength > 160 ? "text-red-600" : "text-gray-500"
            }`}
          >
            {metaDescriptionLength}/160
          </span>
        </div>
        <Textarea
          id="meta_description"
          value={article.meta_description || ""}
          onChange={(e) =>
            setArticle({ ...article, meta_description: e.target.value })
          }
          placeholder="Brief description for search engines (160 chars max)"
          className="h-24"
          maxLength={160}
        />
        <p className="text-xs text-gray-500 mt-1">
          Appears below the title in search results
        </p>
      </div>

      <div>
        <Label htmlFor="meta_keywords">Meta Keywords</Label>
        <div className="mt-2 space-y-2">
          <Input
            id="meta_keywords"
            placeholder="Type a keyword and press Enter"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                e.preventDefault();
                const keyword = e.target.value.trim();
                if (!article.meta_keywords?.includes(keyword)) {
                  setArticle({
                    ...article,
                    meta_keywords: [...(article.meta_keywords || []), keyword],
                  });
                }
                e.target.value = "";
              }
            }}
          />
          <div className="flex flex-wrap gap-2">
            {article.meta_keywords?.map((keyword, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-red-100"
                onClick={() => {
                  setArticle({
                    ...article,
                    meta_keywords: article.meta_keywords.filter(
                      (_, i) => i !== index
                    ),
                  });
                }}
              >
                {keyword} ×
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
