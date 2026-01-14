"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterType = "city" | "type" | "price" | "sort";

interface FilterSelectProps {
  filterType: FilterType;
  placeholder: string;
  options: { value: string; label: string }[];
}

export default function FilterSelect({
  filterType,
  placeholder,
  options,
}: FilterSelectProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentValue = searchParams.get(filterType) || "all";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete(filterType);
    } else {
      params.set(filterType, value);
    }

    router.push(`/spaces?${params.toString()}`, { scroll: false });
  };

  return (
    <Select value={currentValue} onValueChange={handleChange}>
      <SelectTrigger className="w-[140px] bg-brand-light border-brand-light/30">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
