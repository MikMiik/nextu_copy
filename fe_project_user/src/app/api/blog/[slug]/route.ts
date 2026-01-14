import { NextRequest, NextResponse } from "next/server";
import { blogPosts } from "../../../../data/blog/blogData";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  try {
    const { slug } = await params;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
      return NextResponse.json({ success: false, data: null }, { status: 404 });
    }

    return NextResponse.json(
      {
        success: true,
        data: post,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
};
