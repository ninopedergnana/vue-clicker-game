import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCvFCykMGN4-oKerb2E1u7lGVm_ehmgT60",
  authDomain: "vue-clicker.firebaseapp.com",
  projectId: "vue-clicker",
  storageBucket: "vue-clicker.appspot.com",
  messagingSenderId: "402672298776",
  appId: "1:402672298776:web:59d4dbc215054de0a30c6d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }