export type FetchedData =
  | {
      finance?: {
        result: Trending | Insights | Recommendation | Quote;
        error?: null;
      };
    }
  | Quote
  | null;

export type Trending = [
  {
    count: number;
    jobTimestamp: number;
    startInterval: number;
    quotes?: [Symbol];
  }
];

export type Symbol = {
  symbol: string;
};

export type Quote = {
  ask: number;
  askSize: number;
  averageDailyVolume10Day: number;
  averageDailyVolume3Month: number;
  startDate: 1438905600;
  bid: number;
  bidSize: number;
  bookValue: number;
  coinImageUrl: string;
  currency: string;
  displayName: string;
  dividendDate: number;
  earningsTimestamp: number;
  earningsTimestampEnd: number;
  earningsTimestampStart: number;
  epsCurrentYear: number;
  epsForward: number;
  epsTrailingTwelveMonths: number;
  esgPopulated: boolean;
  exchange: string;
  exchangeDataDelayedBy: number;
  exchangeTimezoneName: string;
  exchangeTimezoneShortName: string;
  fiftyDayAverage: number;
  fiftyDayAverageChange: number;
  fiftyDayAverageChangePercent: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekLowChangePercent: number;
  fiftyTwoWeekRange: string;
  financialCurrency: string;
  firstTradeDateMilliseconds: number;
  forwardPE: number;
  fullExchangeName: string;
  gmtOffSetMilliseconds: number;
  language: string;
  longName: string;
  market: string;
  marketCap: number;
  marketState: string;
  messageBoardId: string;
  postMarketChange: number;
  postMarketChangePercent: number;
  postMarketPrice: number;
  postMarketTime: number;
  priceEpsCurrentYear: number;
  priceHint: number;
  circulatingSupply: number;
  priceToBook: number;
  quoteSourceName: string;
  quoteType: string;
  region: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketDayRange: string;
  regularMarketOpen: number;
  regularMarketPreviousClose: number;
  regularMarketPrice: number;
  regularMarketTime: number;
  regularMarketVolume: number;
  sharesOutstanding: number;
  shortName: string;
  sourceInterval: number;
  symbol: string;
  tradeable: boolean;
  trailingAnnualDividendRate: number;
  trailingAnnualDividendYield: number;
  trailingPE: number;
  triggerable: boolean;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
};

export type Insights = {
  symbol: string;
  instrumentInfo: {
    technicalEvents: {
      provider: string;
      shortTerm: string;
      midTerm: string;
      longTerm: string;
    };
    keyTechnicals: {
      provider: string;
      support: number;
      resistance: number;
      stopLoss: number;
    };
    valuation: {
      color: number;
      description: string;
      discount: string;
      provider: string;
    };
  };
  reports?: [
    {
      id: string;
      provider: string;
      summary: string;
      title: string;
    }
  ];
  companySnapshot: {
    sectorInfo: string;
    company: {
      insiderSentiments: number;
      earningsReports: number;
    };
    sector: {
      innovativeness: number;
      hiring: number;
      sustainability: number;
      insiderSentiments: number;
      earningsReport: number;
      dividends: number;
    };
  };
};

export type Recommendation = [
  {
    symbol: string;
    recommendedSymbols?: [
      {
        symbol: string;
        score: number;
      }
    ];
  }
];

export type ContextType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
