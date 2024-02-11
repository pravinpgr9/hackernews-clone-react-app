import axios from "axios";
import { BASE_API_URL } from "./constants";

const getStory = async (id) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return response.data; // Return the data instead of the entire response
  } catch (error) {
    console.log(`Error while getting story ${id}:`, error);
    throw error; // Re-throw the error to propagate it
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );

    console.log(`${BASE_API_URL}/${type}stories.json`);

    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories:", error);
    throw error; // Re-throw the error to propagate it
  }
};
