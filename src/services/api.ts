import axios from 'axios';
import { Entry, Podcast } from '../types';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/'; 
const API_BASE_URL = 'https://itunes.apple.com/'; 

export const getTopPodcasts = async (): Promise<Podcast[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}us/rss/toppodcasts/limit=100/genre=1310/json`);
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