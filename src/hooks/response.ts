export type APIResponse = {
  serviceDescription: string;
  controllersDescriptions: Controller[][]
};

export interface Controller {
  controllerName: string;
  controllerDescription: string;
  endpoints: Endpoint[]
}
export interface Endpoint {
  method: string;
  uri: string;
  description: string;
  httpCode: number|string;
  additionalHttpCode?: any
}

