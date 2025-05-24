import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAntk2yVUghwJzR_DmSEHmGqrY5qrUfEpo",
  authDomain: "rdcshop-53819.firebaseapp.com",
  projectId: "rdcshop-53819",
  storageBucket: "rdcshop-53819.firebasestorage.app",
  messagingSenderId: "497795678957",
  appId: "1:497795678957:web:10f8842d18f171573402e4",
  measurementId: "G-HL320LVFPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getFeaturedCourses() {
  const coursesCol = collection(db, 'courses');
  const courseSnapshot = await getDocs(coursesCol);
  return courseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
