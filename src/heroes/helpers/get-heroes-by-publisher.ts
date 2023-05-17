import { heroes } from "../data/heroes";
import { HeroesPublisher } from "../data/heroesInterface";

export const getHeroesByPublisher = (publisher: HeroesPublisher) => {
  return heroes.filter((hero) => hero.publisher === publisher);
};
