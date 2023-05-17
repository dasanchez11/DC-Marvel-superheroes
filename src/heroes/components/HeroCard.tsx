import { Link } from "react-router-dom";
import { Hero } from "../data/heroesInterface";

interface HeroCard {
  hero: Hero;
}

export const HeroCard = ({ hero }: HeroCard) => {
  const { alter_ego, characters, first_appearance, id, superhero } = hero;

  const heroImage = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutter">
          <div className="col-4">
            <img src={heroImage} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="cart-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="card-text">{characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
