import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchBar from "./_components/SearchBar";
import CategoryFilter from "./_components/CategoryFilter";
import NewsletterSignup from "./_components/NewsletterSignup";
import { getCategoryData } from "../../data/blog/blogData";
import { Metadata } from "next";
import { BlogPageProps } from "@/data/blog/blogType";
import { getBlogData } from "./actions";
import { getIcon } from "@/lib/icon-map";

export const metadata: Metadata = {
  title: "Blog & Journal · NextU Living",
  description:
    "Explore thought leadership, practical guides, and inspiring stories from our community of conscious creators, digital nomads, and lifestyle innovators.",
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const category = (params?.category || "all") as string;
  const search = (params?.search || "") as string;

  const { data } = await getBlogData(category, search);

  const {
    featuredPost,
    filteredPosts,
    popularPosts,
    multimediaContent,
    categories,
  } = data;

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      {/* Hero Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/70 via-brand-secondary/50 to-brand-primary/30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-brand-light space-y-4">
          <Badge className="w-fit bg-brand-primary text-white border-0">
            <BookOpen className="h-3 w-3 mr-1" />
            Blog & Journal · NextU Living
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Stories, Insights & Resources
          </h1>
          <p className="text-lg text-brand-light/90 max-w-3xl">
            Explore thought leadership, practical guides, and inspiring stories
            from our community of conscious creators, digital nomads, and
            lifestyle innovators.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Featured Post */}
            {featuredPost && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-brand-primary" />
                  <h2 className="text-2xl font-bold text-brand-secondary">
                    Featured Article
                  </h2>
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <Card className="border-2 border-brand-primary/20 shadow-lg bg-brand-light/95 overflow-hidden group hover:shadow-xl transition-all">
                    <div className="relative h-80">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-brand-primary text-white border-0">
                          {getCategoryData(featuredPost.category).name}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-center gap-4 text-sm text-brand-secondary/70">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(featuredPost.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-brand-secondary/70 leading-relaxed text-lg">
                        {featuredPost.excerpt}
                      </p>
                      <Button
                        size="lg"
                        className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
                      >
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </section>
            )}

            {/* Regular Posts Grid */}
            <section>
              <CategoryFilter categories={categories} />
              <SearchBar />
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-brand-secondary">
                  {category === "all"
                    ? "Latest Articles"
                    : getCategoryData(category).name}
                </h2>
                <span className="text-sm text-brand-secondary/70">
                  {filteredPosts.length} article
                  {filteredPosts.length !== 1 ? "s" : ""}
                </span>
              </div>

              {filteredPosts.length === 0 ? (
                <Card className="bg-brand-light/95 border border-brand-light/20 p-12 text-center">
                  <BookOpen className="h-12 w-12 text-brand-secondary/40 mx-auto mb-4" />
                  <p className="text-brand-secondary/70 text-lg">
                    No articles found matching your criteria.
                  </p>
                  <Button variant="outline" className="mt-4" asChild>
                    <Link href="/blog">Clear Filters</Link>
                  </Button>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {filteredPosts.map((post) => {
                    const categoryData = getCategoryData(post.category);
                    const CategoryIcon = getIcon(categoryData.iconName);
                    return (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <Card className="bg-brand-light/95 border border-brand-light/20 overflow-hidden group hover:shadow-lg transition-all">
                          <div className="grid md:grid-cols-3 gap-0">
                            <div className="relative h-48 md:h-auto">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <CardContent className="md:col-span-2 p-6 space-y-3">
                              <div className="flex items-center gap-3">
                                <Badge
                                  className={`${categoryData.color} bg-brand-light/95 border-0`}
                                >
                                  <CategoryIcon className="h-3 w-3 mr-1" />
                                  {categoryData.name}
                                </Badge>
                                <div className="flex items-center gap-4 text-xs text-brand-secondary/70">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>
                                      {new Date(post.date).toLocaleDateString(
                                        "en-US",
                                        {
                                          month: "short",
                                          day: "numeric",
                                        }
                                      )}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{post.readTime}</span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="text-xl font-bold text-brand-secondary group-hover:text-brand-primary transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-sm text-brand-secondary/70 leading-relaxed line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-brand-light/90 flex items-center justify-center">
                                    <User className="h-4 w-4 text-brand-secondary/80" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-brand-secondary">
                                      {post.author}
                                    </p>
                                    <p className="text-xs text-brand-secondary/70">
                                      {post.authorRole}
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-brand-primary hover:text-brand-primary/90 hover:bg-brand-primary/10"
                                >
                                  Read More
                                  <ArrowRight className="h-4 w-4 ml-1" />
                                </Button>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="text-center pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 font-semibold"
                >
                  Load More Articles
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup - Client Component */}
            <NewsletterSignup />

            {/* Popular Posts */}
            <Card className="bg-brand-light/95 border border-brand-light/20 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-brand-secondary flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-brand-primary" />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div
                      key={post.id}
                      className="flex gap-3 pb-4 border-b border-brand-light/20 last:border-0 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-sm font-bold text-brand-primary">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-brand-secondary group-hover:text-brand-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-brand-secondary/70 mt-1 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Multimedia Section */}
        <section className="mt-16 space-y-8">
          <div className="text-center">
            <Badge className="mb-4 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
              Multimedia Content
            </Badge>
            <h2 className="text-3xl font-bold text-brand-secondary mb-3">
              Watch, Listen & Learn
            </h2>
            <p className="text-brand-secondary/70 max-w-2xl mx-auto">
              Dive deeper with our video stories, podcast episodes, and visual
              content from the NextU community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {multimediaContent.map((item) => {
              const IconComponent = getIcon(item.iconName);
              return (
                <Card
                  key={item.id}
                  className="bg-brand-light/95 border border-brand-light/20 overflow-hidden group hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-secondary/40 group-hover:bg-brand-secondary/60 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-brand-light/95 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-brand-primary" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <Badge className="bg-brand-secondary/80 text-brand-light border-0">
                        {item.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-1">
                      {item.type}
                    </p>
                    <h3 className="text-base font-bold text-brand-secondary line-clamp-2 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Button
              size="lg"
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 font-semibold"
            >
              View All Multimedia
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </section>

        <section className="mt-16">
          <Card className="relative overflow-hidden border-2 border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 via-brand-light/90 to-brand-light/90">
            <CardContent className="p-12 text-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">
                  Ready to Experience NextU Living?
                </h2>
                <p className="text-lg text-brand-secondary/70 max-w-2xl mx-auto">
                  Join a community of conscious creators, digital nomads, and
                  lifestyle innovators. Start your journey today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8"
                  asChild
                >
                  <Link href="/membership">Explore Membership</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 font-semibold px-8"
                  asChild
                >
                  <Link href="/contact">Book a Tour</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
