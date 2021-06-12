import React, { createContext } from "react";
import colors from "../../content/colors.json";
import discovery from "../../content/discovery.json";

export const ColorsContext = createContext();
export const ColorsProvider = ({ children }) => {
  return (
    <ColorsContext.Provider
      value={{
        colors,
        discovery,
      }}
    >
      {children}
    </ColorsContext.Provider>
  );
};
