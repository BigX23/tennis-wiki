export interface Player {
  slug: string;
  name: string;
  flag: string;
  country: string;
  ranking: number;
  tour: "ATP" | "WTA";
  age: number;
  height: string;
  hand: string;
  grandSlams: number;
  grandSlamTitles: string[];
  olympicMedals?: string;
  bio: string;
  playingStyle: string;
  careerHighlights: string[];
  careerStats: {
    titlesTotal: number;
    winLoss: string;
    yearTurnedPro: number;
    bestRanking: number;
  };
}

export const menPlayers: Player[] = [
  {
    slug: "jannik-sinner",
    name: "Jannik Sinner",
    flag: "🇮🇹",
    country: "Italy",
    ranking: 1,
    tour: "ATP",
    age: 23,
    height: "6'2\" (188 cm)",
    hand: "Right-handed",
    grandSlams: 2,
    grandSlamTitles: ["Australian Open 2024", "US Open 2024"],
    bio: "Born in San Candido in the Italian Alps, Jannik Sinner was a junior skiing champion before switching to tennis at age 13. His rapid rise through the rankings has been nothing short of extraordinary, culminating in back-to-back Grand Slam titles in 2024 that cemented him as the new world No. 1.",
    playingStyle: "Sinner plays an aggressive baseline game built on relentless ball-striking from both wings. His backhand is considered one of the best in the game — flat, penetrating, and devastatingly consistent. He combines raw power with exceptional timing and an increasingly complete net game.",
    careerHighlights: [
      "Won first Grand Slam at Australian Open 2024",
      "Captured US Open 2024 to reach world No. 1",
      "ATP Finals champion 2024",
      "Youngest Italian to win a Grand Slam",
      "Former junior skiing champion"
    ],
    careerStats: {
      titlesTotal: 18,
      winLoss: "216-73",
      yearTurnedPro: 2018,
      bestRanking: 1,
    },
  },
  {
    slug: "alexander-zverev",
    name: "Alexander Zverev",
    flag: "🇩🇪",
    country: "Germany",
    ranking: 2,
    tour: "ATP",
    age: 27,
    height: "6'6\" (198 cm)",
    hand: "Right-handed",
    grandSlams: 0,
    grandSlamTitles: [],
    olympicMedals: "Gold Medal — Tokyo 2021",
    bio: "Alexander Zverev is the standard-bearer of German tennis, carrying the torch lit by Boris Becker and Michael Stich. Despite not yet capturing a Grand Slam title, his consistency at the top of the rankings and his Olympic Gold Medal make him one of the most accomplished players of his generation. His comeback from a devastating ankle injury at the 2022 French Open was nothing short of heroic.",
    playingStyle: "Zverev uses his towering frame to generate enormous power on serve — consistently one of the biggest in the game. From the baseline, he hits heavy topspin from both sides and excels in physical rallies. His improved movement and court coverage have made him a formidable force on every surface.",
    careerHighlights: [
      "Olympic Gold Medal — Tokyo 2021",
      "2x ATP Finals Champion (2018, 2021)",
      "French Open Finalist 2024",
      "Multiple Masters 1000 titles",
      "Remarkable comeback from 2022 ankle injury"
    ],
    careerStats: {
      titlesTotal: 22,
      winLoss: "397-178",
      yearTurnedPro: 2013,
      bestRanking: 2,
    },
  },
  {
    slug: "carlos-alcaraz",
    name: "Carlos Alcaraz",
    flag: "🇪🇸",
    country: "Spain",
    ranking: 3,
    tour: "ATP",
    age: 21,
    height: "6'1\" (185 cm)",
    hand: "Right-handed",
    grandSlams: 4,
    grandSlamTitles: ["US Open 2022", "Wimbledon 2023", "Roland Garros 2024", "Wimbledon 2024"],
    bio: "Carlos Alcaraz burst onto the scene as a teenager and has already etched his name among the all-time greats. The prodigy from El Palmar, Murcia became the youngest world No. 1 in ATP history at age 19, and by 21 has won Grand Slams on three different surfaces — a feat that took many legends far longer to achieve.",
    playingStyle: "Alcaraz is the most complete young player the sport has ever seen. He combines the explosive power and athleticism of the modern game with vintage shotmaking — devastating drop shots, no-look volleys, and supernatural court instincts. His forehand is a weapon of mass destruction, and his ability to shift gears mid-rally is unmatched.",
    careerHighlights: [
      "4 Grand Slam titles by age 21",
      "Youngest world No. 1 in ATP history (19 years old)",
      "Won Slams on hard, grass, and clay",
      "Back-to-back Wimbledon titles (2023–2024)",
      "Roland Garros champion 2024"
    ],
    careerStats: {
      titlesTotal: 16,
      winLoss: "179-42",
      yearTurnedPro: 2018,
      bestRanking: 1,
    },
  },
  {
    slug: "novak-djokovic",
    name: "Novak Djokovic",
    flag: "🇷🇸",
    country: "Serbia",
    ranking: 4,
    tour: "ATP",
    age: 37,
    height: "6'2\" (188 cm)",
    hand: "Right-handed",
    grandSlams: 24,
    grandSlamTitles: [
      "Australian Open (×10)", "Roland Garros (×3)", "Wimbledon (×7)", "US Open (×4)"
    ],
    olympicMedals: "Gold Medal — Paris 2024",
    bio: "Novak Djokovic is widely regarded as the greatest tennis player of all time. With 24 Grand Slam titles — the most in men's history — and a record 428 weeks at No. 1, his dominance across two decades is unparalleled. Even at 37, he continues to compete at the highest level, completing a career Golden Slam with Olympic Gold in Paris 2024.",
    playingStyle: "Djokovic's game is built on supernatural flexibility, court coverage, and the best return of serve in tennis history. His two-handed backhand is a thing of beauty — capable of defense and attack in equal measure. His mental fortitude in crucial moments is legendary, having saved more match points and won more five-set matches than anyone in the Open Era.",
    careerHighlights: [
      "24 Grand Slam titles — all-time men's record",
      "428 weeks at No. 1 — all-time record",
      "Career Golden Slam (all 4 Slams + Olympic Gold)",
      "Record 40 Masters 1000 titles",
      "7 ATP Finals titles"
    ],
    careerStats: {
      titlesTotal: 99,
      winLoss: "1131-212",
      yearTurnedPro: 2003,
      bestRanking: 1,
    },
  },
  {
    slug: "daniil-medvedev",
    name: "Daniil Medvedev",
    flag: "🇷🇺",
    country: "Russia",
    ranking: 5,
    tour: "ATP",
    age: 29,
    height: "6'6\" (198 cm)",
    hand: "Right-handed",
    grandSlams: 1,
    grandSlamTitles: ["US Open 2021"],
    bio: "Daniil Medvedev is one of the most unique and cerebral players in modern tennis. The Russian broke through by winning the 2021 US Open in dominant fashion, denying Djokovic the Calendar Grand Slam. Known for his unorthodox game and sardonic on-court personality, Medvedev has established himself as a perennial contender on hard courts.",
    playingStyle: "Medvedev's game defies convention. His flat, whippy groundstrokes are hit from unusual positions, and his serve — despite an unorthodox motion — is one of the most effective in tennis. He excels at absorbing pace and redirecting it, frustrating opponents with his reach and defensive abilities before striking with precision when openings appear.",
    careerHighlights: [
      "US Open Champion 2021",
      "Australian Open Finalist 2021 & 2022",
      "Former world No. 1",
      "ATP Finals Champion 2020",
      "Denied Djokovic the 2021 Calendar Grand Slam"
    ],
    careerStats: {
      titlesTotal: 20,
      winLoss: "294-131",
      yearTurnedPro: 2015,
      bestRanking: 1,
    },
  },
];

