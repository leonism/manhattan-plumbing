import { getAllPosts } from '@/lib/news'
import NewsCard from '@/components/News/NewsCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const NewsSection = async () => {
  const posts = getAllPosts().slice(0, 6) // Get latest 6 posts for the homepage

  if (!posts.length) {
    return null // Don't render section if no posts
  }

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="bg-slate-50 py-20 dark:bg-slate-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Latest News"
          subtitle="Stay updated with our latest articles and insights"
          centered={false}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            href="/news"
            className="inline-flex items-center justify-center rounded-md bg-green-900 px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-900 hover:shadow-lg focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-hidden"
          >
            View All News
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
