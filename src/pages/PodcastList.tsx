import React, { useEffect, useState } from 'react';
import { Podcast } from '../types/podcast';

const PodcastList: React.FC = () => {
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);

    useEffect(() => {
        const podcasts = [{
            id: '1234',
            name: 'name',
            artist: 'artist',
            image: 'image',
        }]
        setFilteredPodcasts(podcasts);
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        const filtered = podcasts.filter(podcast =>
            podcast.name.toLowerCase().includes(searchTerm)
        );
        setFilteredPodcasts(filtered);
    };

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={handleSearch} />
            <div className="podcast-list">
                {filteredPodcasts.map((podcast) => (
                    <div className="podcast-card" key={podcast.id}>
                        <a href={`/podcast/${podcast.id}`} className="podcast-link">
                            <div className="podcast-image-container">
                                <img className="podcast-image" src={podcast.image} alt={`${podcast.name} - ${podcast.artist}`} />
                            </div>
                            <div className="podcast-info">
                                <p className="podcast-title">{podcast.name}</p>
                                <p className="podcast-artist">{podcast.artist}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PodcastList;
