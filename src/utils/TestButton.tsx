import { fetchTrendingFromRegion } from "./DataFetcher";
import React, { useContext } from "react";
import { TrendingDataContext } from "./Context";
import { FetchMode } from "../constants/constants";
import { Regions } from "../constants/constants";

interface TestButtonProps {
  mode: FetchMode;
}

const TestButton = (props: TestButtonProps) => {
  const [, setTrendingData] = useContext(TrendingDataContext);

  const testFetch = async (mode: FetchMode) => {
    const data = await fetchTrendingFromRegion(Regions.US, mode);
    setTrendingData(data);
  };

  return (
    <button
      type="button"
      className="btn btn-secondary mt-2 mx-auto w-auto"
      onClick={() => testFetch(props.mode)}
    >
      Try
    </button>
  );
};

export default TestButton;
