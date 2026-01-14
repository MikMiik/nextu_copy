"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icon-map";
import { Category } from "@/data/blog/blogType";

export default function CategoryFilter({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }

    const currentSearch = searchParams.get("search");
    if (currentSearch) {
      params.set("search", currentSearch);
    }

    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Filter className="h-5 w-5 text-brand-secondary/70" />
        <h2 className="text-xl font-semibold text-brand-secondary">
          Filter by Category
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const IconComponent = getIcon(category.iconName);
          const isActive = selectedCategory === category.id;
          return (
            <Button
              key={category.id}
              variant={isActive ? "default" : "outline"}
              className={`$${"{"}
                isActive
                  ? "bg-brand-primary text-white hover:bg-brand-primary/90"
                  : "border-brand-light/20 text-brand-secondary hover:bg-brand-light/90"
              } transition-all`}
              onClick={() => handleCategoryChange(category.id)}
            >
              <IconComponent className="h-4 w-4 mr-2" />
              {category.name}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
