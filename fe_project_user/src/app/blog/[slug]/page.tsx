import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogDetailData } from "./actions";
import { blogPosts, getCategoryData } from "@/data/blog/blogData";
import { BlogDetailPageProps } from "@/data/blog/blogType";
import { BlogActions } from "./_components/BlogActions";
import { BlogContent } from "./_components/BlogContent";

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const response = await getBlogDetailData(slug);

  if (!response.success || !response.data) {
    notFound();
  }

  const post = response.data;
  const category = getCategoryData(post.category);

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((p) => post.relatedPosts?.includes(p.id)).slice(0, 3)
    : blogPosts
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Header */}
      <div className="bg-brand-light/80 backdrop-blur-sm border-b border-brand-light/20 top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <div className="bg-brand-light/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/60 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <Badge className="bg-brand-primary text-white border-0 text-sm px-4 py-1">
                {category.name}
              </Badge>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-8 md:p-12 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-brand-secondary/70 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-brand-secondary/70">
              <div className="flex items-center gap-2">
                {post.authorAvatar && (
                  <Image
                    src={post.authorAvatar}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <div className="font-semibold text-brand-secondary">
                    {post.author}
                  </div>
                  <div className="text-sm text-brand-secondary/70">
                    {post.authorRole}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-light/20">
              <BlogActions title={post.title} slug={post.slug} />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-brand-light/95 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          {post.content ? (
            <BlogContent content={post.content} />
          ) : (
            <div className="text-brand-secondary/70">
              <p>Content coming soon...</p>
            </div>
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="bg-brand-light/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5 text-brand-primary" />
              <h3 className="font-semibold text-brand-secondary">Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-brand-light/95 hover:bg-brand-light/90"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="bg-brand-light/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4">
            {post.authorAvatar && (
              <Image
                src={post.authorAvatar}
                alt={post.author}
                width={80}
                height={80}
                className="rounded-full"
              />
            )}
            <div>
              <h3 className="font-bold text-xl text-brand-secondary mb-1">
                {post.author}
              </h3>
              <p className="text-brand-secondary/70 mb-3">{post.authorRole}</p>
              <p className="text-brand-secondary/70">
                Contributing writer at NextU Living, sharing insights on
                co-living, community building, and conscious living.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-brand-light/95 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-brand-secondary mb-6">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => {
                const relatedCategory = getCategoryData(relatedPost.category);
                return (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <Card className="border-brand-light/20 hover:border-brand-primary transition-all hover:shadow-md">
                      <div className="relative h-40 overflow-hidden rounded-t-lg">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge
                          variant="outline"
                          className="mb-2 text-xs border-brand-primary text-brand-primary"
                        >
                          {relatedCategory.name}
                        </Badge>
                        <h4 className="font-semibold text-brand-secondary line-clamp-2 mb-2 group-hover:text-brand-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                        <div className="flex items-center text-xs text-brand-secondary/70">
                          <Clock className="h-3 w-3 mr-1" />
                          {relatedPost.readTime}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
