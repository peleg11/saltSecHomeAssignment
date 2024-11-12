import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { ApiData, data, ParamNames, RowItem, RowItemKeys } from "../data";
import { filterParams } from "./utils";
import { TabNames } from "../components/MainContent";

export const DataContext = createContext<DataContextValueType | null>(null);

interface DataContextValueType {
  data: ApiData;
  filterItem: (query: string, piiOnly: boolean) => void;
  toggleProp: (
    tab: TabNames,
    param: ParamNames,
    rowName: string,
    prop: RowItemKeys.pii | RowItemKeys.masked,
    state: boolean
  ) => void;
  activeTab: TabNames;
  setActiveTab: (name: TabNames) => void;
}

interface DataContextProviderProps {
  children: ReactNode;
}

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [active, setActive] = useState(TabNames.request);

  const setActiveTab = (name: TabNames) => {
    setActive(name);
  };

  const [currentData, setCurrentData] = useState(data);
  // filter by query in name or type

  const filterItem = useCallback((query: string, piiOnly: boolean) => {
    setCurrentData((prev) => ({
      ...prev,
      request: filterParams(query, piiOnly, currentData.request),
      response: filterParams(query, piiOnly, currentData.response),
    }));
  }, []);

  const toggleProp = useCallback(
    (
      tab: TabNames,
      param: ParamNames,
      rowName: string,
      prop: RowItemKeys.pii | RowItemKeys.masked,
      state: boolean
    ) => {
      setCurrentData((prev) => {
        if (tab === TabNames.request && prev.request) {
          prev.request[param].filter((item) => item.name === rowName)[0][prop] =
            state;
        }

        if (tab === TabNames.response && prev.response) {
          prev.response[param as ParamNames.body | ParamNames.headers].filter(
            (item: RowItem) => item.name === rowName
          )[0][prop] = state;
        }

        return { ...prev };
      });
    },
    []
  );

  //   console.log(currentData.request);

  const value = {
    data: currentData,
    filterItem,
    toggleProp,
    activeTab: active,
    setActiveTab,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (context === null) throw new Error("context must be used ");

  return context;
};
