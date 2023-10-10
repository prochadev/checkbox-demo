import "./Home.css";
import React, { useContext, useState, useEffect } from "react";
import Select from "../../src/components/Select";
import Checkbox from "../../src/components/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import clipboardCopy from "clipboard-copy";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ContentCopy from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import { HomeContext } from "./contexts/home";

export function App() {
  const {
    selectedMode,
    selectedShape,
    selectedSize,
    isDisabled,
    isIcon,
    selectedDirect,
    isLabelVisible,
    isCustomColor,
  } = useContext(HomeContext);

  const getDivDemoStyle = () => {
    return {
      backgroundColor:
        selectedMode === "2" || selectedMode === "3" ? "black" : "",
    };
  };

  const getBoxStyle = () => {
    return {
      color:
        selectedMode === "2" ? "#fff" : selectedMode === "3" ? "yellow" : "",
      width:
        selectedSize === "2" ? "10px" : "",
      height:
        selectedSize === "2" ? "10px" : "",
      borderRadius: 
        selectedShape === "2" ? "0" : ""
    };
  };


  return (
    <>
      <div className="w-75 p-3">
        <Modes />
        <div className="d-flex bd-highlight">
          <div
            className="p-2 flex-grow-1 bd-highlight divDemo"
            style={{ height: "450px", backgroundColor: "white" }}
          >
            <div
              className="divDemo"
              style={{
                height: "450px",
                width: "860px",
                backgroundColor: "white",
                ...getDivDemoStyle(),
              }}
            >
              <Checkbox
                label={isLabelVisible && "Label"}
                labelPlacement={selectedDirect === "2" ? "left" : "right"}
                disabled={isDisabled}
                style={{
                  ...getBoxStyle()
                }}
                icon={isIcon && <FavoriteBorder style={{ color: isCustomColor ? 'purple' : '' }} />}
              />
            </div>
          </div>
          <Modifiers />
        </div>
      </div>
      <Code />
    </>
  );
}

export const Code = () => {

    const {
        isDisabled,
        isIcon,
        isLabelVisible,
        isCustomColor,
      } = useContext(HomeContext);

      const copyToClipboard = () => {
        const codeArea = document.querySelector(".codeArea");
        if (codeArea) {
          clipboardCopy(codeArea.textContent);
          setOpen(true);
        }
      };
    
      const [open, setOpen] = useState(false);
    
      const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setOpen(false);
      };
    
      const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

  return (
    <div
      className="w-75 p-3 bg-light"
      style={{ height: "250px", backgroundColor: "white", display: "block" }}
    >
      <div className="d-flex">
        <div
          className="codeArea flex-grow-1"
          style={{
            height: "200px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ol style={{ fontSize: "16px", margin: "20px" }}>
              <li>
                <span style={{ color: "#4dabf5", marginLeft: "20px" }}>
                  {"<Checkbox"}
                </span>
              </li>
              <li>
                <span style={{ color: "#4dabf5", marginLeft: "30px" }}>
                  defaultChecked
                </span>
              </li>
              {isDisabled && (
                <li>
                  <span style={{ color: "#4dabf5", marginLeft: "30px" }}>
                    disabled
                  </span>
                </li>
              )}
              {isIcon && (
                <li>
                  <span style={{ color: "#4dabf5", marginLeft: "30px" }}>
                    icon={"{<Favorite />}"}
                  </span>
                </li>
              )}
              <li>
                <span style={{ color: "#4dabf5", marginLeft: "30px" }}>
                  id="checkbox"
                </span>
              </li>
              {isLabelVisible && (
                <li>
                  <span style={{ color: "#4dabf5", marginLeft: "30px" }}>
                    label="Label"
                  </span>
                </li>
              )}
              {isCustomColor && (
                <li>
                  <span style={{ color: "#4dabf5", marginLeft: "30px" }}>
                    customColor="colorPurple"
                  </span>
                </li>
              )}
              <li>
                <span style={{ color: "#4dabf5", marginLeft: "20px" }}>
                  {"/>"}
                </span>
              </li>
            </ol>
            <Tooltip title="Copiar" placement="left">
              <IconButton
                aria-label="copiar"
                onClick={copyToClipboard}
                style={{ alignSelf: "flex-start", margin: "20px" }}
              >
                <ContentCopy />
              </IconButton>
            </Tooltip>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              action={action}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Copiado com sucesso!
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Modifiers = () => {
  const {
    setIsLabelVisible,
    setIsDisabled,
    setIsIcon,
    setIsCustomColor,
    isIcon,
    isLabelVisible,
    isCustomColor
  } = useContext(HomeContext);

  const handleLabelCheckboxChange = (event) => {
    setIsLabelVisible(event.target.checked);
  };

  const handleDisabledChange = (event) => {
    setIsDisabled(event.target.checked);
  };

  const handleIconCheckboxChange = (event) => {
    setIsIcon(event.target.checked);
  };

  const handleCustomColorChange = (event) => {
    setIsCustomColor(event.target.checked);
  };

  return (
    <div className="p-2 bd-highlight">
      <p style={{ fontSize: "16px", color: "gray" }}>MODIFIERS</p>

      <Checkbox
        label="Custom Color" 
        onChange={handleCustomColorChange}
        disabled={!isIcon}
        checked={isCustomColor}
      />

      <Checkbox
        label="Label"
        onChange={handleLabelCheckboxChange}
        checked={isLabelVisible}
      />

      <Checkbox 
        label="Disabled" 
        onChange={handleDisabledChange} 
      />

      <Checkbox 
        label="Icon" 
        onChange={handleIconCheckboxChange} 
      />
    </div>
  );
};

export const Modes = () => {
  const {
    selectedMode,
    selectedShape,
    selectedSize,
    selectedDirect,
    setSelectedMode,
    setSelectedShape,
    setSelectedSize,
    setSelectedDirect,
  } = useContext(HomeContext);

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleDirectChange = (event) => {
    setSelectedDirect(event.target.value);
  };

  const modeOptions = [
    { label: "Modes", value: "0" },
    { label: "Light", value: "1" },
    { label: "Dark", value: "2" },
    { label: "High Contrast", value: "3" },
  ];

  const shapeOptions = [
    { label: "Shapes", value: "0" },
    { label: "Round", value: "1" },
    { label: "Sharp", value: "2" },
  ];

  const sizeOptions = [
    { label: "Size", value: "0" },
    { label: "Medium", value: "1" },
    { label: "Small", value: "2" },
  ];

  const directionOptions = [
    { label: "Direction", value: "0" },
    { label: "Right to Left", value: "1" },
    { label: "Left to Right", value: "2" },
  ];

  return (
    <div className="navbar navbar-light">
      <Select
        id="modeSelect"
        value={selectedMode}
        onChange={handleModeChange}
        options={modeOptions}
      />

      <Select
        id="shapeSelect"
        value={selectedShape}
        onChange={handleShapeChange}
        options={shapeOptions}
      />

      <Select
        id="densitySelect"
        value={selectedSize}
        onChange={handleSizeChange}
        options={sizeOptions}
      />

      <Select
        id="directionSelect"
        value={selectedDirect}
        onChange={handleDirectChange}
        options={directionOptions}
      />
    </div>
  );
};
