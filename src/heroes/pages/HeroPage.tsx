import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  const hero = useMemo(() => heroId && getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const { alter_ego, characters, first_appearance, id, publisher, superhero } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b>
            {first_appearance}
          </li>

          <h5 className="mt-3">Characters</h5>
          <p>{characters}</p>
          <button onClick={onNavigateBack} className="btn btn-outline-primary">
            Go Back
          </button>
        </ul>
      </div>
    </div>
  );
};
