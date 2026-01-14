import {
  BookOpen,
  Lightbulb,
  Heart,
  Briefcase,
  Newspaper,
  Play,
  Headphones,
  Filter,
  type LucideIcon,
} from "lucide-react";

// Map icon names to Lucide icon components
export const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Lightbulb,
  Heart,
  Briefcase,
  Newspaper,
  Play,
  Headphones,
  Filter,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || BookOpen;
}
