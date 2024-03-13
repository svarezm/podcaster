import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastDetails } from '../services/api';
import { Episode } from '../types';

const EpisodeList: React.FC = () => {
    const { podcastId } = useParams<{ podcastId: string }>();
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
        if (!podcastId) return
        const fetchData = async () => {
            const { episodes } = await getPodcastDetails(podcastId);
            setEpisodes(episodes);
        };

        fetchData();
    }, [podcastId]);

    if (!episodes) return <div>Loading...</div>;

    return (
        <div className="main-content">
            <h2>Episodes ({episodes.length})</h2>
            <ul>
                {episodes.map((episode) => (
                    <li key={episode.trackId}>
                        <a href={`/episode/${episode.trackId}`}>{episode.trackName}</a>
                        <p>Release Date: {episode.releaseDate}</p>
                        <p>Duration: {episode.trackTimeMillis}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EpisodeList;
