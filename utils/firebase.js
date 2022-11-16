import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB8F9UWoeDjWsAhVNpwGAi4KXr8Q84uqqA",
    authDomain: "my-website-faddb.firebaseapp.com",
    projectId: "my-website-faddb",
    storageBucket: "my-website-faddb.appspot.com",
    messagingSenderId: "1060227957129",
    appId: "1:1060227957129:web:94d51cbbef57f4a36a2158",
    measurementId: "G-G4YK1FGCB5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics
