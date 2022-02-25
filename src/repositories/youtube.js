import axios from "axios";

const KEY = "AIzaSyDSOFW07nkeGk2JCcoEQvDUu9WcZJ1ZanU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
