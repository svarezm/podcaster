import React from 'react';
import { Episode } from '../types';
import { formatReleaseDate } from '../utils/dateUtils';
import { formatDuration } from '../utils/formDuration';
import '../styles/components/EpisodeList.scss';

type EpisodeListProps = {
    episodes: Episode[];
    podcastId: string;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, podcastId }) => {
    return (
        <div className='flex-column'>
            <div className="episodes-count">
                <h2>Episodes: {episodes.length}</h2>
            </div>
            <div className="episode-table">
                <div className="episode-row episode-header">
                    <div className="episode-column">Title</div>
                    <div className="episode-column">Date</div>
                    <div className="episode-column">Duration</div>
                </div>
                {episodes.map((episode) => (
                    <div className="episode-row" key={episode.trackId}>
                        <div className="episode-column">
                            <a className="episode-column__link" href={`/podcast/${podcastId}/episode/${episode.trackId}`}>{episode.trackName}</a>
                        </div>
                        <div className="episode-column">
                            {formatReleaseDate(episode.releaseDate)}
                        </div>
                        <div className="episode-column">
                            {formatDuration(episode.trackTimeMillis)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodeList;
