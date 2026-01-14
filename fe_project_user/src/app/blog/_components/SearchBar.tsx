"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/use-debounce";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("search") || ""
  );

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";

    if (debouncedSearchQuery === currentSearch) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearchQuery) {
      params.set("search", debouncedSearchQuery);
    } else {
      params.delete("search");
    }

    router.replace(`/blog?${params.toString()}`, { scroll: false });
  }, [debouncedSearchQuery, router, searchParams]);

  return (
    <div className="pt-4 mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-secondary/60 z-10" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 py-6 bg-brand-light/95 backdrop-blur-sm border border-brand-light/20 text-brand-secondary placeholder:text-brand-secondary/50 text-base"
        />
      </div>
    </div>
  );
}
