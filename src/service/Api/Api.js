import axios from "axios";

const KEY = `32864704-452bc80cd1d54b0d80b41f947`;
export const PER_PAGE = 12;
const OPTIONS = `image_type=photo&orientation=horizontal&safesearch=true&`;
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchImg = async (query, page) => {
  const data = await axios.get(
    `?key=${KEY}&q=${query}&page=${page}&image_type=${OPTIONS}&per_page=${PER_PAGE}`
  );
  // return data;
  const { hits, totalHits } = data.data;
  if (data.status === 200) {
    return { hits, totalHits };
  } else {
    throw new Error(data.statusText);
  }

}

