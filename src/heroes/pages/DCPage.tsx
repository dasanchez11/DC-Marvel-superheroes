import { useParams } from "react-router-dom";
import { HeroList } from "..";

export const DCPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};
