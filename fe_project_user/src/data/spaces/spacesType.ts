export type PropertyType = "all" | "villa" | "studio" | "shared" | "farm";
export type PriceRange = "all" | "budget" | "mid" | "premium";
export type LocationFilter = "all" | "hanoi" | "hochiminh" | "danang";

export interface RoomType {
  id: string;
  name: string;
  type: string;
  price: number;
  size: number;
  beds: number;
  bathrooms: number;
  availability: number;
  image: string;
  features: string[];
  description: string;
}

export interface PropertyEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  description: string;
  image: string;
  attendees: number;
}

export interface Property {
  id: string;
  name: string;
  slug: string;
  location: string;
  city: string;
  type: PropertyType;
  price: number;
  priceRange: PriceRange;
  rating: number;
  reviews: number;
  capacity: number;
  image: string;
  images: string[];
  featured: boolean;
  amenities: string[];
  description: string;
  distanceFromCenter: string;
  availableRooms: number;
  totalRooms: number;
  highlights: string[];
  rooms?: RoomType[];
  events?: PropertyEvent[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  property: string;
}

export interface SpacesAPIResponse {
  success: boolean;
  data: Property[];
}

export interface SpacesPageProps {
  searchParams: Promise<{
    city?: string;
    type?: string;
    price?: string;
    sort?: string;
    search?: string;
  }>;
}

export interface SpaceDetailAPIResponse {
  success: boolean;
  data: Property | null;
}

export interface SpaceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}
