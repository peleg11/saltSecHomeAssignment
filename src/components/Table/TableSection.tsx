import { ParamNames, RowItem } from "../../data";
import { useToggle } from "../../hooks/useToggle";
import { ExpanedButton } from "./ExpanedButton";
import { TableRow } from "./TableRow";
import { HeaderCell } from "./style";

interface Props {
  paramName: ParamNames;
  paramsInfo: RowItem[];
}

const paramNameToStringMap = {
  [ParamNames.urlParams]: "URL Parameters",
  [ParamNames.queryParams]: "Query Parameters",
  [ParamNames.headers]: "Headers",
  [ParamNames.body]: "Body",
};

export const TableSection = ({ paramName, paramsInfo }: Props) => {
  const { on: isOpen, toggle } = useToggle(true);

  return (
    <>
      <tr>
        <HeaderCell style={{ width: "100%" }}>
          <ExpanedButton isOpen={isOpen} toggle={toggle} />
          {paramNameToStringMap[paramName]}
        </HeaderCell>
      </tr>
      {isOpen &&
        paramsInfo.map((row) => (
          <TableRow key={row.name} paramName={paramName} paramInfo={row} />
        ))}
    </>
  );
};
