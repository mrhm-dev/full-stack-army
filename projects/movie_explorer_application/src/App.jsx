import "./App.css";
import MovieList from "./components/MovieList";
// https://api.themoviedb.org/3/movie/top_rated?api_key=9c1774c33def9f9ceba54de7e6dddc5e

function App() {
  return (
    <>
      <h1>Movie Explorer Application</h1>
      <MovieList />
    </>
  );
}

export default App;
