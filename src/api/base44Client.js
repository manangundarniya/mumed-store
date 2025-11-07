// src/api/base44Client.js

// Mock base44 API client
export const base44 = {
  entities: {
    Article: {
      async filter(filters = {}, orderBy = "-published_date", limit = 3) {
        // Return sample dummy data for now
        return [
          {
            id: 1,
            title: "How to Improve Home Wellness",
            excerpt:
              "Discover easy ways to make your home healthier and happier.",
            published_date: "2024-10-01",
            image: "/placeholder1.jpg",
          },
          {
            id: 2,
            title: "Top 5 Family Health Tips",
            excerpt: "Simple habits for better family wellbeing.",
            published_date: "2024-10-10",
            image: "/placeholder2.jpg",
          },
          {
            id: 3,
            title: "The Future of Smart Home Care",
            excerpt: "Exploring how technology helps modern home healthcare.",
            published_date: "2024-10-15",
            image: "/placeholder3.jpg",
          },
        ];
      },
    },
  },
};
