import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        import.meta.env.VITE_SHAZAM_RAPID_API_KEY,
        // 'X-RapidAPI-Host',
        // 'shazam.p.rapidapi.com',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/track',
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/get-details?id=${artistId}`,
    }),
    getRelatedSongs: builder.query({
      query: ({ songid }) => `/songs/list-recommendations?key=${songid}`,
    }),
    getArtistTopSongs: builder.query({
      query: (artistId) => `/artists/get-top-songs?id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (country) => `/charts/track?listId=ip-country-chart-${country}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}&type=track`,
    }),
    search: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}&type=track`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistTopSongsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useSearchQuery,
} = shazamApi;
