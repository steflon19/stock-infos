import { useContext, useEffect } from "react";
import { Regions } from "../../constants/constants";
import { RegionContext } from "../../utils/Context";

type DataChooserProps = {
  handleLocationChange?: (l: string) => void;
};

const DataChooser = (props: DataChooserProps) => {
  const { handleLocationChange } = props;
  const [currentRegion, setCurrentRegion] = useContext(RegionContext);

  useEffect(() => {
    handleLocationChange?.(currentRegion);
  }, [currentRegion, handleLocationChange]);

  const handleSelectorLocationChange = (e: any) => {
    setCurrentRegion(Object.keys(Regions)[e.target.value] as Regions);
  };

  return (
    <div className="d-flex justify-content-center flex-wrap w-50 mx-auto">
      <select
        className="form-select btn-secondary w-auto mt-2"
        onChange={handleSelectorLocationChange}
      >
        {Object.values(Regions).map((item, i) => {
          return (
            <option key={i} value={i}>
              <>{item}</>
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DataChooser;
