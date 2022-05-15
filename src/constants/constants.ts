const ApiBase: string = "https://yfapi.net/";
export const ApiBaseTrending: string = ApiBase + "v1/finance/trending/";
export const ApiBaseInsights: string =
  ApiBase + "ws/insights/v1/finance/insights?symbol=";
export const ApiBaseQuote: string = ApiBase + "v6/finance/quote?lang=en&";
export const ApiBaseRecommendation: string =
  ApiBase + "v6/finance/recommendationsbysymbol/";

export const ApiKey: string = "Wp5om0JFTh7N4PlD7pYpM7OsxZiUqjFAac03KAjC";

export enum Regions {
  US = "United States",
  AU = "Australia",
  CA = "Canada",
  FR = "France",
  DE = "Germany",
  HK = "Hong Kong",
  IT = "Italy",
  ES = "Spain",
  GB = "United Kingdom",
  IN = "India",
}

export enum FetchMode {
  Debug = "debug",
  Api = "api",
}

// export const Regions: Map<string, string> = new Map([
//   ["US", "United States"],
//   ["AU", "Australia"],
//   ["CA", "Canada"],
//   ["FR", "France"],
//   ["DE", "Germany"],
//   ["HK", "Hong Kong"],
//   ["IT", "Italy"],
//   ["ES", "Spain"],
//   ["GB", "United Kingdom"],
//   ["IN", "India"],
// ]);
