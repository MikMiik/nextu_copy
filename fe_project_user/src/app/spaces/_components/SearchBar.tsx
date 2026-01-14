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

    router.replace(`/spaces?${params.toString()}`, { scroll: false });
  }, [debouncedSearchQuery, router, searchParams]);

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-secondary/60" />
      <Input
        placeholder="Search by name or location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 bg-brand-light border-brand-light/30"
      />
    </div>
  );
}
