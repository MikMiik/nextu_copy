"use client";

import { useState } from "react";
import { Palette, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeCustomizer() {
  const { colors, updateColors, resetTheme, isClient } = useTheme();
  const [open, setOpen] = useState(false);

  if (!isClient) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          title="Customize Brand Colors"
        >
          <Palette className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Theme Customizer</h4>
            <p className="text-sm text-muted-foreground">
              Customize your brand colors
            </p>
          </div>

          {/* Primary Color */}
          <div className="space-y-2">
            <Label htmlFor="primary-color">Primary Color</Label>
            <div className="flex gap-2">
              <Input
                id="primary-color"
                type="color"
                value={colors.primary}
                onChange={(e) => updateColors({ primary: e.target.value })}
                className="w-16 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={colors.primary}
                onChange={(e) => updateColors({ primary: e.target.value })}
                placeholder="#5DA7CA"
                className="flex-1"
              />
            </div>
          </div>

          {/* Secondary Color */}
          <div className="space-y-2">
            <Label htmlFor="secondary-color">Secondary Color</Label>
            <div className="flex gap-2">
              <Input
                id="secondary-color"
                type="color"
                value={colors.secondary}
                onChange={(e) => updateColors({ secondary: e.target.value })}
                className="w-16 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={colors.secondary}
                onChange={(e) => updateColors({ secondary: e.target.value })}
                placeholder="#122148"
                className="flex-1"
              />
            </div>
          </div>

          {/* Preview Card */}
          <div className="rounded-lg border p-4 space-y-3">
            <p className="text-sm font-medium">Preview</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="bg-brand-primary text-white px-3 py-2 rounded text-sm font-medium flex-1 text-center">
                  Primary
                </div>
                <div className="bg-brand-secondary text-white px-3 py-2 rounded text-sm font-medium flex-1 text-center">
                  Secondary
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="bg-brand-primary hover:bg-brand-primary/90 flex-1"
                >
                  Button
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 flex-1"
                >
                  Outline
                </Button>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={resetTheme}
            className="w-full"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset to Default
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
