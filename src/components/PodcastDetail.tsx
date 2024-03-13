import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastDetails } from '../services/api';
import { PodcastDetails } from '../types';

const PodcastDetail: React.FC = () => {
    const { podcastId } = useParams<{ podcastId: string }>();
    const [podcastDetail, setPodcastDetail] = useState<PodcastDetails | null>(null);

    useEffect(() => {
        if (!podcastId) return
        const fetchData = async () => {
            const { podcastDetails } = await getPodcastDetails(podcastId);
            setPodcastDetail(podcastDetails);
        };

        fetchData();
    }, [podcastId]);

    if (!podcastDetail) return <div>Loading...</div>;

    return (
        <div className='container'>
            <div className="sidebar">
                <img src={podcastDetail.artwork} alt={podcastDetail.title} />
                <h2>{podcastDetail.title}</h2>
                <p>Author: {podcastDetail.artistName}</p>
                <p>Description: {podcastDetail.description}</p>
            </div>
        </div>
    );
};

export default PodcastDetail;
