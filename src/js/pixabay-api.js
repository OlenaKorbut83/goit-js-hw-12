import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47588447-b6614111152463e9a843ad075';

export async function searchImage(query, page = 1) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });

  const url = `${BASE_URL}?${params}`;
  const response = await axios.get(url);
  return response.data;
}
