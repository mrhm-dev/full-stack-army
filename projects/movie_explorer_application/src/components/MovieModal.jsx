import PropTypes from "prop-types";
import { ModalContainer, ModalContent } from "../styles/container.styled";

export default function MovieModal({ modalClose, movies, movieId }) {
  const handleModalClose = () => {
    modalClose();
  };

  const movie = movies.find((movie) => movie.id === movieId);

  return (
    <ModalContainer>
      <ModalContent>
        <button onClick={handleModalClose}>Close X</button>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <div>
          <h2>{movie.original_title}</h2>
          <p style={{ width: "50%", margin: "0 auto" }}>{movie.overview}</p>
          <h3
            style={{
              background: "yellow",
              padding: "0.5rem 1rem",
              color: "black",
              width: "fit-content",
              margin: "1.5rem auto 0 auto",
            }}
          >
            Rating: {movie.vote_average}
          </h3>
        </div>
      </ModalContent>
    </ModalContainer>
  );
}

MovieModal.propTypes = {
  modalClose: PropTypes.func,
  movies: PropTypes.array,
  movieId: PropTypes.number,
};
