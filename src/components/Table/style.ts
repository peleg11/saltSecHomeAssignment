import styled from "styled-components";
import { Button } from "../style";

export const TableWrapper = styled.div`
  background: #fff;
  border: 1px solid #ded8e8;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 4px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ParamTable = styled.table`
  width: 100%;
  height: 100%;
  tr {
    display: flex;
    gap: 100px;
    border-bottom: 1px solid #ded8e8;
    padding-left: 15px;
  }
  th {
    height: 50px;
    width: 100px;
    display: flex;
    align-items: center;
    position: relative;
  }
  td {
    height: 50px;
    width: 100px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  tbody {
    tr:last-of-type {
      border-bottom: none;
    }
  }
`;

export const HeaderCell = styled.td`
  width: 100%;
`;

export const Divider = styled.hr`
  position: absolute;
  right: 100px;
  border-top: 1px solid #e5ddf8;
  transform: rotate(-90deg);
  width: 25px;
`;

export const TypeSpan = styled.span`
  background: #ccf3fc;
  padding: 3px 10px;
  border-radius: 6px;
`;

export const TableButton = styled(Button)`
  height: 25px;
  padding: 10px;
`;
