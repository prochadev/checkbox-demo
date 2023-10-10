import { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [selectedMode, setSelectedMode] = useState("0");
  const [selectedShape, setSelectedShape] = useState("0");
  const [selectedSize, setSelectedSize] = useState("0");
  const [selectedDirect, setSelectedDirect] = useState("0");

  const [isLabelVisible, setIsLabelVisible] = useState(true);

  const [isDisabled, setIsDisabled] = useState(false);

  const [isIcon, setIsIcon] = useState(false);

  const [isCustomColor, setIsCustomColor] = useState(false);


  return (
    <HomeContext.Provider
      value={{
        selectedMode,
        selectedShape,
        selectedSize,
        selectedDirect,
        setSelectedMode,
        setSelectedShape,
        setSelectedSize,
        setSelectedDirect,
        isLabelVisible,
        isCustomColor,
        isIcon,
        isDisabled,
        setIsLabelVisible,
        setIsCustomColor,
        setIsIcon,
        setIsDisabled,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

