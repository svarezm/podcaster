import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastDetails } from '../services/api';
import PodcastDetail from '../components/PodcastDetail';
import EpisodeList from '../components/EpisodeList';
import { Episode, PodcastDetails } from '../types';

const Podcast: React.FC = () => {
    const { podcastId } = useParams<{ podcastId: string }>();
    const [podcastDetail, setPodcastDetail] = useState<PodcastDetails | null>(null);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
        if (!podcastId) return;

        const fetchData = async () => {
            const { podcastDetails, episodes } = await getPodcastDetails(podcastId);
            setPodcastDetail(podcastDetails);
            setEpisodes(episodes);
        };

        fetchData();
    }, [podcastId]);

    if (!podcastDetail || episodes.length === 0) return <div>Loading...</div>;

    return (
        <div>
            <div className="podcast-content">
                <PodcastDetail podcastDetail={podcastDetail} />
                {podcastId && <EpisodeList episodes={episodes} podcastId={podcastId} />}
            </div>
        </div>
    );
};

export default Podcast;