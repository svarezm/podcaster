export const formatReleaseDate = (releaseDateIsoString: string): string => {
    const releaseDate = new Date(releaseDateIsoString);
    const formattedDate = releaseDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    return formattedDate;
};