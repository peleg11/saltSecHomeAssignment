import { Content } from "./Content";
import { Tabs } from "./Tabs";
import { useDataContext } from "../hooks/useDataContext";

export const enum TabNames {
  request = "request",
  response = "response",
}

export const MainContent = () => {
  const { activeTab, setActiveTab } = useDataContext();

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
    </>
  );
};
