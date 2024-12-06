import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth } from "@/core/services/firebase";

const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

function signInWithGoogle() {
  signInWithPopup(auth, provider);
}

function signOut() {
  firebaseSignOut(auth);
}

export { signInWithGoogle, signOut };
