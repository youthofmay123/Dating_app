import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, push, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyAgugjzmY2rIWQAiNJjZuK_59OY82fuX-k',
    authDomain: 'datingapp-d4a03.firebaseapp.com',
    projectId: 'datingapp-d4a03',
    storageBucket: 'datingapp-d4a03.firebasestorage.app',
    messagingSenderId: '522644652775',
    appId: '1:522644652775:web:0b6179c6af1950ab5dd842',
    measurementId: 'G-JWMGH26CP0',
};
// Initialize Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0]; // Nếu đã khởi tạo thì lấy app đã khởi tạo trước đó
}
const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database, ref, push, onValue };
