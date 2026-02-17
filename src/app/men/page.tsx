import { menPlayers } from "@/lib/players";
import { PlayerCard } from "@/components/player-card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "ATP Top 5 — Men's Rankings | Tennis Wiki",
  description: "The top 5 ranked men's tennis players on the ATP Tour as of early 2025.",
};

export default function MenPage() {
  return (
    <div className="py-12 px-4">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            ATP Tour
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Men&apos;s{" "}
            <span className="bg-gradient-to-r from-blue-500 to-primary bg-clip-text text-transparent">
              Top 5
            </span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The highest-ranked ATP players as of early 2025. A new generation shares the
            stage with the greatest of all time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menPlayers.map((player) => (
            <PlayerCard key={player.slug} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}
