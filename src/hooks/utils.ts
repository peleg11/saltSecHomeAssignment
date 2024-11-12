import { ApiRequest, ApiResponse, RowItem, RowItemKeys } from "../data";

const FILTER_KEYS = [RowItemKeys.name, RowItemKeys.type];

const filterByQuery = (query: string, item: RowItem) =>
  FILTER_KEYS.some((key) =>
    item[key].toString().toLowerCase().includes(query.toLowerCase())
  );

const filterRows = (query: string, piiOnly: boolean, rows: RowItem[]) =>
  rows.filter((item) => {
    if (piiOnly) {
      return item[RowItemKeys.pii] && filterByQuery(query, item);
    }
    return filterByQuery(query, item);
  });

export const filterParams = (
  query: string,
  piiOnly: boolean,
  paramData?: ApiRequest | ApiResponse
) => {
  const filterd = Object.entries(paramData ?? {}).map(
    ([paramName, rows]: [paramName: string, rows: RowItem[]]) => [
      paramName,
      filterRows(query, piiOnly, rows),
    ]
  );
  return Object.fromEntries(filterd);
};
