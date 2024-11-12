import { TabBtn, TabsWrapper } from "./style";
import { TabNames } from "../MainContent";

interface Props {
  activeTab: TabNames;
  setActiveTab: (name: TabNames) => void;
}

export const Tabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <TabsWrapper>
      <TabBtn
        $active={activeTab === TabNames.request}
        onClick={() => setActiveTab(TabNames.request)}
      >
        Request
      </TabBtn>
      <TabBtn
        $active={activeTab === TabNames.response}
        onClick={() => setActiveTab(TabNames.response)}
      >
        Response
      </TabBtn>
    </TabsWrapper>
  );
};
