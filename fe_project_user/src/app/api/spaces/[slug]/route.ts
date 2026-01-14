import { NextRequest, NextResponse } from "next/server";
import { properties } from "@/data/spaces/spacesData";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  try {
    const { slug } = await params;

    const property = properties.find((p) => p.slug === slug);

    if (!property) {
      return NextResponse.json(
        {
          success: false,
          error: "Property not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: property,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch property data",
      },
      { status: 500 }
    );
  }
};
