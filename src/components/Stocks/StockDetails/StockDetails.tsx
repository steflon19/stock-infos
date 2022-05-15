import moment from "moment";
import { useContext } from "react";
import { QuoteDataContext } from "../../../utils/Context";
import { bigNumConverter } from "../../../utils/Utils";

const StockDetails = () => {
  const [quoteData] = useContext(QuoteDataContext);

  const changeClassName = (change: number) => {
    return change > 0 ? "text-success" : "text-danger";
  };

  let innerDiv;
  if (quoteData === null || quoteData === undefined) {
    innerDiv = (
      <span>
        No detailed data available. Select a Ticker to display some insights
      </span>
    );
  } else {
    const {
      regularMarketPreviousClose,
      regularMarketOpen,
      regularMarketVolume,
      regularMarketDayRange,
      exchangeTimezoneName,
      fiftyTwoWeekRange,
      averageDailyVolume3Month,
      startDate,
      marketCap,
      circulatingSupply,
      regularMarketChange,
      fiftyDayAverageChange,
      twoHundredDayAverageChange,
      quoteType,
      symbol,
      coinImageUrl,
    } = quoteData;

    const coinIcon = coinImageUrl && (
      <img
        className="mx-3"
        style={{ height: 36 }}
        src={coinImageUrl}
        alt={symbol + "-icon"}
      />
    );
    //  : (
    //   <div className={coinIconClassNames} style={{ height: 32 }} />
    // );

    const entryClassNames = "d-flex justify-content-between mx-3 mx-lg-5";
    const columnClassNames =
      "d-flex col-11 col-sm-5 flex-column bg-light rounded";

    innerDiv = (
      <div>
        <h4>
          {coinIcon}
          Details for {symbol}
        </h4>
        <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-around">
          <div className={columnClassNames}>
            <div className={entryClassNames}>
              <span>Previous Close:</span>
              <span>{regularMarketPreviousClose}</span>
            </div>
            <span className="divider" />
            <div className={entryClassNames}>
              <span>Open</span>
              <span>{regularMarketOpen}</span>
            </div>
            <span className="divider" />
            <div className={entryClassNames}>
              <span>Market Change</span>
              <span className={changeClassName(regularMarketChange)}>
                {regularMarketChange}
              </span>
            </div>
            <span className="divider" />
            <div className={entryClassNames}>
              <span>50 day Change</span>
              <span className={changeClassName(fiftyDayAverageChange)}>
                {fiftyDayAverageChange}
              </span>
            </div>
            <span className="divider" />
            <div className={entryClassNames}>
              <span>200 day Change</span>
              <span className={changeClassName(twoHundredDayAverageChange)}>
                {twoHundredDayAverageChange}
              </span>
            </div>
            {marketCap && (
              <>
                <span className="divider" />
                <div className={entryClassNames}>
                  <span>Market Cap</span>
                  <span>{bigNumConverter(marketCap)}</span>
                </div>
              </>
            )}
            {circulatingSupply && (
              <>
                <span className="divider" />
                <div className={entryClassNames}>
                  <span>Circulating Supply</span>
                  <span>{bigNumConverter(circulatingSupply)}</span>
                </div>
              </>
            )}
            {startDate && (
              <>
                <span className="divider" />
                <div className={entryClassNames}>
                  <span>Start date</span>
                  <span>{moment.unix(startDate).format("YYYY-MM-DD")}</span>
                </div>
              </>
            )}
          </div>
          <div className={columnClassNames}>
            <div className={entryClassNames}>
              <span>Day's range</span>
              <span>{regularMarketDayRange}</span>
            </div>
            <span className="divider" />
            <div className={entryClassNames}>
              <span>52 week range</span>
              <span>{fiftyTwoWeekRange}</span>
            </div>
            <span className="divider" />
            <div className={entryClassNames}>
              <span>Exchange TZ</span>
              <span>{exchangeTimezoneName}</span>
            </div>
            <span className="divider" />
            <div className={entryClassNames}>
              <span>Quote Type</span>
              <span>{quoteType}</span>
            </div>
            <span className="divider" />
            <div className={entryClassNames}>
              <span>Volume</span>
              <span>{bigNumConverter(regularMarketVolume)}</span>
            </div>
            {averageDailyVolume3Month !== null && averageDailyVolume3Month > 0 && (
              <>
                <span className="divider" />
                <div className={entryClassNames}>
                  <span>30 day volume</span>
                  <span>{averageDailyVolume3Month}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
  return <div className="mt-3">{innerDiv}</div>;
};

export default StockDetails;
