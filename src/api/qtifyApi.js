import axios from "axios";

const API_BASE_URL = "https://qtify-backend.labs.crio.do";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Fetch top albums
export const fetchTopAlbums = async () => {
  try {
    const response = await axiosInstance.get("/albums/top");
    return response.data;
  } catch (error) {
    console.error("Error fetching top albums:", error);
    throw error;
  }
};

// Fetch new albums
export const fetchNewAlbums = async () => {
  try {
    const response = await axiosInstance.get("/albums/new");
    return response.data;
  } catch (error) {
    console.error("Error fetching new albums:", error);
    throw error;
  }
};

// Fetch all genres
export const fetchGenres = async () => {
  try {
    const response = await axiosInstance.get("/genres");
    return response.data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};

// Fetch all songs
export const fetchSongs = async () => {
  try {
    const response = await axiosInstance.get("/songs");
    return response.data;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};

export default axiosInstance;
