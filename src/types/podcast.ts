export type Podcast = {
    id: string;
    name: string;
    artist: string;
    image: any;
}

export type PodcastDetails = {
    id: string;
    title: string;
    artistName: string;
    collectionName: string;
    genre: string;
    releaseDate: string;
    description: string;
    artwork: string;
    trackCount: string;
}

export type Episode = {
    previewUrl: string;
    artworkUrl60: string;
    artworkUrl160: string;
    artworkUrl600: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    episodeFileExtension: string;
    episodeContentType: string;
    trackTimeMillis: number;
    contentAdvisoryRating: string;
    feedUrl: string;
    artistIds: number[];
    closedCaptioning: string;
    collectionId: number;
    collectionName: string;
    genres: Genre[];
    episodeGuid: string;
    description: string;
    releaseDate: string;
    shortDescription: string;
    trackId: number;
    trackName: string;
    country: string;
    episodeUrl: string;
    kind: string;
    wrapperType: string;
}

export type Genre = {
    name: string;
    id: string;
}

export type Result = {
    resultCount: number;
    results: (Podcast | Episode)[];
}
