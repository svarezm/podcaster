import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import EpisodePage from "./pages/EpisodePage";
import PodcastPage from "./pages/PodcastPage";
import PodcastList from "./pages/PodcastList";
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className='page'>
        <Header />
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:podcastId" element={<PodcastPage />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
