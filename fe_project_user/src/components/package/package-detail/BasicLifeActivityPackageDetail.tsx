import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, UserCheck, Star, MapPin, Building, Calendar, Clock } from "lucide-react";
import api from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";
import { isLogged } from "@/utils/auth";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useAuth } from "@/components/auth-context";
// Markdown rendering
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

export default function BasicLifeActivityPackageDetail({ id, router }: { id: string, router: any }) {
  const [pkg, setPkg] = useState<any>(null);
  const [entitlementRules, setEntitlementRules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPaying, setIsPaying] = useState(false);
  const { isLoggedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Fetch package info
        const pkgRes = await api.get(`/api/membership/BasicPlans/${id}`);
        const pkgData = pkgRes.data || pkgRes;
        setPkg(pkgData);

        // Fetch entitlement rules for each entitlement
        if (pkgData.entitlements && pkgData.entitlements.length > 0) {
          const entitlementPromises = pkgData.entitlements.map(async (entitlement: any) => {
            try {
              const ruleRes = await api.get(`/api/membership/EntitlementRule/${entitlement.entitlementId}`);
              return ruleRes.data || ruleRes;
            } catch (err) {
              console.error('Failed to fetch entitlement rule:', err);
              return null;
            }
          });
          
          const rules = await Promise.all(entitlementPromises);
          setEntitlementRules(rules.filter(rule => rule !== null));
        }
      } catch (err) {
        setPkg(null);
        setEntitlementRules([]);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchData();
  }, [id]);

  const checkProfileComplete = async () => {
    try {
      const res = await api.get("/api/user/profiles/profileme");
      const data = res.data || res;
      // Check required fields
      if (!data.fullName || !data.phone || !data.dob || !data.gender || !data.address) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  };

  const handleBuyNow = async () => {
    if (!pkg) return;
    setIsPaying(true);
    if (!isLoggedIn) {
      setShowAuthModal(true);
      setIsPaying(false);
      return;
    }
    // Check profile completion
    const isProfileComplete = await checkProfileComplete();
    if (!isProfileComplete) {
      setShowProfileModal(true);
      setIsPaying(false);
      return;
    }
    try {
      const res = await api.post("/api/user/memberships/requestMember", {
        packageId: pkg.id,
        packageType: "basic",
        selectedStartDate: new Date().toISOString(),
        requireBooking: false,
        messageToStaff: "",
        redirectUrl: window.location.origin + "/profile"
      });
      if (res.data && res.data.success && res.data.data && res.data.data.paymentUrl && res.data.data.paymentUrl.redirectUrl) {
        window.location.href = res.data.data.paymentUrl.redirectUrl;
      } else {
        window.location.href = "/profile";
      }
    } catch (err: any) {
      const errorMsg = err?.response?.data?.message || "You have already submitted or purchased this package. Please check my booking.";
      setErrorMessage(errorMsg);
      setShowErrorModal(true);
    } finally {
      setIsPaying(false);
    }
  };

  // Function to normalize escaped strings from API
  const normalizeDescription = (text: string): string => {
    if (!text) return '';
    
    return text
      // Convert escaped newlines to actual newlines
      .replace(/\\n/g, '\n')
      // Convert escaped quotes
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      // Convert escaped backslashes
      .replace(/\\\\/g, '\\')
      // Convert Unicode escape sequences to actual characters
      .replace(/\\u([0-9a-fA-F]{4})/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)))
      // Convert other common escape sequences
      .replace(/\\t/g, '\t')
      .replace(/\\r/g, '\r');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-lg">Loading data...</div>;
  if (!pkg) return <div className="min-h-screen flex items-center justify-center text-lg text-red-500">Package not found.</div>;

  const planDurations = pkg.planDurations || [];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#e8f9fc] via-[#f0fbfd] to-[#cce9fa]">
      {showAuthModal && (
        <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
          <DialogContent className="max-w-sm p-8 text-center flex flex-col items-center">
            <AlertCircle className="text-blue-500 mb-3" size={48} />
            <DialogTitle className="text-2xl font-bold mb-2">Login Required</DialogTitle>
            <DialogDescription className="mb-4 text-base text-slate-600">Please log in to use this feature and continue with the package purchase process.</DialogDescription>
            <Button className="mt-2 w-full py-3 text-base font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition" onClick={() => { setShowAuthModal(false); router.push("/login"); }}>Login</Button>
          </DialogContent>
        </Dialog>
      )}
      {showProfileModal && (
        <Dialog open={showProfileModal} onOpenChange={setShowProfileModal}>
          <DialogContent className="max-w-sm p-8 text-center flex flex-col items-center">
            <UserCheck className="text-green-500 mb-3" size={48} />
            <DialogTitle className="text-2xl font-bold mb-2">Complete Profile</DialogTitle>
            <DialogDescription className="mb-4 text-base text-slate-600">You need to complete your personal profile (full name, phone number, date of birth, gender, address) to continue purchasing the package.</DialogDescription>
            <Button className="mt-2 w-full py-3 text-base font-semibold rounded-full bg-green-600 hover:bg-green-700 transition" onClick={() => { setShowProfileModal(false); router.push("/account/about-me"); }}>Complete Profile</Button>
          </DialogContent>
        </Dialog>
      )}
      {showErrorModal && (
        <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
          <DialogContent className="max-w-sm p-8 text-center flex flex-col items-center">
            <AlertCircle className="text-red-500 mb-3" size={48} />
            <DialogTitle className="text-2xl font-bold mb-2">Purchase Failed</DialogTitle>
            <DialogDescription className="mb-4 text-base text-slate-600">{errorMessage}</DialogDescription>
            <div className="flex gap-2 w-full">
              <Button variant="outline" className="flex-1 py-3 text-base font-semibold rounded-full" onClick={() => setShowErrorModal(false)}>Close</Button>
              <Button className="flex-1 py-3 text-base font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition" onClick={() => { setShowErrorModal(false); router.push("/my-bookings"); }}>Check My Booking</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          className="mb-6 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold shadow hover:bg-slate-100 transition"
          onClick={() => router.push('/packages')}
        >
          ← Back to Packages
        </button>
        
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">{pkg.name}</h1>
          <div className="flex items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.8</span>
              <span className="text-sm">(24 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{pkg.propertyName || "City Center"}</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Package Details */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow border border-slate-200 p-8">
              <CardContent>
                {/* Package Details Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6">Package Details</h3>
                  <div className="flex items-stretch">
                    {/* Left Column - 3 fields */}
                    <div className="flex-1 pr-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <Building className="w-5 h-5 text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-slate-500 font-medium">Service Type</div>
                            <div className="text-slate-800 font-semibold">{pkg.nextUServiceName}</div>
                          </div>
                        </div>
                        
                        {planDurations.length > 0 && (
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-slate-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-slate-500 font-medium">Duration</div>
                              <div className="text-slate-800 font-semibold">{planDurations[0].planDurationDescription}</div>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <Star className="w-5 h-5 text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-slate-500 font-medium">Category</div>
                            <div className="text-slate-800 font-semibold">{pkg.planCategoryName}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center Divider */}
                    <div className="w-px bg-slate-200 mx-4"></div>
                    
                    {/* Right Column - 2 fields */}
                    <div className="flex-1 pl-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <span className="text-slate-600 font-bold text-lg">₫</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-slate-500 font-medium">Base Price</div>
                            <div className="text-slate-800 font-semibold">₫{pkg.price?.toLocaleString()}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <span className="text-slate-600 font-bold text-lg">#</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-slate-500 font-medium">Level</div>
                            <div className="text-slate-800 font-semibold">{pkg.planLevelName}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Divider */}
                <hr className="border-slate-200 mb-8" />
                
                {/* Description Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Description</h3>
                  <div className="prose prose-sm max-w-none text-slate-600 leading-relaxed">
                    {pkg.description ? (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeSanitize]}
                      >
                        {normalizeDescription(pkg.description)}
                      </ReactMarkdown>
                    ) : (
                      <p className="whitespace-pre-line">No description available</p>
                    )}
                  </div>
                </div>
                
                {/* Divider */}
                <hr className="border-slate-200 mb-8" />
                
                {/* Entitlements Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Service Entitlements</h3>
                  {entitlementRules.length === 0 ? (
                    <div className="text-slate-500">No entitlements available.</div>
                  ) : (
                    <div className="space-y-6">
                      {entitlementRules.map((rule: any, idx: number) => (
                        <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-lg font-semibold text-slate-800 mb-2">{rule.entittlementRuleName}</h4>
                              <p className="text-slate-600 text-sm">{rule.note}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-700">₫{rule.price?.toLocaleString()}</div>
                              <div className="text-sm text-slate-500">per month</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-slate-700">
                                <span className="font-medium">{rule.creditAmount}</span> credits
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-blue-500" />
                              <span className="text-slate-700">
                                <span className="text-slate-700">
                                  <span className="font-medium">{rule.limitPerPeriod}</span> uses per week
                                </span>
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-purple-500" />
                              <span className="text-slate-700">
                                <span className="font-medium">{rule.period === 0 ? 'Monthly' : `${rule.period} days`}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                

              </CardContent>
            </Card>
          </div>

          {/* Right Column: Purchase Box */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 rounded-2xl border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-slate-800 mb-2">Package Summary</div>
                  <div className="bg-green-100 text-green-700 rounded-lg py-2 px-4 mb-4 font-semibold">Book now - Pay at the property</div>
                </div>

                {/* Package Name */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Package</h4>
                  <div className="p-4 bg-white rounded-lg border border-slate-200 text-slate-700 font-medium">
                    {pkg.name}
                  </div>
                </div>

                {/* Plan Duration Selection */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Plan Duration</h4>
                  {planDurations.length > 0 && (
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-slate-600" />
                        <span className="text-slate-700 font-medium">{planDurations[0].planDurationDescription}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Entitlements (names) */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Service Entitlements</h4>
                  {entitlementRules.length === 0 ? (
                    <div className="text-slate-500 text-sm">No entitlements available.</div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {entitlementRules.map((rule: any, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-700"
                        >
                          {rule.entittlementRuleName}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Display */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-700 mb-2">₫{pkg.price?.toLocaleString()}</div>
                  <div className="text-slate-600"> {planDurations[0]?.planDurationDescription || 'month'}</div>
                </div>

                {/* Purchase Button */}
                <Button 
                  className="w-full rounded-full bg-black text-white font-bold py-3 text-lg hover:bg-slate-800 transition disabled:opacity-60" 
                  onClick={handleBuyNow} 
                  disabled={isPaying}
                >
                  {isPaying ? "Processing..." : "Buy Now"}
                </Button>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="text-sm text-slate-600 text-center">
                    <p>• No booking fees</p>
                    <p>• Flexible cancellation</p>
                    <p>• Instant confirmation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 