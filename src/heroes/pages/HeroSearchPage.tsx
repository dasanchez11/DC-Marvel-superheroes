import { ChangeEvent, FormEvent, useEffect } from "react";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { useDebounce } from "../hooks/useDebounce";

interface SearchText {
  searchText: string;
}

export const HeroSearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { search = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(search as string);

  const { searchText, onInputChange } = useForm<SearchText>({
    searchText: search as string,
  });
  const debounceText = useDebounce(searchText, 400);

  useEffect(() => {
    navigate(`?search=${searchText.toLowerCase().trim()}`);
  }, [debounceText]);

  return (
    <>
      <h1>Serch</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {search === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No Hero with name <b>{search}</b>
              </div>
            )
          )}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
