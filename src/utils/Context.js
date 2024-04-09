import React, { createContext, useContext, useState } from "react";

// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    fullName: "Akash",
    mobileNumber: "8692897052",
    email: "akash@gmail.com",
    checked: ["Event One"],
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data
export const useData = () => {
  return useContext(DataContext);
};
