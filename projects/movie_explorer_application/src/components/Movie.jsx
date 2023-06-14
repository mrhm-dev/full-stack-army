import { ImageComponent } from "../styles/elements.styled";
import { MovieComponent, MovieContent } from "../styles/container.styled";
import PropTypes from "prop-types";

export default function Movie({ movie, handleModal }) {
  return (
    <MovieComponent onClick={() => handleModal(movie.id)}>
      <ImageComponent>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </ImageComponent>

      <MovieContent>
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>
        <button onClick={() => handleModal(movie.id)}>read more...</button>
      </MovieContent>
    </MovieComponent>
  );
}

Movie.propTypes = {
  movie: PropTypes.object,
  handleModal: PropTypes.func,
};
