import React from "react";
import { useNews } from "../../hooks/useNews";
import NewsCard from "../News/NewsCard";
import SectionHeading from "../UI/SectionHeading";
import Button from "../UI/Button";
import { ArrowRight } from "lucide-react";

const NewsSection: React.FC = () => {
  const { posts, isLoading } = useNews({ limit: 6 }); // Fetch latest 6 posts

  if (isLoading) {
    // Optional: Add a loading state UI
    return (
      <section
        id="news"
        aria-labelledby="news-heading"
        className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container px-4 mx-auto md:px-6">
          <SectionHeading
            title="Latest News"
            subtitle="Stay updated with our latest articles and insights"
          />
          <div className="text-center">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Loading news...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!posts.length) {
    return null; // Don't render section if no posts
  }

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container px-4 mx-auto md:px-6">
        <SectionHeading
          title="Latest News"
          subtitle="Stay updated with our latest articles and insights"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <NewsCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            href="/news"
            variant="secondary"
            size="lg">
            View All News
            <ArrowRight
              className="ml-2"
              size={18}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
