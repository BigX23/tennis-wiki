import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="relative mx-auto max-w-4xl text-center space-y-6">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            🎾 Season 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            The World&apos;s Best{" "}
            <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Tennis Players
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the top-ranked ATP and WTA players. Explore their stats, career
            achievements, Grand Slam titles, and playing styles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/men">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                <Users className="h-4 w-4" />
                ATP Top 5
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/women">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                <Users className="h-4 w-4" />
                WTA Top 5
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cards section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
          <Link href="/men" className="group">
            <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-primary" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Trophy className="h-8 w-8 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      Men&apos;s Top 5
                    </h2>
                    <p className="text-sm text-muted-foreground">ATP Rankings</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  From Sinner&apos;s explosive rise to Djokovic&apos;s legendary career —
                  explore the five best players on the ATP Tour.
                </p>
                <div className="flex gap-2 pt-2 text-xl">
                  <span>🇮🇹</span>
                  <span>🇩🇪</span>
                  <span>🇪🇸</span>
                  <span>🇷🇸</span>
                  <span>🇷🇺</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/women" className="group">
            <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-primary" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Trophy className="h-8 w-8 text-pink-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      Women&apos;s Top 5
                    </h2>
                    <p className="text-sm text-muted-foreground">WTA Rankings</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Sabalenka&apos;s dominance, Świątek&apos;s clay mastery, and Gauff&apos;s
                  rising star — meet the WTA&apos;s finest.
                </p>
                <div className="flex gap-2 pt-2 text-xl">
                  <span>🇧🇾</span>
                  <span>🇵🇱</span>
                  <span>🇺🇸</span>
                  <span>🇮🇹</span>
                  <span>🇰🇿</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Grand Slam Titles", value: "40", icon: "🏆" },
            { label: "Countries", value: "9", icon: "🌍" },
            { label: "Players Profiled", value: "10", icon: "🎾" },
            { label: "Active Tours", value: "2", icon: "📊" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-2xl">{stat.icon}</div>
              <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
