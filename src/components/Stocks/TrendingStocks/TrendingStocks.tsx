import { useContext } from "react";
import {
  QuoteDataContext,
  RegionContext,
  TrendingDataContext,
} from "../../../utils/Context";
import { fetchQuoteForSymbol } from "../../../utils/DataFetcher";
import { Symbol } from "../../../utils/types";
import { FetchMode } from "../../../constants/constants";
import TestButton from "../../../utils/TestButton";

interface TrendingStocksProps {
  mode: FetchMode;
}

const TrendingStocks = (props: TrendingStocksProps) => {
  const { mode } = props;
  const [trendingData] = useContext(TrendingDataContext);
  const [, setQuoteData] = useContext(QuoteDataContext);
  const [region] = useContext(RegionContext);
  const quotes: [Symbol] | undefined = trendingData?.[0]?.quotes;

  const onSymbolClick = async (symbol: string) => {
    let d = await fetchQuoteForSymbol(region, symbol, mode);
    setQuoteData(d);
  };

  // switching debug and API modes can result in invalid data in context. missusing testbutton for "refresh" of dummy data..
  let div = (
    <span className="p-heading--3">
      <i className="p-icon--error"></i>&nbsp;Sorry, no Data available. It might
      be still fetching or you can try reloading the page?
      <TestButton mode={mode} />
    </span>
  );

  if (quotes !== null && quotes !== undefined) {
    div = (
      <>
        <h3>Check out one of the currently trending stocks</h3>
        <div>
          {quotes.map((data: Symbol, i: number) => {
            return (
              <button
                type="button"
                className="btn btn-secondary shadow-sm mx-1 my-1"
                key={data.symbol + i}
                onClick={() => onSymbolClick(data.symbol)}
              >
                {data.symbol}
              </button>
            );
          })}
        </div>
      </>
    );
  }

  return div;
};

export default TrendingStocks;
