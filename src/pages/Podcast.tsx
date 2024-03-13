import React from 'react';
import PodcastDetail from '../components/PodcastDetail';
import EpisodeList from '../components/EpisodeList';

const Podcast: React.FC = () => {
    return (
        <div>
            <div className="podcast-content">
                <PodcastDetail />
                <EpisodeList />
            </div>
        </div>
    );
};

export default Podcast;
