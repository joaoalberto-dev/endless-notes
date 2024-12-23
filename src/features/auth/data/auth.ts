import { auth } from "@/core/services/firebase/firebase";
import {
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

function signInWithGoogle() {
  signInWithPopup(auth, provider);
}

function signOut() {
  firebaseSignOut(auth);
}

export { signInWithGoogle, signOut };
