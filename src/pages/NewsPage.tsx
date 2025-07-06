import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../components/UI/SectionHeading";
import NewsCard from "../components/News/NewsCard";
import SearchBar from "../components/UI/SearchBar";
import Button from "../components/UI/Button";
import { useNews } from "../hooks/useNews";

const NewsPage: React.FC = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, categories, totalPages } = useNews({
    category,
    page: currentPage,
  });

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <SectionHeading
            title={category ? `${category} News` : "Latest News"}
            subtitle="Stay informed about the latest updates and insights"
          />

          <div className="mt-8 max-w-xl">
            <SearchBar />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/news"
              className={`text-sm ${
                !category
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700"
              } px-4 py-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors`}>
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/news/category/${cat}`}
                className={`text-sm ${
                  category === cat
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700"
                } px-4 py-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors`}>
                {cat}
              </Link>
            ))}
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <NewsCard
              key={post.slug}
              post={post}
            />
          ))}
        </section>

        {totalPages > 1 && (
          <nav className="mt-12 flex justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              isDisabled={currentPage === 1}>
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "primary" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              isDisabled={currentPage === totalPages}>
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </nav>
        )}
      </div>
    </main>
  );
};

export default NewsPage;
