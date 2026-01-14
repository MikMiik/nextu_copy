import { NextRequest, NextResponse } from "next/server";
import {
  blogPosts,
  popularPosts,
  multimediaContent,
  categories,
  filterPosts,
} from "../../../data/blog/blogData";

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category") || "all";
    const search = searchParams.get("search") || "";

    const featuredPost = blogPosts.find((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);
    const filteredPosts = filterPosts(regularPosts, category, search);

    return NextResponse.json(
      {
        success: true,
        data: {
          featuredPost,
          filteredPosts,
          popularPosts,
          multimediaContent,
          categories,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog data" },
      { status: 500 }
    );
  }
};
