import { ParamNames, RowItem, RowItemKeys } from "../../data";
import { useDataContext } from "../../hooks/useDataContext";
import { TableButton, TypeSpan } from "./style";

interface Props {
  paramName: ParamNames;
  paramInfo: RowItem;
}

export const TableRow = ({ paramName, paramInfo }: Props) => {
  const { activeTab, toggleProp } = useDataContext();
  return (
    <tr>
      <td></td>
      <td>{paramInfo.name}</td>
      <td>
        <TableButton
          onClick={() =>
            toggleProp(
              activeTab,
              paramName,
              paramInfo.name,
              RowItemKeys.pii,
              !paramInfo.pii
            )
          }
          $primary
          $ghost={!paramInfo.pii}
        >
          PII
        </TableButton>
      </td>
      <td>
        <TableButton
          $ghost={!paramInfo.masked}
          onClick={() =>
            toggleProp(
              activeTab,
              paramName,
              paramInfo.name,
              RowItemKeys.masked,
              !paramInfo.masked
            )
          }
        >
          Masked
        </TableButton>
      </td>
      <td>
        <TypeSpan>{paramInfo.type}</TypeSpan>
      </td>
    </tr>
  );
};
