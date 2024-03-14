import React from 'react';
import { PodcastDetails } from '../types';
import { Link } from 'react-router-dom';
import '../styles/components/PodcastDetail.scss';
const PodcastDetail: React.FC<{ podcastDetail: PodcastDetails }> = ({ podcastDetail }) => {
    return (
        <div className='podcast-detail'>
            <div className="podcast-detail__content">
                <div className='podcast-detail__image' >
                    <Link to={`/podcast/${podcastDetail.id}`} className="podcast-detail__link">
                        <img className="podcast-detail__artwork" src={podcastDetail.artwork} alt={podcastDetail.title} />
                    </Link>
                </div>
                <div className="podcast-detail__info">
                    <h2 className="podcast-detail__title">
                        <Link to={`/podcast/${podcastDetail.id}`} className="podcast-detail__link">{podcastDetail.title}</Link>
                    </h2>
                    <p className="podcast-detail__author">
                        <Link to={`/podcast/${podcastDetail.id}`} className="podcast-detail__link">Author: {podcastDetail.artistName}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PodcastDetail;
