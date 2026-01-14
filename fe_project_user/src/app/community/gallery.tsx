"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

// Photo gallery data
const photoGallery = [
  {
    id: 1,
    title: "Co-living Spaces",
    category: "Accommodation",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Co-working Spaces",
    category: "Workspace",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Dining Area",
    category: "Social",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Lounge & Relaxation",
    category: "Social",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Yoga & Meditation",
    category: "Wellness",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Creative Studio",
    category: "Creation",
    image: "/placeholder.svg?height=400&width=600",
  },
];

// Video highlight data
const videoHighlights = [
  {
    id: 1,
    title: "Room Tour: Villa Room",
    category: "Accommodation",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "2:30",
  },
  {
    id: 2,
    title: "Workspace Overview",
    category: "Workspace",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "1:45",
  },
  {
    id: 3,
    title: "Community Dinner",
    category: "Social",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "3:15",
  },
  {
    id: 4,
    title: "Wellness Activities",
    category: "Wellness",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "2:00",
  },
  {
    id: 5,
    title: "Creative Workshops",
    category: "Creation",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "2:45",
  },
  {
    id: 6,
    title: "Member Testimonials",
    category: "Community",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "3:50",
  },
];

// Photo lightbox component
function PhotoLightbox({
  photo,
  onClose,
  onPrev,
  onNext,
}: {
  readonly photo: {
    readonly id: number;
    readonly title: string;
    readonly image: string;
  };
  readonly onClose: () => void;
  readonly onPrev: () => void;
  readonly onNext: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-brand-dark/90 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 bg-brand-light/95 hover:bg-brand-light rounded-full p-2 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6 text-brand-secondary" />
      </button>

      {/* Main Content */}
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={photo.image}
            alt={photo.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/80 to-transparent p-6 text-brand-light">
          <h3 className="text-xl md:text-2xl font-bold">{photo.title}</h3>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-light/20 hover:bg-brand-light/40 rounded-full p-3 transition-colors"
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-6 w-6 text-brand-light" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-light/20 hover:bg-brand-light/40 rounded-full p-3 transition-colors"
          aria-label="Next photo"
        >
          <ChevronRight className="h-6 w-6 text-brand-light" />
        </button>
      </div>

      <button
        className="absolute inset-0 z-[-1] cursor-default"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        aria-label="Close photo lightbox"
      />
    </div>
  );
}

// Video player modal component
function VideoPlayerModal({
  video,
  onClose,
}: {
  readonly video: {
    readonly id: number;
    readonly title: string;
    readonly thumbnail: string;
  };
  readonly onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-brand-dark/90 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 bg-brand-light/95 hover:bg-brand-light rounded-full p-2 transition-colors"
        aria-label="Close video player"
      >
        <X className="h-6 w-6 text-brand-secondary" />
      </button>

      {/* Video container */}
      <div className="relative max-w-4xl w-full">
        <div className="relative pb-[56.25%] bg-black rounded-2xl overflow-hidden">
          {/* Placeholder for video - replace with actual video URL */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-secondary/90">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-brand-light/20 flex items-center justify-center mx-auto">
                <Play className="h-10 w-10 text-brand-light" />
              </div>
              <p className="text-white text-lg font-semibold">{video.title}</p>
              <p className="text-white/60 text-sm">Video player placeholder</p>
              <p className="text-white/50 text-xs mt-4">
                Add your video URL here
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-brand-light">
          <h3 className="text-xl font-bold">{video.title}</h3>
        </div>
      </div>

      <button
        className="absolute inset-0 z-[-1] cursor-default"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        aria-label="Close video player"
      />
    </div>
  );
}

function GalleryCarousel({
  title,
  items,
  type,
}: {
  readonly title: string;
  readonly items: ReadonlyArray<{
    readonly id: number;
    readonly image?: string;
    readonly thumbnail?: string;
    readonly title: string;
    readonly category: string;
    readonly duration?: string;
  }>;
  readonly type: "photo" | "video";
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    scrollToItem(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    scrollToItem(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const scrollToItem = (index: number): void => {
    if (carouselRef.current) {
      const itemWidth =
        (carouselRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
      carouselRef.current.scrollLeft = itemWidth * index;
    }
  };

  const handleLightboxPrev = () => {
    const currentIdx = items.findIndex((item) => item.id === selectedItem);
    const newIndex = currentIdx === 0 ? items.length - 1 : currentIdx - 1;
    setSelectedItem(items[newIndex].id);
  };

  const handleLightboxNext = () => {
    const currentIdx = items.findIndex((item) => item.id === selectedItem);
    const newIndex = currentIdx === items.length - 1 ? 0 : currentIdx + 1;
    setSelectedItem(items[newIndex].id);
  };

  const selectedItemData = items.find((item) => item.id === selectedItem);

  return (
    <div className="space-y-4">
      <h3
        className="text-lg md:text-2xl font-bold text-brand-primary uppercase tracking-widest"
        style={{ letterSpacing: "0.15em" }}
      >
        {title}
      </h3>

      <div className="relative">
        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="carousel-container flex gap-6 overflow-x-auto pb-2"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="carousel-item"
              style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
                flexShrink: 0,
                width: "100%",
              }}
            >
              {type === "photo" ? (
                // Photo card
                <button
                  onClick={() => setSelectedItem(item.id)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setSelectedItem(item.id)
                  }
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm border-2 border-brand-light/20 hover:shadow-lg transition-all duration-300 h-full bg-brand-light/95 text-left"
                  aria-label={`Open ${item.title} in lightbox`}
                >
                  <div className="relative h-56 bg-brand-light/70 overflow-hidden">
                    <Image
                      src={
                        item.image || "/placeholder.svg?height=300&width=500"
                      }
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 bg-brand-primary text-brand-light text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </button>
              ) : (
                // Video card
                <button
                  onClick={() => setSelectedItem(item.id)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setSelectedItem(item.id)
                  }
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm border-2 border-brand-light/20 hover:shadow-lg transition-all duration-300 h-full bg-brand-light/95 text-left"
                  aria-label={`Play ${item.title} video`}
                >
                  <div className="relative pb-[60%] bg-brand-light/70 overflow-hidden">
                    <Image
                      src={
                        item.thumbnail ||
                        "/placeholder.svg?height=300&width=500"
                      }
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-300 flex flex-col items-center justify-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-brand-primary/90 group-hover:bg-brand-primary transition-colors flex items-center justify-center">
                        <Play className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-center text-brand-light text-xs sm:text-sm font-semibold px-4 opacity-90 group-hover:opacity-100 transition-opacity">
                        <p>Connection. Creativity.</p>
                        <p>Conscious Living</p>
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-brand-secondary/70 text-brand-light text-xs px-2 py-1 rounded">
                      {item.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 bg-brand-primary text-brand-light text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none z-10">
          <button
            onClick={handlePrev}
            className="pointer-events-auto w-10 h-10 rounded-full bg-brand-light/95 shadow-md hover:bg-brand-primary hover:text-brand-light transition-all flex items-center justify-center border border-brand-light/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-brand-secondary" />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto w-10 h-10 rounded-full bg-brand-light/95 shadow-md hover:bg-brand-primary hover:text-brand-light transition-all flex items-center justify-center border border-brand-light/20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-brand-secondary" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(index);
                scrollToItem(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-brand-primary w-6"
                  : "bg-brand-light/40 w-2 hover:bg-brand-light/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      {type === "photo" && selectedItemData && "image" in selectedItemData && (
        <PhotoLightbox
          photo={{
            id: selectedItemData.id,
            title: selectedItemData.title,
            image: selectedItemData.image as string,
          }}
          onClose={() => setSelectedItem(null)}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
        />
      )}
      {type === "video" &&
        selectedItemData &&
        "thumbnail" in selectedItemData && (
          <VideoPlayerModal
            video={{
              id: selectedItemData.id,
              title: selectedItemData.title,
              thumbnail: selectedItemData.thumbnail as string,
            }}
            onClose={() => setSelectedItem(null)}
          />
        )}
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="space-y-10">
      {/* Photo row */}
      <GalleryCarousel
        title="Photo Gallery"
        items={photoGallery}
        type="photo"
      />

      {/* Video row */}
      <GalleryCarousel
        title="Video Highlights"
        items={videoHighlights}
        type="video"
      />
    </div>
  );
}
