import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, where, getDocs } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyAgugjzmY2rIWQAiNJjZuK_59OY82fuX-k',
    authDomain: 'datingapp-d4a03.firebaseapp.com',
    projectId: 'datingapp-d4a03',
    storageBucket: 'datingapp-d4a03.firebasestorage.app',
    messagingSenderId: '522644652775',
    appId: '1:522644652775:web:0b6179c6af1950ab5dd842',
    measurementId: 'G-JWMGH26CP0',
};

const app = initializeApp(firebaseConfig);

export const expoClientId = '522644652775-q2if4h3bpqhvbk650lhf0k2ik5nk9nj3.apps.googleusercontent.com';
export const iosClientId = '22644652775-3lt6eou68f2u0risvd50atud918culld.apps.googleusercontent.com';
export const androidClientId = '522644652775-gpkbcfp0u6nhtfc658ihvat6o27kuirs.apps.googleusercontent.com';
// Initialize Firebase
const database = getFirestore(app);
export { database, collection, addDoc, onSnapshot, query, orderBy, where, getDocs };
