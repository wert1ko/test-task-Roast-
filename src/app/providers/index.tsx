import { AppData } from "@/app/interfaces/data";
import {
  ComponentType,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface IDataContext {
  data: AppData | null;
  handleUpdateData: (newData: AppData | null) => void;
}

interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<IDataContext | null>(null);

const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<AppData | null>(null);

  const handleUpdateData = (newData: AppData | null) => {
    setData(newData);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        handleUpdateData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};

export default DataProvider;
