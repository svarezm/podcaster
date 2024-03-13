import React from 'react';
import { PodcastDetails } from '../types';
import '../styles/PodcastDetail.scss';
const PodcastDetail: React.FC<{ podcastDetail: PodcastDetails }> = ({ podcastDetail }) => {
    return (
        <div className='podcast-detail-container'>
            <div className="podcast-detail-content">
                <img className="podcast-artwork" src={podcastDetail.artwork} alt={podcastDetail.title} />
                <div className="podcast-info">
                    <h2>{podcastDetail.title}</h2>
                    <p>Author: {podcastDetail.artistName}</p>
                    <p>Description: {podcastDetail.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PodcastDetail;
