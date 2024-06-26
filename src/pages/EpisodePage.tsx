import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPodcastDetails } from '../services/api';
import { PodcastDetails, Episode } from '../types';
import { getPodcastDetailStoraged } from '../services/localStorage';
import PodcastDetail from '../components/PodcastDetail';
import '../styles/pages/EpisodePage.scss';

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
        <div className='episode-page'>
            <PodcastDetail podcastDetail={podcastDetail} />
            <div className="episode-page__content">
                <h2 className="episode-page__title">{episode.trackName}</h2>
                <p className="episode-page__description" dangerouslySetInnerHTML={{ __html: episode.description.replace(/\n/g, '<br />') }}></p>
                <audio className="episode-page__audio" controls>
                    <source src={episode.episodeUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default EpisodePage;
