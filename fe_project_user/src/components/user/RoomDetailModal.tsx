import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Building, Eye, Maximize, Bed } from "lucide-react";
import { RoomInstance } from "@/api/roomService";

interface RoomDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  room: RoomInstance | null;
}

export function RoomDetailModal({ open, onOpenChange, room }: RoomDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogTitle className="text-xl font-semibold flex items-center gap-2">
          <Building className="h-5 w-5" />
          Room Information
        </DialogTitle>
        
        <div className="space-y-6">
          <div className="bg-white border rounded-lg p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border bg-slate-100">
                  {room.medias && room.medias.length > 0 ? (
                    <>
                      <img 
                        src={room.medias[currentImageIndex].url} 
                        alt={room.medias[currentImageIndex].description || 'Room image'}
                        className="w-full h-full object-cover"
                      />
                      {/* Image Counter */}
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {currentImageIndex + 1}/{room.medias.length}
                      </div>
                      {/* Navigation Arrows */}
                      {room.medias.length > 1 && (
                        <>
                          <button 
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow-lg transition-all"
                            onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? room.medias.length - 1 : prev - 1))}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button 
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow-lg transition-all"
                            onClick={() => setCurrentImageIndex((prev) => (prev === room.medias.length - 1 ? 0 : prev + 1))}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Thumbnail Navigation */}
                {room.medias && room.medias.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {room.medias.slice(0, 8).map((media: any, idx: number) => (
                      <div 
                        key={idx} 
                        className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                          currentImageIndex === idx ? 'border-blue-500' : 'border-transparent hover:border-blue-300'
                        }`}
                        onClick={() => setCurrentImageIndex(idx)}
                      >
                        <img 
                          src={media.url} 
                          alt={media.description || `Room thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {/* Show "+.." indicator if there are more than 8 images */}
                    {room.medias.length > 8 && (
                      <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                        <span className="text-gray-500 text-sm font-medium">+{room.medias.length - 8}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right: Room Details */}
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  {/* Description Section */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-slate-800 mb-3">Description</h5>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700">
                      {room.descriptionDetails || 'No description available'}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-200 mb-4"></div>

                  {/* Room Specifications Section */}
                  <div>
                    <h5 className="font-semibold text-slate-800 mb-3">Room Specifications</h5>
                    
                    {/* Room Specifications in 4 rows with 2 columns each */}
                    <div className="space-y-3 text-sm">
                      {/* Row 1: Room Code | Room Type */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between items-center gap-3">
                          <span className="text-slate-500">Room Code:</span>
                          <span className="font-medium">{room.roomCode}</span>
                        </div>
                        <div className="flex justify-between items-center gap-3">
                          <span className="text-slate-500">Room Type:</span>
                          <span 
                            className="font-medium text-right truncate min-w-0 max-w-[70%] cursor-pointer hover:text-blue-600 transition-colors" 
                            title={`Click to see full: ${room.roomTypeName}`}
                            onClick={() => {
                              if (room.roomTypeName.length > 15) {
                                alert(`Full Room Type: ${room.roomTypeName}`);
                              }
                            }}
                          >
                            {room.roomTypeName}
                          </span>
                        </div>
                      </div>

                      {/* Row 2: Area | View */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Area:</span>
                          <span className="font-medium">{room.areaInSquareMeters} m²</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">View:</span>
                          <span className="font-medium">{room.roomViewName}</span>
                        </div>
                      </div>

                      {/* Row 3: Size | Floor */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Size:</span>
                          <span className="font-medium">{room.roomSizeName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Floor:</span>
                          <span className="font-medium">{room.roomFloorName}</span>
                        </div>
                      </div>

                      {/* Row 4: Bed Type | Number of Beds */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Bed Type:</span>
                          <span className="font-medium">{room.bedTypeName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Number of Beds:</span>
                          <span className="font-medium">{room.numberOfBeds}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
