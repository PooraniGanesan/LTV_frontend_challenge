import axios from "axios";
const API_URL = "http://localhost:3000";

export const getTopUrls = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch URLs", error);
    throw error;
  }
};

export const createUrl = async(fullUrl) => {
  try {
    const response = await axios.post(`${API_URL}/short_urls.json`, {
    full_url: fullUrl
    })
    return response.data;
  } catch (error) {
    console.log("error", error)
    throw error;
  } 
}