export const womenPlayers: Player[] = [
  {
    slug: "aryna-sabalenka",
    name: "Aryna Sabalenka",
    flag: "🇧🇾",
    country: "Belarus",
    ranking: 1,
    tour: "WTA",
    age: 26,
    height: "5'11\" (182 cm)",
    hand: "Right-handed",
    grandSlams: 3,
    grandSlamTitles: ["Australian Open 2024", "US Open 2024", "Australian Open 2025"],
    bio: "Aryna Sabalenka has evolved from a raw power hitter into the most dominant force in women's tennis. After years of being labeled an underachiever, she silenced critics with back-to-back Australian Open titles and a US Open crown, establishing herself firmly as the world No. 1. Her transformation from erratic shotmaker to composed champion is one of the sport's great recent stories.",
    playingStyle: "Sabalenka plays with staggering power from both wings. Her serve is one of the biggest in the women's game, and her forehand can be genuinely frightening. What's changed is the control — she now channels her explosive hitting with far greater precision, and her improved second serve has eliminated the double-fault issues that once plagued her.",
    careerHighlights: [
      "3 Grand Slam titles (AO 2024, USO 2024, AO 2025)",
      "Back-to-back Australian Open champion",
      "World No. 1 since October 2023",
      "WTA Finals champion",
      "Multiple Premier Mandatory titles"
    ],
    careerStats: {
      titlesTotal: 17,
      winLoss: "313-133",
      yearTurnedPro: 2015,
      bestRanking: 1,
    },
  },
  {
    slug: "iga-swiatek",
    name: "Iga Świątek",
    flag: "🇵🇱",
    country: "Poland",
    ranking: 2,
    tour: "WTA",
    age: 23,
    height: "5'9\" (175 cm)",
    hand: "Left-handed",
    grandSlams: 5,
    grandSlamTitles: ["Roland Garros 2020", "US Open 2022", "Roland Garros 2022", "Roland Garros 2023", "Roland Garros 2024"],
    bio: "Iga Świątek is the undisputed queen of clay and one of the most dominant players of her generation. The Polish sensation first stunned the tennis world by winning Roland Garros as an unseeded 19-year-old in 2020, and has since won it three more times. Her 37-match winning streak in 2022 was the longest in women's tennis in over two decades.",
    playingStyle: "Świątek's game is built on ferocious topspin — particularly off her forehand, which generates levels of rotation rarely seen in the women's game. On clay, she's virtually unbeatable, suffocating opponents with depth and spin. She's improved her serve and net game to become more dangerous on faster surfaces as well.",
    careerHighlights: [
      "5 Grand Slam titles — 4× Roland Garros, 1× US Open",
      "37-match winning streak in 2022",
      "Former world No. 1 (held for 75+ weeks)",
      "Youngest French Open champion since 1992",
      "WTA Finals champion 2023"
    ],
    careerStats: {
      titlesTotal: 22,
      winLoss: "278-72",
      yearTurnedPro: 2016,
      bestRanking: 1,
    },
  },
  {
    slug: "coco-gauff",
    name: "Coco Gauff",
    flag: "🇺🇸",
    country: "United States",
    ranking: 3,
    tour: "WTA",
    age: 20,
    height: "5'9\" (175 cm)",
    hand: "Right-handed",
    grandSlams: 1,
    grandSlamTitles: ["US Open 2023"],
    bio: "Coco Gauff has been in the spotlight since she burst onto the scene at Wimbledon 2019 as a 15-year-old qualifier, defeating Venus Williams. Since then, she's lived up to the enormous hype, winning the US Open at 19 and becoming the face of American tennis. Her combination of athleticism, maturity, and social awareness makes her a generational talent both on and off the court.",
    playingStyle: "Gauff is one of the best athletes in women's tennis. She covers the court with ease, returns serve brilliantly, and has developed her forehand into a genuine weapon. Her lefty-style serve (despite being right-handed) kicks up high and wide, and her competitive fire in pressure moments belies her age.",
    careerHighlights: [
      "US Open Champion 2023 at age 19",
      "Defeated Venus Williams at Wimbledon 2019 as a 15-year-old",
      "French Open Finalist 2022",
      "WTA Finals Finalist 2023",
      "Youngest American Grand Slam champion since Serena Williams"
    ],
    careerStats: {
      titlesTotal: 9,
      winLoss: "182-65",
      yearTurnedPro: 2018,
      bestRanking: 2,
    },
  },
  {
    slug: "jasmine-paolini",
    name: "Jasmine Paolini",
    flag: "🇮🇹",
    country: "Italy",
    ranking: 4,
    tour: "WTA",
    age: 29,
    height: "5'4\" (163 cm)",
    hand: "Right-handed",
    grandSlams: 0,
    grandSlamTitles: [],
    bio: "Jasmine Paolini is the ultimate late bloomer. After spending years grinding on the lower rungs of the tour, the diminutive Italian had a fairy-tale 2024, reaching the finals of both Roland Garros and Wimbledon. Standing at just 5'4\", she defies the modern trend of towering power players, proving that heart, speed, and tactical brilliance can overcome any physical disadvantage.",
    playingStyle: "What Paolini lacks in height, she more than makes up for with quickness, anticipation, and shot selection. She takes the ball early, flattens it out, and redirects pace expertly. Her footwork is immaculate, allowing her to neutralize bigger hitters and turn defense into attack in a heartbeat. She's also an excellent doubles player, which speaks to her net skills.",
    careerHighlights: [
      "Roland Garros Finalist 2024",
      "Wimbledon Finalist 2024",
      "Two Grand Slam finals in a single season",
      "Olympic Gold Medal in Doubles — Paris 2024",
      "Highest-ranked Italian woman in WTA history"
    ],
    careerStats: {
      titlesTotal: 4,
      winLoss: "153-112",
      yearTurnedPro: 2014,
      bestRanking: 4,
    },
  },
  {
    slug: "elena-rybakina",
    name: "Elena Rybakina",
    flag: "🇰🇿",
    country: "Kazakhstan",
    ranking: 5,
    tour: "WTA",
    age: 25,
    height: "6'0\" (184 cm)",
    hand: "Right-handed",
    grandSlams: 1,
    grandSlamTitles: ["Wimbledon 2022"],
    bio: "Elena Rybakina possesses one of the most powerful games in women's tennis. Born in Moscow, she has represented Kazakhstan since 2018 and made history by winning Wimbledon in 2022. Her booming serve and explosive ball-striking make her a threat on any surface, and she's consistently been among the top players in the world since her breakthrough.",
    playingStyle: "Rybakina's game revolves around her massive serve — arguably the best in women's tennis — and her thunderous forehand. She hits flat and hard from both wings, preferring to dictate play from the baseline with sheer pace. Her calm demeanor masks an incredibly aggressive game plan: she aims to overwhelm opponents before rallies even begin.",
    careerHighlights: [
      "Wimbledon Champion 2022",
      "Australian Open Finalist 2023",
      "Indian Wells Champion 2023",
      "One of the biggest servers in WTA history",
      "Multiple WTA 1000 titles"
    ],
    careerStats: {
      titlesTotal: 9,
      winLoss: "210-98",
      yearTurnedPro: 2016,
      bestRanking: 3,
    },
  },
];

export const allPlayers = [...menPlayers, ...womenPlayers];

export function getPlayerBySlug(slug: string): Player | undefined {
  return allPlayers.find((p) => p.slug === slug);
}
