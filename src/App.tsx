import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.scss";
import { fetchTrendingFromRegion } from "./utils/DataFetcher";
import { Quote, Trending } from "./utils/types";
import { FetchMode } from "./constants/constants";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import {
  TrendingDataContext,
  RegionContext,
  QuoteDataContext,
} from "./utils/Context";
import { Regions } from "./constants/constants";
import StocksInfos from "./components/Stocks/StocksInfos/StocksInfos";
import { ReactComponent as RocketSvg } from "./icons/rocket.svg";

const App = () => {
  const [trendingData, setTrendingData] = useState<Trending>();
  const [quoteData, setQuoteData] = useState<Quote>();
  const [mode, setMode] = useState(FetchMode.Debug);
  const [region, setRegion] = useState("US" as Regions);

  // Init. Fetch default trending data on load and update if mode or region changes
  useEffect(() => {
    const fetchAsync = async () => {
      const data = await fetchTrendingFromRegion(region, mode);
      setTrendingData(data);
    };
    fetchAsync();
  }, [region, mode]);

  const getCurrentRegionName = useMemo(() => {
    let reg = Object.values(Regions).find((val) => {
      let index = Object.values(Regions).indexOf(val);
      return Object.keys(Regions)[index] === region;
    });
    // TODO: fallback because region state is initialized wrong
    return reg || region;
  }, [region]);

  return (
    <div className="app">
      <header className="app-header">
        <p className="rocket-icon d-none d-sm-block">
          <RocketSvg />
        </p>
        Stock infos from&nbsp;
        {getCurrentRegionName}&nbsp;
      </header>
      <TrendingDataContext.Provider value={[trendingData, setTrendingData]}>
        <QuoteDataContext.Provider value={[quoteData, setQuoteData]}>
          <RegionContext.Provider value={[region, setRegion]}>
            {mode === FetchMode.Debug && (
              <span className="col-6 mx-auto alert alert-warning" role="alert">
                Warning: Debug mode on, switch to API for live data
              </span>
            )}
            <StocksInfos mode={mode} />
            <ModeSelector handleModeChange={setMode} />
          </RegionContext.Provider>
        </QuoteDataContext.Provider>
      </TrendingDataContext.Provider>

      <footer className="app-footer">
        <span>
          Data fetched from&nbsp;
          <a className="link" href="https://www.yahoofinanceapi.com">
            Yahoo Finance API
          </a>
        </span>
      </footer>
    </div>
  );
};

export default App;
