import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DCPage, HeroPage, HeroSearchPage, MarvelPage } from "..";

export const HeroesRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<HeroSearchPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
