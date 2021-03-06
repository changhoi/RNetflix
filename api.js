import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'd926e144d0d90071df75d9c59730aff9',
    language: 'ko-KR'
  }
});

export const movieApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  search: term =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  airingThisWeek: () => api.get('tv/on_the_air'),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  search: term =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
