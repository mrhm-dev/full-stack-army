import { SearchBox, Filtering } from "../styles/elements.styled";
import { MovieContainer } from "../styles/container.styled";
import Movie from "./Movie";
import MovieModal from "./MovieModal";
import { useEffect, useState } from "react";
import { REACT_APP_API_KEY } from "../../config";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selection, setSelection] = useState("top_rated");
  const [filteredValue, setFilteredValue] = useState("");

  const api_key = REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${selection}?api_key=${api_key}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        const result = await res.json();
        setMovies(result["results"]);
      } catch (error) {
        console.log(error);
        setMovies([]);
      }
    };

    fetchData();
  }, [selection, api_key]);

  const handleModal = (movieId) => {
    setMovieId(movieId);
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  useEffect(() => {
    const movieFilter = () => {
      const filterMovie = movies.filter((movie) => {
        return movie.original_title
          .toLowerCase()
          .includes(filteredValue.toLowerCase());
      });
      setFilteredMovies(filterMovie);
    };
    movieFilter();
  }, [movies, selection, filteredValue]);

  const handleSearchBox = (e) => setFilteredValue(e.target.value);

  const handleSelection = (e) => {
    setSelection(e.target.value);
  };

  return (
    <>
      <SearchBox placeholder="Search Movie" onChange={handleSearchBox} />
      <Filtering onChange={handleSelection}>
        <option value="top_rated">Top Rated</option>
        <option value="popular">Popular</option>
        <option value="upcoming">Upcoming</option>
      </Filtering>
      {movies.length === 0 ? (
        <h1>Server Error Occurred 🚨, please try again !</h1>
      ) : (
        <MovieContainer>
          {filteredMovies.length > 0
            ? filteredMovies.map((movie) => (
                <Movie key={movie.id} movie={movie} handleModal={handleModal} />
              ))
            : movies.map((movie) => (
                <Movie key={movie.id} movie={movie} handleModal={handleModal} />
              ))}
          {modalShow && (
            <MovieModal
              modalClose={handleModalClose}
              movies={movies}
              movieId={movieId}
            />
          )}
        </MovieContainer>
      )}
    </>
  );
}
