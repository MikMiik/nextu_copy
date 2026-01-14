"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, Play, X } from "lucide-react";

// All video stories data
const videoStories = [
  {
    id: 1,
    title: "Life at NextU",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "2:15",
  },
  {
    id: 2,
    title: "Community Events",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "1:45",
  },
  {
    id: 3,
    title: "My NextU Journey",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "3:20",
  },
  {
    id: 4,
    title: "Workspace Tour",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "2:10",
  },
  {
    id: 5,
    title: "Wellness & Wellness",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "2:50",
  },
  {
    id: 6,
    title: "Creative Workshop",
    thumbnail: "/placeholder.svg?height=300&width=500",
    duration: "3:05",
  },
];

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
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
        aria-label="Close video player"
      >
        <X className="h-6 w-6 text-slate-900" />
      </button>

      {/* Video container */}
      <div className="relative max-w-4xl w-full">
        <div className="relative pb-[56.25%] bg-black rounded-2xl overflow-hidden">
          {/* Placeholder for video - replace with actual video URL */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                <Play className="h-10 w-10 text-white" />
              </div>
              <p className="text-white text-lg font-semibold">{video.title}</p>
              <p className="text-white/60 text-sm">Video player placeholder</p>
              <p className="text-white/50 text-xs mt-4">
                Add your video URL here
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-white">
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

export default function VideosPage() {
  const router = useRouter();
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);

  const selectedVideo = videoStories.find(
    (video) => video.id === selectedVideoId
  );

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      {/* Section intro */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1200&width=1600"
            alt="Video stories hero photo"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/70 via-brand-secondary/50 to-brand-primary/30" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white space-y-4">
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-brand-primary text-white text-xs font-medium shadow-sm">
            <Users className="h-3 w-3 mr-1 text-white" />
            Community · NextU Living
          </p>
          <h1 className="text-brand-light text-4xl md:text-5xl font-bold mb-4">
            A Community Where You Belong — Not Just a Place to Stay
          </h1>
          <div className="text-brand-light text-lg text-left text-brand-secondary/80 max-w-4xl px-0.5">
            <p>
              NextU Living brings together creators, entrepreneurs, digital
              nomads, and young professionals who seek connection, growth, and a
              meaningful way of living.
            </p>
            <p>
              Here, community is the heart of the experience — from shared meals
              to deep conversations, from creative collaboration to personal
              transformation.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        {/* Videos Grid */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2
              className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-brand-primary"
              style={{ letterSpacing: "0.15em" }}
            >
              Watch Our Stories
            </h2>
            <p className="text-base sm:text-lg text-brand-secondary/70 max-w-5xl">
              Explore inspiring videos from our NextU community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoStories.map((video) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideoId(video.id)}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedVideoId(video.id)
                }
                className="bg-brand-light/95 rounded-2xl overflow-hidden shadow-sm border-2 border-brand-light/20 hover:shadow-md transition-all group cursor-pointer text-left"
                aria-label={`Play ${video.title} video`}
              >
                <div className="relative pb-[60%] bg-brand-light/70 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/90 group-hover:bg-brand-primary transition-colors flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-brand-secondary/70 text-brand-light text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-brand-secondary">
                    {video.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <button
              onClick={() => router.push("/community")}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to Community
            </button>
          </div>
        </section>
      </div>

      {/* Video player Modal */}
      {selectedVideo && (
        <VideoPlayerModal
          video={{
            id: selectedVideo.id,
            title: selectedVideo.title,
            thumbnail: selectedVideo.thumbnail,
          }}
          onClose={() => setSelectedVideoId(null)}
        />
      )}
    </div>
  );
}
