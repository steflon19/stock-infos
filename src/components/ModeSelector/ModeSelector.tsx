import { useState } from "react";
import {
  ButtonGroup,
  OverlayTrigger,
  Popover,
  PopoverBody,
  ToggleButton,
} from "react-bootstrap";
import { FetchMode } from "../../constants/constants";
import DataChooser from "../DataChooser/DataChooser";
import { ReactComponent as InfoSvg } from "./../../icons/info-circle.svg";

interface ModeSelectorProps {
  handleModeChange: any;
}

const ModeSelector = (props: ModeSelectorProps) => {
  const { handleModeChange } = props;
  const [currentMode, setCurrentMode] = useState(FetchMode.Debug);
  const handleSelectorModeChange = (e: any) => {
    handleModeChange(e.target.value);
    setCurrentMode(e.target.value);
  };

  const popover = (
    <Popover id="mode-selector-popover" className="mode-selector">
      <Popover.Header as="h3">Select Data source</Popover.Header>
      <PopoverBody className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <ButtonGroup className="align-items-center">
            <ToggleButton
              id={`radio-mode-0`}
              type="radio"
              variant="secondary"
              value={FetchMode.Debug}
              checked={currentMode === FetchMode.Debug}
              onChange={handleSelectorModeChange}
            >
              Debug
            </ToggleButton>
            <ToggleButton
              id={`radio-mode-1`}
              type="radio"
              variant="secondary"
              value={FetchMode.Api}
              checked={currentMode === FetchMode.Api}
              onChange={handleSelectorModeChange}
            >
              Api
            </ToggleButton>
          </ButtonGroup>

          <DataChooser />
        </div>
      </PopoverBody>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
      <button
        type="button"
        className="mode-selector-toggle btn btn-primary w-auto mode-selector"
      >
        <InfoSvg className="m-auto" />
        {/* <i className="p-icon--information" /> */}
      </button>
    </OverlayTrigger>
  );
};

export default ModeSelector;
