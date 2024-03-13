const LOCAL_STORAGE_KEY = 'podcastsData';

export const savePodcastsData = (data: any) => {
  const currentTime = new Date().getTime();
  const dataToStore = { data, timestamp: currentTime };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToStore));
};

export const getPodcastsData = () => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
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
