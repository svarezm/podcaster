import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import EpisodeDetail from "./pages/EpisodeDetail";
import Podcast from "./pages/Podcast";
import PodcastList from "./pages/PodcastList";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:podcastId" element={<Podcast />} />
          <Route path="/episode/:episodeId" element={<EpisodeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
