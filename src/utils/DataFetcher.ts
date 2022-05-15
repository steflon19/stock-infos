import {
  ApiBaseQuote,
  // ApiBaseRecommendation,
  ApiBaseTrending,
  ApiKey,
  Regions,
} from "../constants/constants";
import _ from "lodash";
import { FetchedData, Quote, Trending } from "./types";
import { FetchMode } from "../constants/constants";

const fetchFromApi = async (url: string): Promise<FetchedData> => {
  const requestUrl = url;
  let dataRaw = await fetch(requestUrl, {
    method: "GET",
    headers: {
      "x-api-key": ApiKey,
    },
  })
    .then((data) => {
      return data;
    })
    .catch((e) =>
      Promise.reject("An error occured fetching from the API: " + e)
    );
  let data = await dataRaw.json();

  return data;
};

const fetchFromFile = async (path: string) => {
  let url = "";
  if (path.includes("insight")) {
    url = "testdata/insights.json";
  } else if (path.includes("recommendation")) {
    url = "testdata/recommendation.json";
  } else if (path.includes("quote")) {
    url = "testdata/quote.json";
  } else {
    url = "testdata/trending.json";
  }

  return fetch(url, {
    cache: "default",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((e) => console.error("an error occured: " + e.message));
};

export const testFetchData = async (
  region: Regions,
  mode: FetchMode
): Promise<FetchedData> => {
  // return await fetchFromApi(ApiBaseTrending, "DE");
  // return await fetchFromApi(ApiBaseRecommendation, "SONO");
  // const url = ApiBaseRecommendation + "ETH-USD";
  // const url = encodeURI(ApiBaseInsights + "^DJI");
  const url = encodeURI(ApiBaseTrending + region);
  if (mode === FetchMode.Debug) {
    return await fetchFromFile(url)
      .then((data) => {
        return data;
      })
      .catch((e) =>
        Promise.reject("an error occured fetching from file: " + e)
      );
  } else {
    return await fetchFromApi(url);
  }
};

export const fetchTrendingFromRegion = async (
  region: Regions,
  mode: FetchMode
): Promise<Trending> => {
  const url = encodeURI(ApiBaseTrending + region);
  let data;
  if (mode === FetchMode.Debug) {
    data = await fetchFromFile(url)
      .then((data) => data)
      .catch((e) =>
        Promise.reject("an error occured fetching from file: " + e)
      );
  } else {
    data = await fetchFromApi(url).then((data) => {
      return data;
    });
  }
  return _.get(data, "finance.result");
};

export const fetchQuoteForSymbol = async (
  region: Regions,
  symbol: string,
  mode: FetchMode
): Promise<Quote> => {
  const url = encodeURI(
    ApiBaseQuote + "region=" + region + "&symbols=" + symbol
  );
  let data;
  if (mode === FetchMode.Debug) {
    data = await fetchFromFile(url)
      .then((data) => data)
      .catch((e) =>
        Promise.reject("an error occured fetching from file: " + e)
      );
  } else {
    data = await fetchFromApi(url)
      .then((data) => data)
      .catch((e) => Promise.reject("an error occured fetching from API: " + e));
  }
  // Could contain results from multiple quotes, we are just interested in one result as we only every query one currently
  return _.get(data, "quoteResponse.result")?.[0];
};
