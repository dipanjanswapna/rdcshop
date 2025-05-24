import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getHeroContent() {
  const docRef = doc(db, 'content', 'hero');
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

export async function getFeaturedCourses() {
  const coursesCol = collection(db, 'courses');
  const courseSnapshot = await getDocs(coursesCol);
  return courseSnapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(course => course.featured);
}

export async function getTestimonials() {
  const testimonialsCol = collection(db, 'testimonials');
  const testimonialSnapshot = await getDocs(testimonialsCol);
  return testimonialSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
