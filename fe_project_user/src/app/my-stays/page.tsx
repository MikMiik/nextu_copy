"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Calendar, Clock, Eye, MapPin, Package, User, Timer, FileText } from "lucide-react";
import { membershipService, MembershipHistoryItem } from "@/api/membershipService";
import { roomService, RoomInstance } from "@/api/roomService";
import { RoomDetailModal } from "@/components/user/RoomDetailModal";
import { format, differenceInCalendarDays, isBefore } from "date-fns";

interface StayItem {
  membership: MembershipHistoryItem;
  room: RoomInstance;
}

export default function MyStaysPage() {
  const [stays, setStays] = useState<StayItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<RoomInstance | null>(null);
  const [showRoomDetail, setShowRoomDetail] = useState(false);

  useEffect(() => {
    const fetchStays = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch membership history
        const membershipHistory = await membershipService.getMembershipHistory();
        
        // Fetch room details for each membership
        const stayItems: StayItem[] = [];
        
        for (const membership of membershipHistory) {
          try {
            const room = await roomService.getRoomInstanceById(membership.roomInstanceId);
            stayItems.push({ membership, room });
          } catch (roomError) {
            console.error(`Failed to fetch room ${membership.roomInstanceId}:`, roomError);
            // Skip this room if we can't fetch its details
          }
        }
        
        setStays(stayItems);
      } catch (err) {
        console.error("Failed to fetch stays:", err);
        setError("Failed to load your stays. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStays();
  }, []);

  const handleViewRoomDetails = (room: RoomInstance) => {
    setSelectedRoom(room);
    setShowRoomDetail(true);
  };

  const handleViewRequest = (requestId: string) => {
    window.location.href = `/my-bookings/package-bookings?requestId=${requestId}`;
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM dd, yyyy");
    } catch {
      return dateString;
    }
  };

  const getExplicitPackageLabel = (packageType: string) => {
    const type = packageType?.toLowerCase();
    if (type === 'basic') return 'Basic Package';
    if (type === 'combo') return 'Combo Package';
    return packageType;
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderDaysRemaining = (expireAt: string | null) => {
    if (!expireAt) return null;
    const now = new Date();
    const expire = new Date(expireAt);
    const days = differenceInCalendarDays(expire, now);
    if (isBefore(expire, now)) {
      const overdue = Math.abs(days);
      return (
        <span className="text-red-600 font-medium text-xs">{overdue} day{overdue !== 1 ? 's' : ''} ago</span>
      );
    }
    return (
      <span className="text-blue-700 font-medium text-xs">{days} day{days !== 1 ? 's' : ''} left</span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-slate-600">Loading your stays...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Something went wrong</h3>
              <p className="text-slate-600 mb-4">{error}</p>
              <Button 
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">My Stays</h1>
              <p className="text-slate-600 text-sm">Manage your current and past accommodations</p>
            </div>
          </div>
          
          {stays.length === 0 && (
            <div className="bg-white rounded-lg border border-slate-200 p-6 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">No stays found</h3>
              <p className="text-slate-600 mb-4">You don't have any completed stays yet.</p>
              <Button 
                onClick={() => window.location.href = '/locations'}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Explore Properties
              </Button>
            </div>
          )}
        </div>

        {/* Stays List - Compact Horizontal Cards */}
        {stays.length > 0 && (
          <div className="space-y-3">
            {stays.map((stay) => (
              <Card key={stay.membership.requestId} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Left: Image - Smaller */}
                    <div className="md:w-56 w-full h-40 md:h-44 bg-slate-200 flex-shrink-0">
                      {stay.room.medias && stay.room.medias.length > 0 ? (
                        <img
                          src={stay.room.medias[0].url}
                          alt={stay.room.roomName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Building className="w-8 h-8 text-slate-400" />
                        </div>
                      )}
                    </div>

                    {/* Right: Content - Compact */}
                    <div className="flex-1 p-4">
                      {/* Top row: title only */}
                      <div className="flex items-start justify-between">
                        <div className="pr-3">
                          <h3 className="text-lg font-semibold text-slate-800">{stay.room.roomName}</h3>
                          <p className="text-slate-500 text-xs">{stay.room.roomCode}</p>
                          <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">{stay.room.propertyName}</span>
                          </div>
                        </div>
                      </div>

                      {/* Specs row - Compact */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3 text-xs">
                        <div className="flex items-center gap-1">
                          <Building className="w-3 h-3 text-slate-400" />
                          <span className="text-slate-600">{stay.room.areaInSquareMeters}m²</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 text-slate-400" />
                          <span className="text-slate-600">{stay.room.roomViewName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3 text-slate-400" />
                          <span className="text-slate-600">{stay.room.numberOfBeds} beds</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Package className="w-3 h-3 text-slate-400" />
                          <span className="text-slate-600">{stay.room.roomFloorName}</span>
                        </div>
                      </div>

                      {/* Package + Dates - Compact */}
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="bg-slate-50 rounded-md p-2">
                          <div className="flex items-center gap-1 mb-0.5">
                            <Package className="w-3 h-3 text-blue-600" />
                            <span className="text-xs font-medium text-slate-800">
                              {getExplicitPackageLabel(stay.membership.packageType)}
                            </span>
                          </div>
                          {stay.membership.requestedPackageName && (
                            <div className="text-xs text-slate-600">{stay.membership.requestedPackageName}</div>
                          )}
                        </div>

                        <div className="bg-slate-50 rounded-md p-2">
                          <div className="flex items-center gap-1 text-xs text-slate-600">
                            <Calendar className="w-3 h-3" />
                            <span>Start: {formatDate(stay.membership.startDate)}</span>
                          </div>
                          {stay.membership.expireAt && (
                            <div className="flex items-center gap-1 text-xs text-slate-600 mt-0.5">
                              <Clock className="w-3 h-3" />
                              <span>Expire: {formatDate(stay.membership.expireAt)}</span>
                            </div>
                          )}
                        </div>

                        <div className="bg-slate-50 rounded-md p-2 flex items-center gap-1">
                          <Timer className="w-3 h-3 text-blue-600" />
                          {renderDaysRemaining(stay.membership.expireAt)}
                        </div>
                      </div>

                      {/* Actions - Compact */}
                      <div className="mt-3 flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs px-3"
                          onClick={() => handleViewRoomDetails(stay.room)}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs px-3"
                          onClick={() => handleViewRequest(stay.membership.requestId)}
                        >
                          <FileText className="w-3 h-3 mr-1" />
                          View Request
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Room Detail Modal */}
      <RoomDetailModal
        open={showRoomDetail}
        onOpenChange={setShowRoomDetail}
        room={selectedRoom}
      />
    </div>
  );
} 