import { initializeApp } from "firebase/app";
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_APIKEY,
    // authDomain: import.meta.env.VITE_AUTHDOMAIN,
    // projectId: import.meta.env.VITE_PROJECTID,
    // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    // appId: import.meta.env.VITE_APPID,
    apiKey: "AIzaSyBUvsmSTHvUsOutKoHGlxtD-2K9bsK_yRw",
    authDomain: "school-of-excellence-2023.firebaseapp.com",
    projectId: "school-of-excellence-2023",
    storageBucket: "school-of-excellence-2023.appspot.com",
    messagingSenderId: "751075148256",
    appId: "1:751075148256:web:fc858b2119a5d41cee6b85"
};

const app = initializeApp(firebaseConfig);

export default app;
