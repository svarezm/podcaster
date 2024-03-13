import React from 'react';
import { PodcastDetails } from '../types';
const PodcastDetail: React.FC<{ podcastDetail: PodcastDetails }> = ({ podcastDetail }) => {
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
