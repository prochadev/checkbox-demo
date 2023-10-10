import './App.css';
import React, { useState } from 'react';
import Select from '../src/components/Select';
import Checkbox from '../src/components/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import clipboardCopy from 'clipboard-copy';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import CheckBoxRounded from '@mui/icons-material/CheckBoxRounded';
// import CheckBoxOutlineBlankRounded from '@mui/icons-material/CheckBoxOutlineBlankRounded';
// import CheckBoxSharp from '@mui/icons-material/CheckBoxSharp';
// import CheckBoxOutlineBlankSharp from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ContentCopy from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';

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
    return {
      backgroundColor: selectedMode === '2' || selectedMode === '3' ? 'black' : '',
    };
  };

  const getLabelColorStyle = () => {
    return {
      color: selectedMode === '2' ? '#fff' : selectedMode === '3' ? 'yellow' : '',
    };
  };

  const getBoxColorStyle = () => {
    return {
      color: selectedMode === '2' ? '#4dabf5' : selectedMode === '3' ? 'yellow' : '',
    };
  };


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


  const modeOptions = [
    { label: 'Modes', value: '0' },
    { label: 'Light', value: '1' },
    { label: 'Dark', value: '2' },
    { label: 'High Contrast', value: '3' },
  ];

  const shapeOptions = [
    { label: 'Shapes', value: '0' },
    { label: 'Round', value: '1' },
    { label: 'Sharp', value: '2' },
  ];

  const sizeOptions = [
    { label: 'Size', value: '0' },
    { label: 'Medium', value: '1' },
    { label: 'Small', value: '2' },
  ];

  const directionOptions = [
    { label: 'Direction', value: '0' },
    { label: 'Right to Left', value: '1' },
    { label: 'Left to Right', value: '2' },
  ];


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
      <div className="w-75 p-3 bg-light">
        <nav className="navbar navbar-light bg-light">
          <ul className="nav">
            <li className="nav-item select">
              <Select
                id="modeSelect"
                value={selectedMode}
                onChange={handleModeChange}
                options={modeOptions}
              />
            </li>
            <li className="nav-item select">
              <Select
                id="shapeSelect"
                value={selectedShape}
                onChange={handleShapeChange}
                options={shapeOptions}
              />
            </li>
            <li className="nav-item select">
              <Select
                id="densitySelect"
                value={selectedSize}
                onChange={handleSizeChange}
                options={sizeOptions}
              />
            </li>
            <li className="nav-item select">
              <Select
                id="directionSelect"
                value={selectedDirect}
                onChange={handleDirectChange}
                options={directionOptions}
              />
            </li>
          </ul>
        </nav>

        <div className="d-flex bd-highlight">
          <div
            className="p-2 flex-grow-1 bd-highlight divDemo"
            style={{ height: '450px', backgroundColor: 'white' }}
          >
            <div
              className="divDemo"
              style={{
                height: '450px',
                width: '860px',
                backgroundColor: 'white',
                ...getDivDemoStyle(),
              }}
            >
              <Checkbox
                label={isLabelVisible && 'Label'}
                labelPlacement={
                  selectedDirect === '2' ? 'left' : 'right'
                }
                disabled={!isLabelCheckboxEnabled}
                style={{
                  ...getBoxColorStyle(),
                  color: isCustomChecked
                    ? 'purple'
                    : getLabelColorStyle(),
                }}
                icon={
                  isIconChecked ? (
                    <FavoriteBorder
                      style={{
                        color: isCustomChecked
                          ? 'purple'
                          : '',
                      }}
                    />
                  ) : selectedShape === '2' ? (
                    <Checkbox
                      style={{
                        fontSize: isCustomChecked
                          ? '5px'
                          : '20px',
                      }}
                    />
                  ) : (
                    <Checkbox
                      style={{
                        color: isCustomChecked
                          ? 'purple'
                          : '',
                      }}
                    />
                  )
                }
                checked={
                  isIconChecked ? (
                    <Favorite
                      style={{
                        color: isCustomChecked
                          ? 'purple'
                          : '',
                      }}
                    />
                  ) : selectedShape === '2' ? (
                    <Checkbox
                      checked
                      style={{
                        color: isCustomChecked
                          ? 'purple'
                          : '',
                      }}
                    />
                  ) : (
                    <Checkbox
                      checked
                      style={{
                        color: isCustomChecked
                          ? 'purple'
                          : '',
                      }}
                    />
                  )
                }
              />
            </div>
          </div>

          <div className="p-2 bd-highlight">

            <p style={{ fontSize: '16px', color: 'gray' }}>MODIFIERS</p>

            <Checkbox
              label="Custom Color"
              disabled={!isIconChecked}
              onChange={handleCustomColorChange}
            />


            <Checkbox
              label="Label"
              onChange={handleLabelCheckboxChange}
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
        </div>
      </div>
      <div
        className="w-75 p-3 bg-light"
        style={{ height: '250px', backgroundColor: 'white', display: 'block' }}
      >
        <div className="d-flex">
          <div
            className="codeArea flex-grow-1"
            style={{
              height: '200px',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ol style={{ fontSize: '16px', margin: '20px' }}>
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
                  <li><span style={{ color: "#4dabf5", marginLeft: "30px" }}>customColor="colorPurple"</span></li>
                )}
                <li><span style={{ color: "#4dabf5", marginLeft: "20px" }}>{'/>'}</span></li>
              </ol>
              <Tooltip title="Copiar" placement="left">
                <IconButton
                  aria-label="copiar"
                  onClick={copyToClipboard}
                  style={{ alignSelf: 'flex-start', margin: '20px' }}
                >
                  <ContentCopy />
                </IconButton>
              </Tooltip>
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} action={action}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Copiado com sucesso!
                </Alert>
              </Snackbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
