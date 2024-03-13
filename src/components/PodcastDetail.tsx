import React from 'react';
import { PodcastDetails } from '../types';
import '../styles/PodcastDetail.scss';
import { Link } from 'react-router-dom';
const PodcastDetail: React.FC<{ podcastDetail: PodcastDetails }> = ({ podcastDetail }) => {
    return (
        <div className='podcast-detail-container'>
            <div className="podcast-detail-content">
                <Link to={`/podcast/${podcastDetail.id}`}>
                    <img className="podcast-artwork" src={podcastDetail.artwork} alt={podcastDetail.title} />
                </Link>
                <div className="podcast-info">
                    <h2><Link to={`/podcast/${podcastDetail.id}`}>{podcastDetail.title}</Link></h2>
                    <p><Link to={`/podcast/${podcastDetail.id}`}>Author: {podcastDetail.artistName}</Link></p>
                    <p>Description: {podcastDetail.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PodcastDetail;
