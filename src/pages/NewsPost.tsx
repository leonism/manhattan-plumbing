import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { format } from "date-fns";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Folder } from "lucide-react";
import { MDXProvider } from "@mdx-js/react";
import Button from "../components/UI/Button";
import { useNews } from "../hooks/useNews";

// Helper function to slugify strings
const slugify = (text: string) => {
  return text
    .toString()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

const components = {
  // You can add custom components here to override default HTML elements
  // For example, to style all <h1> tags:
  // h1: ({ children }) => <h1 className="text-4xl font-bold text-blue-600">{}</h1>,
};

const NewsPost: React.FC = () => {
  const { slug } = useParams();
  const { allPosts } = useNews();

  const postIndex = allPosts.findIndex((post) => post.slug === slug);
  const post = allPosts[postIndex];

  const previousPost = postIndex > 0 ? allPosts[postIndex - 1] : null;
  const nextPost = postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null;

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
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage.src} />
        <link rel="canonical" href={`/news/${post.slug}`} />
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
              "name": post.author.name,
            },
          })}
        </script>
      </Helmet>

      <main className="min-h-screen py-20 sm:py-24 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
        <article className="container mx-auto px-4 py-8">
          {/* <Link
            to="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link> */}

          <header className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 dark:text-slate-400 mb-6">
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
              <div className="flex items-center">
                <Folder className="w-4 h-4 mr-2" />
                <Link to={`/news/category/${post.category}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.category}
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-12 h-12 rounded-full border-2 border-blue-400"
              />
              <div>
                <div className="font-medium text-slate-900 dark:text-white">
                  {post.author.name}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {post.author.role}
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden mb-8 shadow-lg">
              <img
                src={post.featuredImage.src}
                alt={post.featuredImage.alt}
                className="object-cover w-full h-full max-h-96"
              />
              {post.featuredImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm">
                  {post.featuredImage.caption}
                </div>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/news/tag/${slugify(tag)}`}
                  className="inline-flex items-center text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full transition-colors dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800">
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
          </header>

          <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
            prose-h1:font-extrabold prose-h2:font-bold prose-h3:font-semibold prose-h4:font-medium
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-lg prose-img:shadow-md
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic
            prose-p:leading-relaxed prose-li:leading-relaxed
            prose-li:marker:text-blue-500
            prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded
            prose-strong:font-bold
            prose-table:w-full prose-table:table-auto prose-table:border-collapse prose-table:rounded-lg prose-table:overflow-hidden
            prose-th:bg-slate-200 dark:prose-th:bg-slate-700 prose-th:p-3 prose-th:text-left prose-th:font-semibold
            prose-td:p-3 prose-td:border-b prose-td:border-slate-200 dark:prose-td:border-slate-700
            prose-ul:list-disc prose-ul:pl-5
            prose-ol:list-decimal prose-ol:pl-5
            ">
            <MDXProvider components={components}>
              {React.createElement(post.body)}
            </MDXProvider>
          </div>

          <div className="max-w-4xl mx-auto mt-16 flex flex-col sm:flex-row justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-8 gap-4">
            {previousPost ? (
              <Link
                to={`/news/${previousPost.slug}`}
                className="flex items-center gap-2 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors w-full sm:w-auto group">
                <ArrowLeft className="w-5 h-5 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                <div className="flex-grow">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Previous Article</div>
                  <div className="font-semibold line-clamp-1">{previousPost.title}</div>
                </div>
              </Link>
            ) : (
              <div className="w-full sm:w-auto" />
            )}

            {nextPost ? (
              <Link
                to={`/news/${nextPost.slug}`}
                className="flex items-center gap-2 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors w-full sm:w-auto ml-auto text-right">
                <div className="flex-grow">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Next Article</div>
                  <div className="font-semibold line-clamp-1">{nextPost.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div className="w-full sm:w-auto" />
            )}
          </div>

          {/* Related Articles Section */}
          {allPosts.filter(p => p.slug !== post.slug).length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((relatedPost) => (
                  <div
                    key={relatedPost.slug}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <Link to={`/news/${relatedPost.slug}`}>
                      <img
                        src={relatedPost.featuredImage.src}
                        alt={relatedPost.featuredImage.alt}
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">
                        <Link
                          to={`/news/${relatedPost.slug}`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
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
