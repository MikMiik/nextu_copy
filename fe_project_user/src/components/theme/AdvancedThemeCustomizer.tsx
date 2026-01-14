"use client";

import { useState } from "react";
import { Palette, RotateCcw, Download, Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAdvancedTheme, COLOR_PRESETS } from "@/hooks/useAdvancedTheme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AdvancedThemeCustomizer() {
  const { colors, updateColors, setAllColors, resetTheme, exportTheme, importTheme, isClient } = useAdvancedTheme();
  const [open, setOpen] = useState(false);
  const [importText, setImportText] = useState("");

  if (!isClient) return null;

  const handleExport = () => {
    const themeJson = exportTheme();
    navigator.clipboard.writeText(themeJson);
    alert("Theme JSON copied to clipboard!");
  };

  const handleImport = () => {
    const success = importTheme(importText);
    if (success) {
      alert("Theme imported successfully!");
      setImportText("");
    } else {
      alert("Invalid theme JSON format");
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="gap-2"
          title="Advanced Theme Customizer"
        >
          <Palette className="h-5 w-5" />
          <span className="hidden sm:inline">Design System</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-primary" />
            Advanced Theme Customizer
          </SheetTitle>
          <SheetDescription>
            Full control over your brand's visual identity
          </SheetDescription>
        </SheetHeader>

        <Tabs defaultValue="colors" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="presets">Presets</TabsTrigger>
            <TabsTrigger value="export">Export/Import</TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-6 mt-6">
            {/* Primary Color */}
            <div className="space-y-3">
              <Label htmlFor="primary-color" className="text-base font-semibold">
                Primary Color
              </Label>
              <p className="text-sm text-muted-foreground">
                Main brand color for CTAs, links, and accents
              </p>
              <div className="flex gap-3">
                <Input
                  id="primary-color"
                  type="color"
                  value={colors.primary}
                  onChange={(e) => updateColors({ primary: e.target.value })}
                  className="w-20 h-12 p-1 cursor-pointer"
                />
                <Input
                  type="text"
                  value={colors.primary}
                  onChange={(e) => updateColors({ primary: e.target.value })}
                  placeholder="#5DA7CA"
                  className="flex-1 font-mono"
                />
              </div>
              {/* Color preview swatches */}
              <div className="grid grid-cols-5 gap-2">
                <div className="bg-brand-primary h-10 rounded" title="100%" />
                <div className="bg-brand-primary/80 h-10 rounded" title="80%" />
                <div className="bg-brand-primary/60 h-10 rounded" title="60%" />
                <div className="bg-brand-primary/40 h-10 rounded" title="40%" />
                <div className="bg-brand-primary/20 h-10 rounded" title="20%" />
              </div>
            </div>

            {/* Secondary Color */}
            <div className="space-y-3">
              <Label htmlFor="secondary-color" className="text-base font-semibold">
                Secondary Color
              </Label>
              <p className="text-sm text-muted-foreground">
                Dark color for headings, text, and backgrounds
              </p>
              <div className="flex gap-3">
                <Input
                  id="secondary-color"
                  type="color"
                  value={colors.secondary}
                  onChange={(e) => updateColors({ secondary: e.target.value })}
                  className="w-20 h-12 p-1 cursor-pointer"
                />
                <Input
                  type="text"
                  value={colors.secondary}
                  onChange={(e) => updateColors({ secondary: e.target.value })}
                  placeholder="#122148"
                  className="flex-1 font-mono"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                <div className="bg-brand-secondary h-10 rounded" />
                <div className="bg-brand-secondary/80 h-10 rounded" />
                <div className="bg-brand-secondary/60 h-10 rounded" />
                <div className="bg-brand-secondary/40 h-10 rounded" />
                <div className="bg-brand-secondary/20 h-10 rounded" />
              </div>
            </div>

            {/* Light Color */}
            <div className="space-y-3">
              <Label htmlFor="light-color" className="text-base font-semibold">
                Light Color
              </Label>
              <p className="text-sm text-muted-foreground">
                Background and card colors
              </p>
              <div className="flex gap-3">
                <Input
                  id="light-color"
                  type="color"
                  value={colors.light}
                  onChange={(e) => updateColors({ light: e.target.value })}
                  className="w-20 h-12 p-1 cursor-pointer"
                />
                <Input
                  type="text"
                  value={colors.light}
                  onChange={(e) => updateColors({ light: e.target.value })}
                  placeholder="#FAFAFA"
                  className="flex-1 font-mono"
                />
              </div>
            </div>

            {/* Dark Color */}
            <div className="space-y-3">
              <Label htmlFor="dark-color" className="text-base font-semibold">
                Dark Color
              </Label>
              <p className="text-sm text-muted-foreground">
                Text color and dark mode elements
              </p>
              <div className="flex gap-3">
                <Input
                  id="dark-color"
                  type="color"
                  value={colors.dark}
                  onChange={(e) => updateColors({ dark: e.target.value })}
                  className="w-20 h-12 p-1 cursor-pointer"
                />
                <Input
                  type="text"
                  value={colors.dark}
                  onChange={(e) => updateColors({ dark: e.target.value })}
                  placeholder="#000000"
                  className="flex-1 font-mono"
                />
              </div>
            </div>

            {/* Live Preview */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <p className="text-sm font-semibold">Live Preview</p>
                <div className="space-y-2">
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">
                    Primary Button
                  </Button>
                  <Button variant="outline" className="w-full border-brand-primary text-brand-primary">
                    Outline Button
                  </Button>
                  <div className="flex gap-2">
                    <Badge className="bg-brand-primary text-white">Primary</Badge>
                    <Badge className="bg-brand-secondary text-white">Secondary</Badge>
                  </div>
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-3 rounded text-center text-sm font-medium">
                    Gradient Effect
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Presets Tab */}
          <TabsContent value="presets" className="space-y-4 mt-6">
            <p className="text-sm text-muted-foreground">
              Quick start with professionally designed color palettes
            </p>
            <div className="grid gap-3">
              {Object.entries(COLOR_PRESETS).map(([key, preset]) => (
                <Card
                  key={key}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setAllColors(preset.colors)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold">{preset.name}</p>
                      {colors.primary === preset.colors.primary && (
                        <Badge variant="secondary" className="text-xs">Active</Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <div
                        className="h-10 flex-1 rounded"
                        style={{ backgroundColor: preset.colors.primary }}
                      />
                      <div
                        className="h-10 flex-1 rounded"
                        style={{ backgroundColor: preset.colors.secondary }}
                      />
                      <div
                        className="h-10 w-10 rounded border"
                        style={{ backgroundColor: preset.colors.light }}
                      />
                      <div
                        className="h-10 w-10 rounded"
                        style={{ backgroundColor: preset.colors.dark }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Export/Import Tab */}
          <TabsContent value="export" className="space-y-6 mt-6">
            {/* Export Section */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Export Theme</Label>
              <p className="text-sm text-muted-foreground">
                Copy your current theme configuration
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleExport}
              >
                <Download className="h-4 w-4 mr-2" />
                Copy Theme JSON
              </Button>
            </div>

            {/* Import Section */}
            <div className="space-y-3">
              <Label htmlFor="import-json" className="text-base font-semibold">
                Import Theme
              </Label>
              <p className="text-sm text-muted-foreground">
                Paste a theme JSON to apply it
              </p>
              <Textarea
                id="import-json"
                placeholder='{"primary":"#5DA7CA","secondary":"#122148",...}'
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                rows={6}
                className="font-mono text-xs"
              />
              <Button
                variant="outline"
                className="w-full"
                onClick={handleImport}
                disabled={!importText}
              >
                <Upload className="h-4 w-4 mr-2" />
                Apply Imported Theme
              </Button>
            </div>

            {/* Current Theme Info */}
            <Card className="bg-muted/50">
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-semibold">Current Theme</p>
                <pre className="text-xs font-mono overflow-x-auto">
                  {exportTheme()}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Reset Button */}
        <div className="mt-6 pt-6 border-t">
          <Button
            variant="destructive"
            size="lg"
            onClick={resetTheme}
            className="w-full"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset to Default Theme
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
