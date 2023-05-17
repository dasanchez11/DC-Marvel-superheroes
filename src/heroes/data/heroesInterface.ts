export interface Hero {
  id: string;
  superhero: string;
  publisher: HeroesPublisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export type HeroesPublisher = "DC Comics" | "Marvel Comics";
