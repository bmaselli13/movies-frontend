import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import NameBadge from "./components/NameBadge/NameBadge";
import NamesList from "./components/NamesList/NamesList";

function App() {
  const selectedMovie = {
    title: "Forrest Gump",
    runningTime: 136,
    genre: "Romantic Drama",
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <NamesList />
        <MovieList />
        <MovieInfo movieObj={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
