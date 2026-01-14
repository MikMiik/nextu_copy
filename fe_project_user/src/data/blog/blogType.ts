export interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export interface BlogAPIResponse {
  success: boolean;
  data: {
    featuredPost: BlogPost | undefined;
    filteredPosts: BlogPost[];
    popularPosts: PopularPost[];
    multimediaContent: MultimediaItem[];
    categories: Category[];
  };
}
export interface Category {
  id: string;
  name: string;
  iconName: string;
  color: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content?: string;
  tags?: string[];
  relatedPosts?: number[];
}

export interface PopularPost {
  id: number;
  title: string;
  readTime: string;
}

export interface MultimediaItem {
  id: number;
  type: "video" | "podcast";
  title: string;
  thumbnail: string;
  duration: string;
  iconName: string;
}

export interface BlogDetailAPIResponse {
  success: boolean;
  data: BlogPost | null;
}

export interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}
