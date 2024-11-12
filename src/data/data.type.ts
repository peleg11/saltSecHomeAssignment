export enum RowItemKeys {
  name = "name",
  pii = "pii",
  masked = "masked",
  type = "type",
}

export interface RowItem {
  [RowItemKeys.name]: string;
  [RowItemKeys.pii]: boolean;
  [RowItemKeys.masked]: boolean;
  [RowItemKeys.type]: string;
}

export enum ParamNames {
  urlParams = "urlParams",
  queryParams = "queryParams",
  headers = "headers",
  body = "body",
}

export interface ApiRequest {
  [ParamNames.urlParams]: RowItem[];
  [ParamNames.queryParams]: RowItem[];
  [ParamNames.headers]: RowItem[];
  [ParamNames.body]: RowItem[];
}

export type ApiResponse = Pick<
  ApiRequest,
  ParamNames.headers | ParamNames.body
>;

export interface ApiData {
  api?: string;
  method?: string;
  path?: string;
  request?: ApiRequest;
  response?: ApiResponse;
}
