import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { format } from "date-fns";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { MDXProvider } from "@mdx-js/react"; // Import MDXProvider
import Button from "../components/UI/Button";
import { useNews } from "../hooks/useNews";

// Define components for MDX rendering (can be expanded as needed)
const components = {
  // Example: custom H1 component
  // h1: ({ children }) => <h1 className="text-blue-600">{children}</h1>,
};

const NewsPost: React.FC = () => {
  const { slug } = useParams();
  const { posts } = useNews();
  const getPost = (slug: string) => posts.find(post => post.slug === slug);
  const getRelatedPosts = (currentSlug: string, limit: number) =>
    posts.filter(post => post.slug !== currentSlug).slice(0, limit);
  const post = getPost(slug || "");
  const relatedPosts = post ? getRelatedPosts(post.slug, 3) : [];

  if (!post) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button href="/news">Back to News</Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Manhattan Plumbing</title>
        <meta
          name="description"
          content={post.excerpt}
        />
        <meta
          property="og:title"
          content={post.title}
        />
        <meta
          property="og:description"
          content={post.excerpt}
        />
        <meta
          property="og:image"
          content={post.featuredImage.src}
        />
        <link
          rel="canonical"
          href={`/news/${post.slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featuredImage.src,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author.name
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen py-16">
        <article className="container mx-auto px-4">
          <Link
            to="/news"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>

          <header className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readingTime}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-gray-600">{post.author.role}</div>
              </div>
            </div>

            <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
              <img
                src={post.featuredImage.src}
                alt={post.featuredImage.alt}
                className="object-cover w-full h-full"
              />
              {post.featuredImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm">
                  {post.featuredImage.caption}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/news/tag/${tag}`}
                  className="inline-flex items-center text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors">
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
          </header>

          <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
            {/* Content will be rendered here by MDX */}
            <MDXProvider components={components}>
              {React.createElement(post.body)}
            </MDXProvider>
          </div>

          {relatedPosts.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.slug}
                    className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link to={`/news/${relatedPost.slug}`}>
                      <img
                        src={relatedPost.featuredImage.src}
                        alt={relatedPost.featuredImage.alt}
                        className="w-full aspect-video object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <h3 className="font-bold mb-2">
                        <Link
                          to={`/news/${relatedPost.slug}`}
                          className="hover:text-primary-600 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </>
  );
};

export default NewsPost;
