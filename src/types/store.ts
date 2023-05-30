import { recetas } from "./recetas";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recetas:recetas[];
};

export enum RecetaActions {
  "GET" = "GET",
  "ADD" = "ADD",
}

export interface AddReceta {
  action: RecetaActions.ADD;
  payload: recetas;
}
export interface GetReceta {
  action: RecetaActions.GET;
  payload: recetas[];
}
export type Actions =  GetReceta | AddReceta;






