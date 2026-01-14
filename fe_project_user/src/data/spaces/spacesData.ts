import {
  Users,
  Wifi,
  Coffee,
  Dumbbell,
  Utensils,
  Building2,
  Home,
} from "lucide-react";
import { Property, Testimonial } from "@/data/spaces/spacesType";

export const properties: Property[] = [
  {
    id: "1",
    name: "Hanoi Garden Villa",
    slug: "hanoi-garden-villa",
    location: "Tay Ho, Hanoi",
    city: "hanoi",
    type: "villa",
    price: 10000000,
    priceRange: "premium",
    rating: 4.9,
    reviews: 128,
    capacity: 20,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    featured: true,
    amenities: ["WiFi", "Gym", "Pool", "Cafe", "Garden", "Workspace"],
    description:
      "Luxurious villa in the heart of Hanoi's expat district. Perfect for professionals seeking a balanced lifestyle with modern amenities and serene garden spaces.",
    distanceFromCenter: "5km",
    availableRooms: 3,
    totalRooms: 12,
    highlights: [
      "Rooftop terrace",
      "Co-working space",
      "Weekly events",
      "Garden oasis",
    ],
    rooms: [
      {
        id: "1",
        name: "Deluxe Private Room",
        type: "Private",
        price: 10000000,
        size: 25,
        beds: 1,
        bathrooms: 1,
        availability: 2,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "King bed",
          "Private bathroom",
          "Work desk",
          "Balcony",
          "Air conditioning",
        ],
        description:
          "Spacious private room with all modern amenities and stunning views.",
      },
      {
        id: "2",
        name: "Shared Studio",
        type: "Shared",
        price: 6000000,
        size: 20,
        beds: 2,
        bathrooms: 1,
        availability: 3,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "Twin beds",
          "Shared bathroom",
          "Common workspace",
          "Lockers",
        ],
        description:
          "Comfortable shared accommodation perfect for budget-conscious travelers.",
      },
      {
        id: "3",
        name: "Premium Suite",
        type: "Suite",
        price: 13000000,
        size: 35,
        beds: 1,
        bathrooms: 1,
        availability: 1,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "King bed",
          "En-suite bathroom",
          "Living area",
          "Kitchenette",
          "Premium view",
        ],
        description:
          "Luxury suite with separate living area and premium amenities.",
      },
    ],
    events: [
      {
        id: "1",
        title: "Weekly Community Dinner",
        date: "2026-01-15",
        time: "19:00",
        category: "Social",
        description:
          "Join us for our weekly community dinner where residents gather to share stories and build connections.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 15,
      },
      {
        id: "2",
        title: "Morning Yoga & Meditation",
        date: "2026-01-16",
        time: "07:00",
        category: "Wellness",
        description:
          "Start your day with mindful movement and meditation on our rooftop terrace.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 12,
      },
      {
        id: "3",
        title: "Entrepreneurship Workshop",
        date: "2026-01-18",
        time: "18:00",
        category: "Learning",
        description:
          "Learn from successful founders about building and scaling your startup in Vietnam.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 20,
      },
    ],
  },
  {
    id: "2",
    name: "Saigon Creative Hub",
    slug: "saigon-creative-hub",
    location: "District 1, Ho Chi Minh City",
    city: "hochiminh",
    type: "studio",
    price: 8000000,
    priceRange: "mid",
    rating: 4.8,
    reviews: 95,
    capacity: 15,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    featured: true,
    amenities: ["WiFi", "Workspace", "Cafe", "Lounge", "Events"],
    description:
      "Modern studios in the bustling heart of Saigon. Ideal for digital nomads and entrepreneurs who thrive in vibrant urban environments.",
    distanceFromCenter: "1km",
    availableRooms: 5,
    totalRooms: 10,
    highlights: [
      "City center location",
      "Creative community",
      "24/7 access",
      "Networking events",
    ],
    rooms: [
      {
        id: "1",
        name: "Creative Studio",
        type: "Private",
        price: 8000000,
        size: 22,
        beds: 1,
        bathrooms: 1,
        availability: 3,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "Queen bed",
          "Private bathroom",
          "Standing desk",
          "City view",
        ],
        description:
          "Modern studio designed for creative professionals in the heart of the city.",
      },
      {
        id: "2",
        name: "Shared Co-working Room",
        type: "Shared",
        price: 5000000,
        size: 18,
        beds: 2,
        bathrooms: 1,
        availability: 5,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "Bunk beds",
          "Shared bathroom",
          "Co-working desk",
          "Lockers",
        ],
        description:
          "Affordable shared space perfect for networking and collaboration.",
      },
    ],
    events: [
      {
        id: "1",
        title: "Startup Pitch Night",
        date: "2026-01-17",
        time: "18:30",
        category: "Business",
        description:
          "Practice your pitch and get feedback from experienced entrepreneurs.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 25,
      },
      {
        id: "2",
        title: "Creative Workshop",
        date: "2026-01-19",
        time: "14:00",
        category: "Learning",
        description: "Learn new creative skills from industry professionals.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 18,
      },
    ],
  },
  {
    id: "3",
    name: "Danang Beach House",
    slug: "danang-beach-house",
    location: "My Khe Beach, Da Nang",
    city: "danang",
    type: "shared",
    price: 6000000,
    priceRange: "budget",
    rating: 4.7,
    reviews: 67,
    capacity: 12,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    featured: false,
    amenities: ["WiFi", "Beach access", "Surfboards", "Yoga deck", "Kitchen"],
    description:
      "Beachfront shared living space perfect for remote workers who love the ocean. Wake up to stunning sea views and join our active wellness community.",
    distanceFromCenter: "3km",
    availableRooms: 4,
    totalRooms: 8,
    highlights: [
      "Beach access",
      "Surf community",
      "Wellness focused",
      "Sunset yoga",
    ],
    rooms: [
      {
        id: "1",
        name: "Ocean View Room",
        type: "Private",
        price: 6000000,
        size: 20,
        beds: 1,
        bathrooms: 1,
        availability: 2,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "Double bed",
          "Private bathroom",
          "Ocean view",
          "Beach access",
        ],
        description: "Wake up to stunning ocean views every morning.",
      },
      {
        id: "2",
        name: "Beach Bunk Room",
        type: "Shared",
        price: 3600000,
        size: 16,
        beds: 4,
        bathrooms: 1,
        availability: 4,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "Bunk beds",
          "Shared bathroom",
          "Beach gear storage",
          "Reading lights",
        ],
        description: "Budget-friendly shared room steps from the beach.",
      },
    ],
    events: [
      {
        id: "1",
        title: "Sunrise Surf Session",
        date: "2026-01-16",
        time: "06:00",
        category: "Sports",
        description:
          "Join our surf instructor for an energizing morning session.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 10,
      },
      {
        id: "2",
        title: "Beach Yoga",
        date: "2026-01-17",
        time: "17:30",
        category: "Wellness",
        description: "Sunset yoga on the beach with ocean sounds.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 15,
      },
    ],
  },
  {
    id: "4",
    name: "Hanoi Heritage House",
    slug: "hanoi-heritage-house",
    location: "Old Quarter, Hanoi",
    city: "hanoi",
    type: "studio",
    price: 7500000,
    priceRange: "mid",
    rating: 4.6,
    reviews: 54,
    capacity: 10,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    featured: false,
    amenities: ["WiFi", "Cultural events", "Cafe", "Terrace", "Library"],
    description:
      "Traditional Vietnamese architecture meets modern living. Immerse yourself in Hanoi's rich culture while enjoying contemporary comforts.",
    distanceFromCenter: "2km",
    availableRooms: 2,
    totalRooms: 6,
    highlights: [
      "Cultural immersion",
      "Historic district",
      "Local experiences",
      "Authentic Vietnam",
    ],
    rooms: [
      {
        id: "1",
        name: "Heritage Room",
        type: "Private",
        price: 7500000,
        size: 18,
        beds: 1,
        bathrooms: 1,
        availability: 2,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "Traditional decor",
          "Private bathroom",
          "Writing desk",
          "Street view",
        ],
        description:
          "Experience traditional Vietnamese living in a beautifully restored room.",
      },
    ],
    events: [
      {
        id: "1",
        title: "Vietnamese Cooking Class",
        date: "2026-01-20",
        time: "10:00",
        category: "Cultural",
        description:
          "Learn to cook authentic Vietnamese dishes with local chefs.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 12,
      },
      {
        id: "2",
        title: "Old Quarter Walking Tour",
        date: "2026-01-21",
        time: "08:00",
        category: "Cultural",
        description: "Explore the historic streets and hidden gems of Hanoi.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 8,
      },
    ],
  },
  {
    id: "5",
    name: "Mekong Farm Retreat",
    slug: "mekong-farm-retreat",
    location: "Can Tho, Mekong Delta",
    city: "hochiminh",
    type: "farm",
    price: 5500000,
    priceRange: "budget",
    rating: 4.8,
    reviews: 42,
    capacity: 8,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    featured: false,
    amenities: [
      "WiFi",
      "Organic farm",
      "River view",
      "Bike rental",
      "Cooking classes",
    ],
    description:
      "Escape to rural Vietnam while staying connected. Experience farm-to-table living, sustainable practices, and peaceful riverside work environment.",
    distanceFromCenter: "30km",
    availableRooms: 3,
    totalRooms: 5,
    highlights: [
      "Farm-to-table",
      "Eco-friendly",
      "River activities",
      "Nature retreat",
    ],
    rooms: [
      {
        id: "1",
        name: "Farm View Room",
        type: "Private",
        price: 5500000,
        size: 16,
        beds: 1,
        bathrooms: 1,
        availability: 3,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "Double bed",
          "Private bathroom",
          "Farm view",
          "Natural ventilation",
        ],
        description:
          "Peaceful room overlooking organic farmlands and rice paddies.",
      },
      {
        id: "2",
        name: "Shared Farm House",
        type: "Shared",
        price: 3300000,
        size: 14,
        beds: 3,
        bathrooms: 1,
        availability: 2,
        image: "/placeholder.svg?height=400&width=600",
        features: [
          "Bunk beds",
          "Shared bathroom",
          "Mosquito nets",
          "Garden access",
        ],
        description:
          "Rustic shared accommodation in the heart of farm country.",
      },
    ],
    events: [
      {
        id: "1",
        title: "Farm Work Experience",
        date: "2026-01-18",
        time: "06:30",
        category: "Learning",
        description:
          "Join the morning harvest and learn about sustainable farming.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 8,
      },
      {
        id: "2",
        title: "River Boat Tour",
        date: "2026-01-19",
        time: "15:00",
        category: "Adventure",
        description: "Explore the Mekong Delta by traditional boat.",
        image: "/placeholder.svg?height=300&width=400",
        attendees: 10,
      },
    ],
  },
  {
    id: "6",
    name: "District 2 Modern Loft",
    slug: "district-2-modern-loft",
    location: "Thao Dien, District 2",
    city: "hochiminh",
    type: "villa",
    price: 9500000,
    priceRange: "premium",
    rating: 4.9,
    reviews: 89,
    capacity: 18,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    featured: true,
    amenities: ["WiFi", "Pool", "Gym", "Cafe", "Cinema", "Workspace"],
    description:
      "Upscale villa in Saigon's trendy Thao Dien. Features state-of-the-art amenities, international community, and proximity to top restaurants and cafes.",
    distanceFromCenter: "7km",
    availableRooms: 4,
    totalRooms: 10,
    highlights: [
      "Luxury amenities",
      "Expat community",
      "Premium location",
      "Full facilities",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Emily Zhang",
    role: "Software Engineer",
    content:
      "Living at Hanoi Garden Villa transformed my work-life balance. The community is incredibly supportive and the amenities are world-class.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    property: "Hanoi Garden Villa",
  },
  {
    name: "Marco Silva",
    role: "Digital Nomad",
    content:
      "Saigon Creative Hub is perfect for remote work. Fast WiFi, great workspace, and amazing networking opportunities with fellow entrepreneurs.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    property: "Saigon Creative Hub",
  },
  {
    name: "Sophie Martin",
    role: "Content Creator",
    content:
      "Danang Beach House offers the perfect blend of productivity and relaxation. Morning yoga, afternoon work sessions, evening surf - paradise!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    property: "Danang Beach House",
  },
  {
    name: "Martin Lee",
    role: "New Creator",
    content:
      "Danang Beach House offers the perfect blend of productivity and relaxation. Morning yoga, afternoon work sessions, evening surf - paradise!",
    rating: 3,
    avatar: "/placeholder.svg?height=60&width=60",
    property: "Danang House",
  },
  {
    name: "Lucas Nguyen",
    role: "Startup Founder",
    content:
      "Hanoi Innovation Space gave me everything I needed to focus and grow my startup. Quiet rooms, strong internet, and a very inspiring community.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    property: "Hanoi Innovation Space",
  },
  {
    name: "Emily Carter",
    role: "UX Designer",
    content:
      "Hoi An Riverside Hub is such a refreshing place to work. Beautiful views, calm atmosphere, and the staff is incredibly supportive.",
    rating: 4,
    avatar: "/placeholder.svg?height=60&width=60",
    property: "Hoi An Riverside Hub",
  },
  {
    name: "David Tran",
    role: "Freelance Developer",
    content:
      "Saigon Tech Loft helped me stay productive while meeting many talented developers. The vibe is modern and very motivating.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    property: "Saigon Tech Loft",
  },
];

export const amenityIcons: { [key: string]: any } = {
  WiFi: Wifi,
  Gym: Dumbbell,
  Pool: Users,
  Cafe: Coffee,
  Kitchen: Utensils,
  Workspace: Building2,
  Garden: Home,
};

export function filterSpaces(
  properties: Property[],
  cityFilter: string,
  typeFilter: string,
  priceFilter: string,
  sortFilter: string,
  searchQuery: string
): Property[] {
  let filtered = properties.filter((property) => {
    const matchesSearch =
      searchQuery === "" ||
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      cityFilter === "all" || property.city === cityFilter;
    const matchesType = typeFilter === "all" || property.type === typeFilter;
    const matchesPrice =
      priceFilter === "all" || property.priceRange === priceFilter;
    return matchesSearch && matchesLocation && matchesType && matchesPrice;
  });

  filtered.sort((a, b) => {
    if (sortFilter === "rating") return b.rating - a.rating;
    if (sortFilter === "price") return a.price - b.price;
    if (sortFilter === "popular") return b.reviews - a.reviews;
    return 0;
  });

  return filtered;
}
