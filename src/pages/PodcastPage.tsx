import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastDetails } from '../services/api';
import PodcastDetail from '../components/PodcastDetail';
import EpisodeList from '../components/EpisodeList';
import { Episode, PodcastDetails } from '../types';
import { getPodcastDetailStoraged, savePodcastDetailStoraged } from '../services/localStorage';
import '../styles/PodcastPage.scss';

const PodcastPage: React.FC = () => {
    const { podcastId } = useParams<{ podcastId: string }>();
    const [podcastDetail, setPodcastDetail] = useState<PodcastDetails | null>(null);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
        if (!podcastId) return;
        const podcastStoraged = getPodcastDetailStoraged(podcastId);
        if (podcastStoraged) {
            setPodcastDetail(podcastStoraged.podcastDetails);
            setEpisodes(podcastStoraged.episodes);
        } else {
            fetchPodcastDetailData();
        }

    }, []);

    const fetchPodcastDetailData = async () => {
        if (!podcastId) return
        const { podcastDetails, episodes } = await getPodcastDetails(podcastId);
        setPodcastDetail(podcastDetails);
        setEpisodes(episodes);
        savePodcastDetailStoraged(podcastId, podcastDetails, episodes);
    };

    if (!podcastDetail) return <div>Loading...</div>;

    return (
        <div className="podcast-content">
            <PodcastDetail podcastDetail={podcastDetail} />
            {podcastId && <EpisodeList episodes={episodes} podcastId={podcastId} />}
        </div>
    );
};

export default PodcastPage;