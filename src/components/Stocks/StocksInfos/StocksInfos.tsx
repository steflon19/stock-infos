import { FetchMode } from "../../../constants/constants";
import StockDetails from "../StockDetails/StockDetails";
import TrendingStocks from "../TrendingStocks/TrendingStocks";

interface StocksInfosProps {
  mode: FetchMode;
}
const StocksInfos = (props: StocksInfosProps) => {
  const { mode } = props;
  return (
    <>
      <TrendingStocks mode={mode} />
      <StockDetails />
    </>
  );
  //   return <>StocksInfos</>;
};

export default StocksInfos;
