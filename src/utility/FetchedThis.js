import axios from "axios";
const Base_Url = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: Base_Url,
  params: {
    part: "id, snippet",
    type: "video",
    maxResults: 50,
  },

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchedThis = async url => {
  const { data } = await axios.get(`${Base_Url}/${url}`, options);
  return data;
};
