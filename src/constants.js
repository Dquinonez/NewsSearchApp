const API_KEY = 'b622d9a9f41b4da6834df385e38a3dbd';
const API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&language=en&pageSize=10`;

const SORT_OPTIONS = [
  { display: "Date", value: "publishedAt" },
  { display: "Relevancy", value: "relevancy" },
  { display: "Popularity", value: "popularity"},
  { display: "None", value: "none"}
];

export {
  API_URL,
  SORT_OPTIONS
}