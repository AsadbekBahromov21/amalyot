import { api } from "../api/index";
const carschApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCarsByQuery: build.query({
      query: () => ({
        url: `/cars`,
      }),
    }),
  }),
});
export const { useGetCarsByQueryQuery } = carschApi;
