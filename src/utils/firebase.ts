import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../firebaseConfig";
import { recetas } from "../types/recetas";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { Actions } from "../types/store";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const SaverecetaDB = async (recetas:recetas) =>{
    try {
        await addDoc(collection(db, "recetas"), recetas );
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}; 

const GetrecetaFromDB = async (): Promise<recetas[]> =>{
     const resp: recetas[] = [];
const querySnapshot = await getDocs(collection(db, "recetas"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  resp.push({
    ...doc.data(),

  }as recetas)
});
return resp; 
}

export default{ SaverecetaDB, GetrecetaFromDB}
