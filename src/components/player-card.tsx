import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import type { Player } from "@/lib/players";

export function PlayerCard({ player }: { player: Player }) {
  return (
    <Link href={`/players/${player.slug}`}>
      <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 cursor-pointer h-full">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-green-400" />
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <Badge
              variant="secondary"
              className="text-xs font-bold bg-secondary/20 text-secondary-foreground"
            >
              #{player.ranking}
            </Badge>
            <span className="text-2xl">{player.flag}</span>
          </div>
          <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
            {player.name}
          </h3>
          <p className="text-sm text-muted-foreground">{player.country}</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Age:</span>{" "}
              <span className="font-medium">{player.age}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Height:</span>{" "}
              <span className="font-medium">{player.height.split(" ")[0]}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Hand:</span>{" "}
              <span className="font-medium">{player.hand.split("-")[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="h-3.5 w-3.5 text-yellow-500" />
              <span className="font-bold text-yellow-600 dark:text-yellow-400">
                {player.grandSlams}
              </span>
            </div>
          </div>
          {player.grandSlams > 0 && (
            <p className="text-xs text-muted-foreground line-clamp-2">
              {player.grandSlamTitles.join(", ")}
            </p>
          )}
          {player.grandSlams === 0 && player.olympicMedals && (
            <p className="text-xs text-muted-foreground">{player.olympicMedals}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
