import axios from 'axios';
import { Entry, Episode, Podcast, PodcastDetails } from '../types';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/'; 
const API_BASE_URL = 'https://itunes.apple.com/'; 

export const getTopPodcasts = async (): Promise<Podcast[]> => {
  try {
    const response = await axios.get(`${CORS_URL}${API_BASE_URL}us/rss/toppodcasts/limit=100/genre=1310/json`);
    const data: Entry[] = response.data.feed.entry;
    const podcasts: Podcast[] = data.map((entry: Entry) => ({
        id: entry.id.attributes['im:id'],
        name: entry['im:name'].label,
        artist: entry['im:artist'].label,
        image: entry['im:image'][2].label
    }));
    return podcasts;
  } catch (error) {
    console.error('Error fetching top podcasts:', error);
    throw error;
  }
};

export const getPodcastDetails = async (podcastId: string): Promise<{ podcastDetails: PodcastDetails, episodes: Episode[] }> => {
    try {
        const response = await axios.get(`${CORS_URL}${API_BASE_URL}lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode`);
        const data =  response.data.results[0];
        const podcastDetails: PodcastDetails = {
            id: data.id,
            title: data.trackName,
            artistName: data.artistName,
            collectionName: data.collectionName,
            genre: data.genre,
            releaseDate: data.releaseDate,
            description: data.description,
            artwork: data.artworkUrl600, 
            trackCount: data.trackCount
        };
        const episodes: Episode[] = response.data.results.slice(1);
        return { podcastDetails, episodes };
      } catch (error) {
        console.error('Error fetching podcast details:', error);
        throw error;
      }
};