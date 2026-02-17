import { womenPlayers } from "@/lib/players";
import { PlayerCard } from "@/components/player-card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "WTA Top 5 — Women's Rankings | Tennis Wiki",
  description: "The top 5 ranked women's tennis players on the WTA Tour as of early 2025.",
};

export default function WomenPage() {
  return (
    <div className="py-12 px-4">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            WTA Tour
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Women&apos;s{" "}
            <span className="bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent">
              Top 5
            </span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The highest-ranked WTA players as of early 2025. Power, finesse, and fierce
            competition at the very top.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {womenPlayers.map((player) => (
            <PlayerCard key={player.slug} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}
