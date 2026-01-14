import { filterSpaces, properties } from "@/data/spaces/spacesData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const city = searchParams.get("city") || "all";
    const type = searchParams.get("type") || "all";
    const price = searchParams.get("price") || "all";
    const sort = searchParams.get("sort") || "popular";
    const search = searchParams.get("search") || "";

    const filteredSpaces = filterSpaces(
      properties,
      city,
      type,
      price,
      sort,
      search
    );

    return NextResponse.json(
      {
        success: true,
        data: filteredSpaces,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch spaces data",
      },
      { status: 500 }
    );
  }
};
