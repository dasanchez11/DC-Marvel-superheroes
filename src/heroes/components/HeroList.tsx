import { useMemo } from "react";
import { HeroesPublisher } from "../data/heroesInterface";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

interface HeroList {
  publisher: HeroesPublisher;
}

export const HeroList = ({ publisher }: HeroList) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} hero={hero}></HeroCard>;
      })}
    </div>
  );
};
