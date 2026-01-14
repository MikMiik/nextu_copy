"use client";

import AdvancedThemeCustomizer from "@/components/theme/AdvancedThemeCustomizer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Zap,
  Heart,
  Star,
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";

export default function ThemeTestPage() {
  return (
    <div className="min-h-screen bg-brand-light p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header with Advanced Theme Customizer */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-brand-secondary">
              Advanced Theme Designer Studio
            </h1>
            <p className="text-brand-secondary/80 mt-2">
              Complete design system customization with presets, export/import
              and live preview
            </p>
          </div>
          <AdvancedThemeCustomizer />
        </div>

        {/* Test Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buttons Test */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Buttons
              </CardTitle>
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
              <Button
                size="sm"
                className="w-full bg-brand-secondary hover:bg-brand-secondary/90"
              >
                Small Button
              </Button>
            </CardContent>
          </Card>

          {/* Badges & Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary flex items-center gap-2">
                <Award className="h-5 w-5" />
                Badges & Tags
              </CardTitle>
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
              <Badge
                variant="outline"
                className="border-brand-primary text-brand-primary"
              >
                Outline
              </Badge>
              <Badge className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
                Gradient
              </Badge>
            </CardContent>
          </Card>

          {/* Typography */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">Typography</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <h1 className="text-3xl font-bold text-brand-secondary">
                Heading 1
              </h1>
              <h2 className="text-2xl font-bold text-brand-secondary">
                Heading 2
              </h2>
              <h3 className="text-xl font-semibold text-brand-secondary">
                Heading 3
              </h3>
              <p className="text-brand-secondary">Body text regular</p>
              <p className="text-brand-secondary/80">Body text muted</p>
              <p className="text-brand-primary font-semibold">
                Primary accent text
              </p>
            </CardContent>
          </Card>

          {/* Backgrounds */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">
                Backgrounds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="bg-brand-primary/10 p-3 rounded text-sm">
                Primary 10%
              </div>
              <div className="bg-brand-primary/20 p-3 rounded text-sm">
                Primary 20%
              </div>
              <div className="bg-brand-secondary/10 p-3 rounded text-sm">
                Secondary 10%
              </div>
              <div className="bg-brand-secondary/20 p-3 rounded text-sm">
                Secondary 20%
              </div>
              <div className="bg-brand-light border p-3 rounded text-sm">
                Light Background
              </div>
            </CardContent>
          </Card>

          {/* Borders & Dividers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">Borders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-2 border-brand-primary p-3 rounded text-sm">
                Primary Border
              </div>
              <div className="border-2 border-brand-secondary p-3 rounded text-sm">
                Secondary Border
              </div>
              <div className="border-l-4 border-brand-primary p-3 bg-brand-primary/5 text-sm">
                Left Accent Border
              </div>
              <div className="border-t-4 border-brand-primary pt-3 text-sm">
                Top Border Divider
              </div>
            </CardContent>
          </Card>

          {/* Gradients */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">Gradients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90">
                Gradient Button
              </Button>
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-4 rounded text-center font-semibold text-sm">
                Gradient Background
              </div>
              <div className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 p-4 rounded text-center text-sm">
                Subtle Gradient
              </div>
            </CardContent>
          </Card>

          {/* Form Elements */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-brand-secondary">
                Form Elements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-secondary">
                    Input Field
                  </label>
                  <Input
                    placeholder="Enter text..."
                    className="border-brand-primary/30 focus:border-brand-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-secondary">
                    With Icon
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-brand-primary" />
                    <Input placeholder="Location..." className="pl-10" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-secondary">
                  Textarea
                </label>
                <Textarea placeholder="Enter description..." rows={3} />
              </div>
            </CardContent>
          </Card>

          {/* Icon Grid */}
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-secondary">Icons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-3">
                {[
                  Users,
                  Heart,
                  Star,
                  TrendingUp,
                  Calendar,
                  MapPin,
                  Clock,
                  Award,
                ].map((Icon, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-brand-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real Component Example */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-brand-secondary">
                Real-World Card Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20">
                    <Badge className="absolute top-3 left-3 bg-brand-primary text-white">
                      Featured
                    </Badge>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-bold text-brand-secondary mb-1">
                        Event Title
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-brand-secondary/80">
                        <Calendar className="h-4 w-4" />
                        <span>Jan 20, 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-brand-secondary/80">
                    This demonstrates how your theme affects real UI components
                    with multiple elements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-brand-primary text-brand-primary"
                    >
                      Workshop
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-brand-primary text-brand-primary"
                    >
                      Beginner
                    </Badge>
                  </div>
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="border-brand-primary/30 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
          <CardHeader>
            <CardTitle className="text-brand-secondary flex items-center gap-2">
              🎨 Designer Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-brand-secondary">
                  Quick Start
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-brand-secondary/80">
                  <li>Click "Design System" button above</li>
                  <li>Choose a preset or customize each color</li>
                  <li>See real-time preview in all components</li>
                  <li>Export your theme JSON for backup</li>
                  <li>Colors persist across page refreshes</li>
                </ol>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-brand-secondary">Features</h3>
                <ul className="space-y-2 text-sm text-brand-secondary/80">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">
                      New
                    </Badge>
                    <span>
                      4 color control (Primary, Secondary, Light, Dark)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">
                      New
                    </Badge>
                    <span>6 professional preset themes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">
                      New
                    </Badge>
                    <span>Export/Import theme configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">
                      New
                    </Badge>
                    <span>Opacity swatches preview</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-brand-primary/20">
              <p className="text-sm text-brand-secondary/80">
                <strong className="text-brand-secondary">Pro Tip:</strong> Use
                the opacity variants (10%, 20%, 40%, etc.) to create depth and
                visual hierarchy without adding new colors. All components
                support /10, /20, /40, /60, /80, /90 modifiers.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
