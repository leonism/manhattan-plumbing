import { Metadata } from 'next'
import { getPostData, getAllPostSlugs } from '@/lib/news'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ChevronLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
import { format } from 'date-fns'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((s) => ({
    slug: s.params.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Manhattan Plumbing News`,
    description: post.excerpt,
    alternates: {
      canonical: `/news/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage.src],
      type: 'article',
    },
  }
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pb-20">
      {/* Hero Section with Post Data */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-slate-900">
        <Image
          src={post.featuredImage.src}
          alt={post.featuredImage.alt}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-slate-900" />
        
        <div className="absolute bottom-0 left-0 w-full pb-12 pt-24">
          <div className="container mx-auto px-4">
            <Link 
              href="/news" 
              className="mb-8 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ChevronLeft size={20} className="mr-1" />
              <span>Back to News</span>
            </Link>
            
            <div className="max-w-4xl">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-blue-200">
                <span className="rounded-full bg-blue-600 px-3 py-1 font-semibold text-white">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {post.author.name}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-blue">
              {/* In a real app, we would use MDXRemote or similar to render post.content */}
              {/* For now, I'll just show a placeholder since I haven't set up MDX rendering in Next.js yet */}
              <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
              
              {/* Note: In Next.js, we should use next-mdx-remote or similar for safe MDX rendering */}
              <p className="text-slate-500 italic mt-8 border-t pt-8">
                This article was originally published in our news section. For more tips and updates, follow us on social media.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-1 text-sm font-medium text-slate-600 dark:text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            {/* Author Bio */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-8 border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6 dark:text-white">About the Author</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-blue-600">
                  <Image 
                    src={post.author.image.src} 
                    alt={post.author.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <div className="font-bold text-lg dark:text-white">{post.author.name}</div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm">Plumbing Specialist</div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                With over 15 years of experience in Manhattan's unique plumbing landscape, {post.author.name.split(' ')[0]} brings expert knowledge to every article.
              </p>
            </div>

            {/* Newsletter CTA */}
            <div className="rounded-2xl bg-blue-600 p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Never Miss an Update</h3>
              <p className="mb-6 text-blue-100">
                Get the latest plumbing tips and company news delivered straight to your inbox.
              </p>
              <Button variant="default" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                Subscribe to Newsletter
              </Button>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-20">
        <div className="rounded-3xl bg-slate-900 p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Facing a Plumbing Issue?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-300">
              Don't wait for a small leak to become a flood. Our expert team is ready to help you 24/7.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:+12125551234" variant="default" className="bg-blue-600 hover:bg-blue-700">
                <span>Call Us Now: (212) 555-1234</span>
              </Button>
              <Button href="/#contact" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <span>Book Online</span>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-64 w-64 bg-blue-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
      </section>
    </main>
  )
}
