import { TabNames } from "./MainContent";
import { Search } from "./Search/Search";
import { MainContentWrapper } from "./style";
import { Table } from "./Table/Table";

interface Props {
  activeTab: TabNames;
}

export const Content = ({ activeTab }: Props) => {
  // state of filters

  return (
    <MainContentWrapper>
      <Search />
      <Table activeTab={activeTab} />
    </MainContentWrapper>
  );
};
