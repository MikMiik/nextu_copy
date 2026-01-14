"use client";

import { useState } from "react";
import { Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PropertyActions() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="absolute top-4 right-4 z-20 flex gap-2">
      <Button
        variant="outline"
        size="icon"
        className="bg-white/90 backdrop-blur-sm border-white/60 hover:bg-white"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart
          className={`h-5 w-5 ${
            isLiked ? "fill-red-500 text-red-500" : "text-slate-600"
          }`}
        />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="bg-white/90 backdrop-blur-sm border-white/60 hover:bg-white"
      >
        <Share2 className="h-5 w-5 text-slate-600" />
      </Button>
    </div>
  );
}
