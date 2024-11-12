import { Divider, ParamTable, TableWrapper } from "./style";
import { TabNames } from "../MainContent";
import { TableSection } from "./TableSection";
import { useDataContext } from "../../hooks/useDataContext";
import { ParamNames, RowItem } from "../../data";

interface Props {
  activeTab: TabNames;
}

export const Table = ({ activeTab }: Props) => {
  const { data } = useDataContext();

  const { request, response } = data;

  const infoToShow = activeTab === TabNames.request ? request : response;

  return (
    <TableWrapper>
      <ParamTable>
        <thead>
          <tr>
            <th></th>
            <th>
              Name
              <Divider />
            </th>
            <th>
              PII
              <Divider />
            </th>
            <th>
              Masking
              <Divider />
            </th>
            <th>
              Type
              <Divider />
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(infoToShow || {}).map(
            ([paramName, info]: [
              paramName: ParamNames | string,
              info: RowItem[]
            ]) => (
              <TableSection
                key={`${TabNames.request}_${paramName}`}
                paramName={paramName as ParamNames}
                paramsInfo={info}
              />
            )
          )}
        </tbody>
      </ParamTable>
    </TableWrapper>
  );
};
