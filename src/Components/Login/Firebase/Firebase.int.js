import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";
const firebaseAuthentication=()=> {
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication;