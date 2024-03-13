import React from 'react';
import { Episode } from '../types';

type EpisodeListProps = {
    episodes: Episode[];
    podcastId: string;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, podcastId }) => {
    return (
        <div className="main-content">
            <h2>Episodes ({episodes.length})</h2>
            <ul>
                {episodes.map((episode) => (
                    <li key={episode.trackId}>
                        <a href={`/podcast/${podcastId}/episode/${episode.trackId}`}>{episode.trackName}</a>
                        <p>Release Date: {episode.releaseDate}</p>
                        <p>Duration: {episode.trackTimeMillis}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EpisodeList;
