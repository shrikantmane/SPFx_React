import { HttpClient } from "@microsoft/sp-http";

export interface ISpFxReactProps {
  description: string;
  httpClient: HttpClient;
}
