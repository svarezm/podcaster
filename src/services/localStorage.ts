import { Episode, PodcastDetails } from "../types";

const PODCAST_DATA_KEY = 'podcastsData';
const PODCAST_DETAIL_KEY = 'podcastsDetail';

export const savePodcastsStoraged = (data: any) => {
  const currentTime = new Date().getTime();
  const dataToStore = { data, timestamp: currentTime };
  localStorage.setItem(PODCAST_DATA_KEY, JSON.stringify(dataToStore));
};

export const getPodcastsStoraged = () => {
  const storedData = localStorage.getItem(PODCAST_DATA_KEY);
  if (storedData) {
    const { data, timestamp } = JSON.parse(storedData);
    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    if (currentTime - timestamp < oneDay) {
      return data;
    }
  }
  return null;
};

export const savePodcastDetailStoraged = (podcastId: string, podcastDetails: PodcastDetails, episodes: Episode[]) => {
  const storedDataJson = localStorage.getItem(PODCAST_DETAIL_KEY);
  let storedData = storedDataJson ? JSON.parse(storedDataJson) : {};

  const currentTime = new Date().getTime();
  const newPodcastData = {
    podcastDetails: podcastDetails,
    episodes: episodes,
    timestamp: currentTime
  };

  storedData[podcastId] = newPodcastData;
  
  localStorage.setItem(PODCAST_DETAIL_KEY, JSON.stringify(storedData));
};


export const getPodcastDetailStoraged = (podcastId: string) => {
  const storedDataJson = localStorage.getItem(PODCAST_DETAIL_KEY);

  if (storedDataJson) {
    const storedData = JSON.parse(storedDataJson);

    if (!storedData[podcastId]) {
      return null;
    }

    const podcastDetail = storedData[podcastId];
    const { timestamp } = podcastDetail;

    const currentTime = new Date().getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (currentTime - timestamp < oneDayInMilliseconds) {
      return podcastDetail;
    }
  }

  return null;
};
  