"use client";
import { useAccount } from "@/components/account/AccountContext";
import { useState, useMemo, useEffect } from "react";
import api from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

const fetchProfile = async () => {
  const res = await api.get("/api/user/profiles/profileme");
  return res.data;
};

export default function InterestsPage() {
  const data = useAccount();
  const setAccount = data.setAccount;
  const [allInterests, setAllInterests] = useState<
    { id: string; name: string }[]
  >([]);
  const [selected, setSelected] = useState<string[]>([]); // store selected ids
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchInterests() {
      try {
        const res = await api.get("/api/user/interests");
        if (Array.isArray(res.data)) {
          setAllInterests(
            res.data.map((item: any) => ({ id: item.id, name: item.name }))
          );
        }
      } catch (err) {
        setAllInterests([]);
      }
    }
    fetchInterests();
  }, []);

  useEffect(() => {
    // Convert data.interests to array of ids for selected state
    let initialSelected: string[] = [];
    if (Array.isArray(data.interests)) {
      // If backend returns array of names, map to ids
      initialSelected = allInterests
        .filter((i) => data.interests.includes(i.name))
        .map((i) => i.id);
    } else if (typeof data.interests === "string" && data.interests) {
      const names = data.interests
        .split(",")
        .map((s: string) => s.trim())
        .filter(Boolean);
      initialSelected = allInterests
        .filter((i) => names.includes(i.name))
        .map((i) => i.id);
    }
    setSelected(initialSelected);
  }, [data.interests, allInterests]);

  const filtered = useMemo(
    () =>
      allInterests.filter((tag) =>
        tag.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, allInterests]
  );

  const toggleTag = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await api.patch("/api/user/profiles/updateprofile", {
        fullName: data.fullName || "",
        phone: data.phone || "",
        gender: data.gender || "",
        dob: data.dob || "",
        avatarUrl: data.avatarUrl || "",
        socialLinks: data.socialLinks || "",
        address: data.address || "",
        skills: data.skills || "",
        personalityTraits: data.personalityTraits || "",
        introduction: data.introduction || "",
        cvUrl: data.cvUrl || "",
        note: data.note || "",
        interestIds: selected,
      });
      if (setAccount) setAccount(res.data.data);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        router.push("/account/profession-skills");
      }, 2000);
    } catch {
      setMessage("Error saving. Please try again.");
    }
    setSaving(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Interests</h1>
      </div>
      <div className="bg-brand-light rounded-lg shadow p-8 max-w-3xl">
        <input
          className="w-full border border-brand-secondary/10 rounded px-3 py-2 mb-6 bg-transparent text-brand-secondary"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-2 mb-6">
          {filtered.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => toggleTag(tag.id)}
              className={`px-3 py-1 rounded border text-sm transition-all ${
                selected.includes(tag.id)
                  ? "bg-brand-primary/20 border-brand-primary text-brand-primary font-semibold"
                  : "bg-brand-light border-brand-primary/10 text-brand-secondary hover:bg-brand-primary/5"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
        <button
          className="px-6 py-2 bg-brand-secondary text-white rounded disabled:opacity-50"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "Saving..." : "Continue"}
        </button>
        <Dialog open={showSuccess}>
          <DialogContent className="bg-brand-primary/10 text-center">
            <div className="flex flex-col items-center justify-center py-2">
              <CheckCircle2 className="text-brand-primary mb-2" size={48} />
              <DialogTitle className="text-brand-primary text-2xl font-bold">
                Profile updated!
              </DialogTitle>
              <DialogDescription className="text-brand-primary mt-2">
                Your information has been saved successfully.
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
