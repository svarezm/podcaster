import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastDetails } from '../services/api';
import { PodcastDetails } from '../types';

const PodcastDetail: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const [podcastDetails, setPodcastDetails] = useState<PodcastDetails | null>(null);

  useEffect(() => {
    const fetchPodcastDetails = async () => {
      if (!podcastId) return
      const data = await getPodcastDetails(podcastId);
      setPodcastDetails(data);
    };

    fetchPodcastDetails();
  }, [podcastId]);


  if (!podcastDetails) return <div>Loading...</div>;

  return (
    <div>
      {podcastDetails && (
        <div>
          <h2>{podcastDetails.title}</h2>
          <p>{podcastDetails.artistName}</p>
          <p>{podcastDetails.collectionName}</p>
          <p>{podcastDetails.genre}</p>
          <p>{podcastDetails.releaseDate}</p>
          <p>{podcastDetails.description}</p>
        </div>
      )}
    </div>
  );
};

export default PodcastDetail;
