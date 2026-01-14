import Link from "next/link";
import { Heart, Users, Globe2, Sparkles, Star, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Next Living - Our Vision, Mission & Team",
  description:
    "Discover Next Living's purpose, vision, mission, core values, and meet our founders & leadership team driving conscious co-living experiences.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-16">
        {/* Section intro */}
        <section className="text-center">
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-brand-primary text-xs font-medium text-brand-light shadow-sm mb-4">
            <Sparkles className="h-3 w-3 mr-1 text-brand-light" />
            About Us · Next Living
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
            Who is Next Living and why do we exist?
          </h1>
          <div className="space-y-3 text-lg text-brand-secondary/80 max-w-4xl mx-auto text-left md:text-center">
            <p>
              Next Living is a new paradigm of living, working, learning and
              giving where art, business and personal growth merge into one
              integrated, holistic human experience through a network of soulful
              co‑living spaces.
            </p>
            <p>
              It is a membership‑based transformational living platform where
              people come together to live with purpose, create with passion and
              connect with depth.
            </p>
            <p>
              And it is a core pillar within our broader ecosystem THE NEXT
              UNIVERSE – the future of conscious lifestyles where Soul flows
              with Structure.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-primary/10 rounded-3xl p-6 shadow-sm border border-brand-primary/20">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-2">
              Vision
            </h2>
            <p className="text-xl font-semibold text-brand-secondary mb-2">
              “To ignite a global movement of conscious, creative and collective
              living.”
            </p>
            <p className="text-sm text-brand-secondary/80">
              Our long‑term aspiration is to inspire a new generation of
              residents who live mindfully, create boldly and connect deeply
              within vibrant co‑living communities around the world.
            </p>
          </div>

          <div className="bg-brand-primary/10 rounded-3xl p-6 shadow-sm border border-brand-primary/20">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-2">
              Mission
            </h2>
            <p className="text-sm text-brand-secondary/80 leading-relaxed">
              Next Living exists to{" "}
              <strong>
                empower conscious, creative individuals and communities
              </strong>
              through integrated living spaces, curated programs and a
              supportive ecosystem that nurtures body, mind and spirit while
              enabling meaningful impact for society and the planet.
            </p>
          </div>
        </section>

        {/* Core values */}
        <section className="bg-brand-primary/10 rounded-3xl p-8 shadow-sm border border-brand-primary/20">
          <h2 className="text-2xl font-semibold text-brand-secondary mb-2">
            Core Values
          </h2>
          <p className="text-sm text-brand-secondary/80 mb-6">
            Three core values shape every experience at Next Living:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <Heart className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-secondary mb-1">
                  Creativity
                </h3>
                <p className="text-sm text-brand-secondary/80">
                  A living canvas where art, inspiration and new ideas are
                  expressed and nurtured every day.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <Users className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-secondary mb-1">
                  Co‑creation
                </h3>
                <p className="text-sm text-brand-secondary/80">
                  A global network of dreamers, creators and change‑makers who
                  build things together.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <Globe2 className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-secondary mb-1">
                  Consciousness
                </h3>
                <p className="text-sm text-brand-secondary/80">
                  A mindful and sustainable way of living with self, with others
                  and with the environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Next Living? */}
        <section className="bg-brand-primary/10 rounded-3xl p-8 shadow-sm border border-brand-primary/20">
          <h2 className="text-2xl font-semibold text-brand-secondary mb-2">
            Why Next Living?
          </h2>
          <p className="text-sm text-brand-secondary/80 mb-6">
            How Next Living is different from traditional renting or generic
            co‑living models:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-brand-secondary mb-2">
                Traditional model
              </h3>
              <ul className="space-y-2 text-brand-secondary/80 list-disc list-inside">
                <li>
                  Mostly provides a place to stay, with limited community
                  experiences.
                </li>
                <li>
                  People live side‑by‑side but often feel disconnected and
                  alone.
                </li>
                <li>
                  Little support for personal growth, wellbeing or career
                  development.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brand-secondary mb-2">
                Next Living
              </h3>
              <ul className="space-y-2 text-brand-secondary/80 list-disc list-inside">
                <li>
                  Integrated ecosystem of living, working, learning and
                  wellbeing.
                </li>
                <li>
                  Curated community who share similar values, intentions and
                  lifestyles.
                </li>
                <li>
                  Ongoing wellness, learning and creative programs with mentors
                  and partners.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Founders & Leadership – profile cards */}
        <section className="bg-brand-secondary/5 rounded-3xl p-8 shadow-sm border border-brand-secondary/20">
          <h2 className="text-2xl font-semibold text-brand-secondary mb-4">
            Founders &amp; Leadership
          </h2>
          <p className="text-sm text-brand-secondary/80 mb-6 max-w-3xl">
            Next Living is shaped by a multi‑disciplinary founding team across
            community building, business strategy, technology, experience design
            and digital products – all united by one shared vision of conscious,
            creative co‑living.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Jen VuHuong */}
            <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/10 p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-brand-secondary">
                  Jen VuHuong
                </p>
                <Star className="h-4 w-4 text-brand-primary" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-secondary/60 mb-2">
                People &amp; Community Development
              </p>
              <p className="text-sm text-brand-secondary/80">
                Leads people and community development, mission, vision, culture
                and team rhythm; designs customer transformation journeys
                (L&amp;D + community) and brings art, empathy and people‑centred
                innovation into how we grow individuals and the business.
              </p>
            </div>

            {/* Nam Nguyen */}
            <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/10 p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-brand-secondary">
                  Nam Nguyen
                </p>
                <Star className="h-4 w-4 text-brand-primary" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-secondary/60 mb-2">
                Business &amp; Investment
              </p>
              <p className="text-sm text-brand-secondary/80">
                Co‑LEADS business and investment strategy, market pathways and
                partnership development; builds resources and co‑creates
                business insights that help customer L&amp;D and our ecosystem
                thrive.
              </p>
            </div>

            {/* Son Ha */}
            <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/10 p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-brand-secondary">
                  Son Ha
                </p>
                <Star className="h-4 w-4 text-brand-primary" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-secondary/60 mb-2">
                Artistic &amp; Learning Experience
              </p>
              <p className="text-sm text-brand-secondary/80">
                Co‑founder for Artistic &amp; Learning Development and
                co‑creator of the brand; brings artistic expression into
                customer L&amp;D, on‑site experiences and implementation,
                blending creative journeys with everyday living.
              </p>
            </div>

            {/* Ashi */}
            <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/10 p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-brand-secondary">
                  Ashi
                </p>
                <Star className="h-4 w-4 text-brand-primary" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-secondary/60 mb-2">
                Creative &amp; Digital Product Design
              </p>
              <p className="text-sm text-brand-secondary/80">
                CPO for Creative &amp; Digital Product Design with 10+ years of
                international product and UX experience; brings inside‑out
                values into physical &amp; digital spaces through human‑
                centered, soulful design.
              </p>
            </div>

            {/* Dai */}
            <div className="rounded-2xl border border-brand-secondary/20 bg-brand-secondary/10 p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-brand-secondary">
                  Dai
                </p>
                <Star className="h-4 w-4 text-brand-primary" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-secondary/60 mb-2">
                Technology &amp; Digital Platforms
              </p>
              <p className="text-sm text-brand-secondary/80">
                CTO for Technology &amp; Digital Infrastructure with 15+ years
                leading IT companies; builds scalable tech systems and digital
                platforms that support the growth of Next Living and our wider
                ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Partner logos / credibility row */}
        <section className="text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-secondary/60 uppercase mb-3">
            Showcase logos of partners, accelerators &amp; strategic networks
          </p>
          <p className="text-xs text-brand-secondary/60 max-w-xl mx-auto mb-3">
            Logos in grayscale or minimal color, representing communities and
            strategic networks supporting Next Living.
          </p>
          <div className="flex flex-wrap justify-center gap-6 opacity-70 text-brand-secondary/60 text-xs">
            <span>Partners</span>
            <span>Accelerators</span>
            <span>Creative &amp; Wellness Networks</span>
            <span>Impact‑driven Communities</span>
          </div>
        </section>

        {/* Closing note / footer message */}
        <section className="text-center pt-4">
          <p className="text-sm text-brand-secondary/80 max-w-2xl mx-auto">
            Next Living is where conscious individuals come together to live
            fully, create boldly, and grow authentically.
          </p>
          <Link
            href="/packages"
            className="inline-flex items-center mt-4 text-sm font-medium text-brand-secondary hover:text-brand-primary"
          >
            Khám phá các gói trải nghiệm
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </section>
      </div>
    </div>
  );
}
