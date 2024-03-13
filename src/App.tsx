import Header from "./components/Header";
import EpisodeDetail from "./pages/EpisodeDetail";
import PodcastDetail from "./pages/PodcastDetail";
import PodcastList from "./pages/PodcastList";


function App() {
  return (
    <div className="App">
      <Header />
      <PodcastList />
      <PodcastDetail />
      <EpisodeDetail />
    </div>
  );
}

export default App;
