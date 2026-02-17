import { notFound } from "next/navigation";
import Link from "next/link";
import { allPlayers, getPlayerBySlug } from "@/lib/players";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Trophy, Medal, Star, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allPlayers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const player = getPlayerBySlug(slug);
  if (!player) return { title: "Player Not Found" };
  return {
    title: `${player.name} — ${player.tour} #${player.ranking} | Tennis Wiki`,
    description: player.bio.slice(0, 160),
  };
}

export default async function PlayerPage({ params }: Props) {
  const { slug } = await params;
  const player = getPlayerBySlug(slug);
  if (!player) notFound();

  const backHref = player.tour === "ATP" ? "/men" : "/women";

  return (
    <div className="py-8 px-4">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Back button */}
        <Link href={backHref}>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to {player.tour} Top 5
          </Button>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="text-xs font-bold">
              {player.tour} #{player.ranking}
            </Badge>
            {player.grandSlams > 0 && (
              <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 gap-1">
                <Trophy className="h-3 w-3" />
                {player.grandSlams}× Grand Slam Champion
              </Badge>
            )}
            {player.olympicMedals && (
              <Badge className="bg-amber-500/20 text-amber-700 dark:text-amber-400 gap-1">
                <Medal className="h-3 w-3" />
                Olympic Medalist
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{player.flag}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {player.name}
              </h1>
              <p className="text-muted-foreground">{player.country}</p>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Age", value: `${player.age}` },
            { label: "Height", value: player.height },
            { label: "Hand", value: player.hand },
            { label: "Grand Slams", value: `${player.grandSlams}` },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="pt-4 pb-4 text-center">
                <div className="text-sm text-muted-foreground">{s.label}</div>
                <div className="text-lg font-bold">{s.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator />

        {/* Tabs */}
        <Tabs defaultValue="bio" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bio">Bio</TabsTrigger>
            <TabsTrigger value="stats">Career Stats</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="bio" className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Biography
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{player.bio}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  🎾 Playing Style
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{player.playingStyle}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Career Statistics
                </h2>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: "Career Titles", value: player.careerStats.titlesTotal },
                    { label: "Win-Loss Record", value: player.careerStats.winLoss },
                    { label: "Turned Pro", value: player.careerStats.yearTurnedPro },
                    { label: "Best Ranking", value: `#${player.careerStats.bestRanking}` },
                    { label: "Grand Slam Titles", value: player.grandSlams },
                    { label: "Tour", value: player.tour },
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
                {player.grandSlamTitles.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-3">Grand Slam Titles</h3>
                    <div className="flex flex-wrap gap-2">
                      {player.grandSlamTitles.map((title) => (
                        <Badge
                          key={title}
                          variant="outline"
                          className="text-yellow-600 dark:text-yellow-400 border-yellow-300 dark:border-yellow-800"
                        >
                          <Trophy className="h-3 w-3 mr-1" />
                          {title}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  🏆 Career Highlights
                </h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {player.careerHighlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            {player.olympicMedals && (
              <Card className="mt-4">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Medal className="h-6 w-6 text-amber-500" />
                    <div>
                      <div className="font-bold">Olympic Achievement</div>
                      <div className="text-muted-foreground">{player.olympicMedals}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
