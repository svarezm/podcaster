import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPodcastDetails } from '../services/api';
import { PodcastDetails, Episode } from '../types';
import { getPodcastDetailStoraged } from '../services/localStorage';

const EpisodePage: React.FC = () => {
    const { podcastId, episodeId } = useParams<{ podcastId: string, episodeId: string }>();
    const [podcastDetail, setPodcastDetail] = useState<PodcastDetails | null>(null);
    const [episode, setEpisode] = useState<Episode | null>(null);

    useEffect(() => {
        if (!podcastId) return;
        const podcastStoraged = getPodcastDetailStoraged(podcastId);
        if (podcastStoraged) {
            const selectedEpisode = podcastStoraged.episodes.find((ep: Episode) => ep.trackId.toString() === episodeId);
            setPodcastDetail(podcastStoraged.podcastDetails);
            setEpisode(selectedEpisode);
        } else {
            fetchEpisodeDetailData();
        }

    }, []);

    const fetchEpisodeDetailData = async () => {
        if (!podcastId) return
        const { podcastDetails, episodes } = await getPodcastDetails(podcastId);
        const selectedEpisode = episodes.find((ep: Episode) => ep.trackId.toString() === episodeId);
        if (!selectedEpisode) return
        setPodcastDetail(podcastDetails);
        setEpisode(selectedEpisode);
    };

    if (!podcastDetail || !episode) return <div>Loading...</div>;

    return (
        <div className='container'>
            <div className="sidebar">
                <Link to={`/podcast/${podcastId}`}>
                    <img src={podcastDetail.artwork} alt={podcastDetail.title} />
                    <h2>{podcastDetail.title}</h2>
                    <p>Author: {podcastDetail.artistName}</p>
                </Link>
            </div>
            <div className="main-content">
                <h2>{episode.trackName}</h2>
                <p dangerouslySetInnerHTML={{ __html: episode.description }}></p>
                <audio controls>
                    <source src={episode.episodeUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default EpisodePage;
