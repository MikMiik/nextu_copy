"use client";

import { useState } from "react";
import Image from "next/image";
import { Bed, Bath, Maximize, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Room {
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

interface RoomSelectorProps {
  rooms: Room[];
}

export function RoomSelector({ rooms }: RoomSelectorProps) {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return (
    <Card className="bg-white/90 border border-white/60 p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Available Rooms
      </h2>
      <div className="space-y-4">
        {rooms.map((room) => (
          <Card
            key={room.id}
            className={`border-2 transition-all ${
              selectedRoom === room.id
                ? "border-[#28c4dd] shadow-lg"
                : "border-slate-200"
            }`}
          >
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Room Image */}
                <div className="relative h-48 md:h-auto">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover rounded-l-lg"
                  />
                  {room.availability <= 2 && (
                    <Badge className="absolute top-3 left-3 bg-orange-500 text-white border-0">
                      Only {room.availability} left
                    </Badge>
                  )}
                </div>

                {/* Room Info */}
                <div className="md:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {room.name}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {room.type}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">
                        {(room.price / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-sm text-slate-600">VND/month</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-4">
                    {room.description}
                  </p>

                  {/* Room Stats */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-slate-500" />
                      <span>{room.size}m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-slate-500" />
                      <span>
                        {room.beds} bed{room.beds > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-slate-500" />
                      <span>
                        {room.bathrooms} bathroom{room.bathrooms > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Room Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs bg-slate-50"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      selectedRoom === room.id
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-[#28c4dd] hover:bg-[#1fb0cc]"
                    }`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    {selectedRoom === room.id ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Selected
                      </>
                    ) : (
                      "Select Room"
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
}
