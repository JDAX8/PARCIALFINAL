import { recetas } from "../types/recetas"
import { Actions, RecetaActions } from "../types/store"
import firebase from "../utils/firebase"
import { Screens } from "../types/screens"

export const navigate = (screen: Screens) => {
    return {
      type: "navigate",
    };
  };

export const Saverecetas = async (recetas: recetas): Promise <Actions> => {
    await firebase.SaverecetaDB(recetas)
    return {
        action: RecetaActions.ADD,
        payload: recetas,
    }
}
export const getrecetas = async (): Promise <Actions> => {
    const recetas = await firebase.GetrecetaFromDB()
    return {
        action: RecetaActions.GET,
        payload: recetas,
    }
}
