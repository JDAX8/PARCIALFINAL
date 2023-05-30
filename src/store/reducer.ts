import { Actions, AppState, RecetaActions } from "../types/store";

export const reducer = (actions: Actions, state:AppState) =>{
  const {action, payload} = actions;
  
  switch (action) {
    case RecetaActions.ADD:
       state.recetas = [...state.recetas, payload]
    return state;
   case RecetaActions.GET:
       state.recetas = payload
    return state;
  
    default:
      return state;
  }

}
export const reducer2 = (action: any, prevState: any) => {
  switch (action.type) {
    case "navigate":
      prevState.screen = action.payload;
      break;
  }
};
