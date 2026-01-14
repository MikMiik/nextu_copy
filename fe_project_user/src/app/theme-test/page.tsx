"use client";

import ThemeCustomizer from "@/components/theme/ThemeCustomizer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ThemeTestPage() {
  return (
    <div className="min-h-screen bg-brand-light p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header with Theme Customizer */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-brand-secondary">
              Theme Customizer Test
            </h1>
            <p className="text-brand-secondary/80 mt-2">
              Click the palette icon to customize brand colors
            </p>
          </div>
          <ThemeCustomizer />
        </div>

        {/* Test Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Buttons Test */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">Buttons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">
                Primary Button
              </Button>
              <Button
                variant="outline"
                className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary/10"
              >
                Outline Button
              </Button>
              <Button
                variant="ghost"
                className="w-full text-brand-secondary hover:bg-brand-secondary/10"
              >
                Ghost Button
              </Button>
            </CardContent>
          </Card>

          {/* Badges Test */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className="bg-brand-primary text-white">Primary</Badge>
              <Badge className="bg-brand-secondary text-white">Secondary</Badge>
              <Badge className="bg-brand-primary/20 text-brand-primary">
                Primary Light
              </Badge>
              <Badge className="bg-brand-secondary/20 text-brand-secondary">
                Secondary Light
              </Badge>
            </CardContent>
          </Card>

          {/* Text Colors Test */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">
                Text Colors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-brand-primary font-semibold">
                Primary Text Color
              </p>
              <p className="text-brand-secondary font-semibold">
                Secondary Text Color
              </p>
              <p className="text-brand-primary/80">Primary with 80% opacity</p>
              <p className="text-brand-secondary/60">
                Secondary with 60% opacity
              </p>
            </CardContent>
          </Card>

          {/* Backgrounds Test */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">
                Backgrounds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="bg-brand-primary/10 p-3 rounded">
                Primary Background 10%
              </div>
              <div className="bg-brand-primary/20 p-3 rounded">
                Primary Background 20%
              </div>
              <div className="bg-brand-secondary/10 p-3 rounded">
                Secondary Background 10%
              </div>
              <div className="bg-brand-secondary/20 p-3 rounded">
                Secondary Background 20%
              </div>
            </CardContent>
          </Card>

          {/* Borders Test */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">Borders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-2 border-brand-primary p-3 rounded">
                Primary Border
              </div>
              <div className="border-2 border-brand-secondary p-3 rounded">
                Secondary Border
              </div>
              <div className="border-l-4 border-brand-primary p-3 bg-brand-primary/5">
                Left Border with Background
              </div>
            </CardContent>
          </Card>

          {/* Gradients Test */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">Gradients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90">
                Gradient Button
              </Button>
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-4 rounded text-center font-semibold">
                Gradient Background
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="border-brand-primary/30">
          <CardHeader>
            <CardTitle className="text-brand-secondary">
              🎨 How to Test
            </CardTitle>
          </CardHeader>
          <CardContent className="text-brand-secondary/80 space-y-2">
            <ol className="list-decimal list-inside space-y-1">
              <li>Click the Palette icon in the top-right</li>
              <li>
                Change the Primary or Secondary colors using color picker or hex
                input
              </li>
              <li>Watch all components update in real-time</li>
              <li>Refresh the page - your colors persist!</li>
              <li>Click "Reset to Default" to restore original colors</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
