import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import clipboardCopy from 'clipboard-copy';
import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxRounded from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRounded from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxSharp from '@mui/icons-material/CheckBoxSharp';
import CheckBoxOutlineBlankSharp from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function App() {
  const [selectedMode, setSelectedMode] = useState('0');
  const [selectedShape, setSelectedShape] = useState('0');
  const [selectedSize, setSelectedSize] = useState('0');
  const [selectedDirect, setSelectedDirect] = useState('0');
  const [isLabelCheckboxEnabled, setIsLabelCheckboxEnabled] = useState(true);
  const [isCheckboxText, setIsCheckboxText] = useState(true);
  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const [isLabelText, setIsLabelText] = useState(true);
  const [isIconChecked, setIsIconChecked] = useState(false);
  const [isIconText, setIsIconText] = useState(false);
  const [isCustomChecked, setIsCustomChecked] = useState(false);
  const [isCustomText, setIsCustomText] = useState(false);

  const getDivDemoStyle = () => {
    if (selectedMode === '2') {
      return {
        backgroundColor: 'black',
      };
    } else if (selectedMode === '3') {
      return {
        backgroundColor: 'black',
      };
    } else {
      return {
        backgroundColor: 'white',
      };
    }
  };

  const getLabelColorStyle = () => {
    if (selectedMode === '2') {
      return {
        color: 'white',
      };
    } else if (selectedMode === '3') {
      return {
        color: 'yellow',
      };
    } else {
      return {
        color: 'initial',
      };
    }
  };

  const getBoxColorStyle = () => {
    if (selectedMode === '2') {
      return {
        color: '#4dabf5',
      };
    } else if (selectedMode === '3') {
      return {
        color: 'yellow',
      };
    } else {
      return {
        color: '',
      };
    }
  };


  useEffect(() => {

  }, [selectedMode]);

  useEffect(() => {

  }, [selectedShape]);

  useEffect(() => {

  }, [selectedSize]);

  useEffect(() => {

  }, [selectedDirect]);



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

  const handleLabelCheckboxChange = (event) => {
    setIsLabelVisible(event.target.checked);
    setIsLabelText(event.target.checked);
  };

  const handleDisabledChange = (event) => {
    setIsLabelCheckboxEnabled(!event.target.checked);
    setIsCheckboxText(!event.target.checked);
  };

  const handleIconCheckboxChange = (event) => {
    setIsIconChecked(event.target.checked);
    setIsIconText(event.target.checked);
  };

  const handleCustomColorChange = (event) => {
    setIsCustomChecked(event.target.checked);
    setIsCustomText(event.target.checked);
  };


  const copyToClipboard = () => {
    const codeArea = document.querySelector('.codeArea');
    if (codeArea) {
      clipboardCopy(codeArea.textContent);
      setOpen(true);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
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
    <div>
      <div class="w-75 p-3 bg-light">
        <nav class="navbar navbar-light bg-light">
          <ul class="nav">
            <li class="nav-item select">
              <select
                className="custom-select"
                id="modeSelect"
                onChange={handleModeChange}
                value={selectedMode}
              >
                <option selected>Modes</option>
                <option value="1">Light</option>
                <option value="2">Dark</option>
                <option value="3">High Contrast</option>
              </select>
            </li>
            <li class="nav-item select">
              <select
                className="custom-select"
                id="shapeSelect"
                onChange={handleShapeChange}
                value={selectedShape}
              >
                <option selected>Shapes</option>
                <option value="1">Round</option>
                <option value="2">Sharp</option>
              </select>
            </li>
            <li class="nav-item select">
              <select
                className="custom-select"
                id="densitySelect"
                onChange={handleSizeChange}
                value={selectedSize}
              >
                <option selected>Size</option>
                <option value="1">Medium</option>
                <option value="2">Small</option>
              </select>
            </li>
            <li class="nav-item select">
              <select
                class="custom-select"
                id="directionSelect"
                onChange={handleDirectChange}
                value={selectedDirect}
              >
                <option selected>Direction</option>
                <option value="1">Right to Left</option>
                <option value="2">Left to Right</option>
              </select>
            </li>
          </ul>
        </nav>

        <div class="d-flex bd-highlight">
          <div class="p-2 flex-grow-1 bd-highlight divDemo" style={{ height: "450px", backgroundColor: "white" }}>

            <div class="divDemo" style={{ height: "450px", width: "860px", backgroundColor: "white", ...getDivDemoStyle() }}>
              <FormGroup>
                <FormControlLabel
                  labelPlacement={selectedDirect === '2' ? 'start' : 'end'}
                  disabled={!isLabelCheckboxEnabled}
                  style={{ color: isCustomChecked ? 'purple' : getLabelColorStyle().color }}
                  control={
                    <Checkbox
                      defaultChecked
                      style={{ ...getBoxColorStyle() }}
                      size={selectedSize === '2' ? 'small' : 'medium'}
                      icon={isIconChecked ? (<FavoriteBorder style={{ color: isCustomChecked ? 'purple' : '' }} />) : (selectedShape === '2' ? (<CheckBoxOutlineBlankSharp style={{ color: isCustomChecked ? 'purple' : '' }} />) : (<CheckBoxOutlineBlankRounded style={{ color: isCustomChecked ? 'purple' : '' }} />))}
                      checkedIcon={isIconChecked ? (<Favorite style={{ color: isCustomChecked ? 'purple' : '' }} />) : (selectedShape === '2' ? (<CheckBoxSharp style={{ color: isCustomChecked ? 'purple' : '' }} />) : (<CheckBoxRounded style={{ color: isCustomChecked ? 'purple' : '' }} />))}
                    />
                  }
                  label={isLabelVisible && "Label"}
                />
              </FormGroup>
            </div>

          </div>

          <div class="p-2 bd-highlight">
            <p style={{ fontSize: "16px", color: "gray" }}>MODIFIERS</p>
            <FormGroup>
              <FormControlLabel
                disabled={!isIconChecked}
                control={
                  <Checkbox
                    onChange={handleCustomColorChange}
                  />
                }
                label="Custom Color"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onChange={handleLabelCheckboxChange}
                  />
                }
                label="Label"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleDisabledChange}
                  />
                }
                label="Disabled"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleIconCheckboxChange}
                  />
                }
                label="Icon"
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div class="w-75 p-3 bg-light" style={{ height: "250px", backgroundColor: "white", display: "block" }}>
        <div class="d-flex">
          <div class="codeArea flex-grow-1" style={{ height: "200px", backgroundColor: "white", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ol style={{ fontSize: "16px", margin: "20px" }}>
                <li><span style={{ color: "#4dabf5", marginLeft: "20px" }}>{'<Checkbox'}</span></li>
                <li><span style={{ color: "#4dabf5", marginLeft: "30px" }}>defaultChecked</span></li>
                {!isCheckboxText && (
                  <li><span style={{ color: "#4dabf5", marginLeft: "30px" }}>disabled</span></li>
                )}
                {isIconText && (
                  <li><span style={{ color: "#4dabf5", marginLeft: "30px" }}>icon={'{<Favorite />}'}</span></li>
                )}
                <li><span style={{ color: "#4dabf5", marginLeft: "30px" }}>id="checkbox"</span></li>
                {isLabelText && (
                  <li><span style={{ color: "#4dabf5", marginLeft: "30px" }}>label="Label"</span></li>
                )}
                {isCustomText && (
                  <li><span style={{ color: "#4dabf5", marginLeft: "30px" }}>color="colorPurple"</span></li>
                )}
                <li><span style={{ color: "#4dabf5", marginLeft: "20px" }}>{'/>'}</span></li>
              </ol>
              <Tooltip title="Copiar" placement="left">
                <IconButton
                  aria-label="copiar"
                  onClick={copyToClipboard}
                  style={{ alignSelf: "flex-start", margin: "20px" }}>
                  <ContentCopyIcon />
                </IconButton>
                <Snackbar 
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                action={action}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Copiado com sucesso!
                  </Alert>
                </Snackbar>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

