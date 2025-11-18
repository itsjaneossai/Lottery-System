import { createContext, useContext, useState, ReactNode } from "react";
type AppContextType = {
  count: number;
  setCount: (value: number) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ count, setCount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside <AppProvider>");
  }
  return ctx;
};
