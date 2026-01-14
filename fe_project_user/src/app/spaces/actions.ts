"use server";

import { SpacesAPIResponse } from "@/data/spaces/spacesType";

export async function getSpacesData(
  city?: string,
  type?: string,
  price?: string,
  sort?: string,
  search?: string
): Promise<SpacesAPIResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const params = new URLSearchParams();

  if (city && city !== "all") {
    params.set("city", city);
  }
  if (type && type !== "all") {
    params.set("type", type);
  }
  if (price && price !== "all") {
    params.set("price", price);
  }
  if (sort) {
    params.set("sort", sort);
  }
  if (search) {
    params.set("search", search);
  }

  const url = `${baseUrl}/api/spaces${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch spaces data");
  }

  return res.json();
}
