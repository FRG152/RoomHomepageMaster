import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  size: number;
  setSize: (size: number) => void;
  swiper: number;
  setSwiper: (swiper: number) => void;
}

const GlobalContext = createContext<ContextProps | null>(null);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [size, setSize] = useState(0);
  const [swiper, setSwiper] = useState(1);
  return (
    <GlobalContext.Provider value={{ size, setSize, swiper, setSwiper }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
