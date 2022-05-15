import { createContext } from "react";
import { Regions } from "../constants/constants";
import { ContextType, Insights, Quote, Trending } from "./types";
// import { FetchedData } from "./types";

// TODO: check for proper typing
export const TrendingDataContext = createContext<
  ContextType<Trending | undefined>
>(null as any);
export const InsightDataContext = createContext<ContextType<Insights>>(
  null as any
);
export const QuoteDataContext = createContext<ContextType<Quote | undefined>>(
  null as any
);
export const RegionContext = createContext<ContextType<Regions>>(null as any);

// interface Props {
//   children?: React.ReactNode;
// }

// export const DataContextProvider = (props: Props) => {
//   return <DataContext.Provider value={}>{props.children}</DataContext.Provider>;
// };
