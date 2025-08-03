export const getImageUrl = (path) => {
    // In development, include the base path from vite.config.js
    // In production, use relative path
    const url = import.meta.env.DEV ? `/VictorFromTheInternet/assets/${path}` : `assets/${path}`;
    console.log('Image URL:', url);
    return url;
}