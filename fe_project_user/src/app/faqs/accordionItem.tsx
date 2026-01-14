import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-brand-light/20 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-6 hover:bg-brand-light/50 transition-colors"
      >
        <h3 className="text-base font-semibold text-brand-secondary text-left">
          {title}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-brand-secondary/70 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-sm text-brand-secondary/70 space-y-2 bg-brand-light/30 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          {content}
        </div>
      )}
    </div>
  );
}
