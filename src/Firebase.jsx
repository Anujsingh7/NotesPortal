import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyBMBovmvwUMmCOXCXxs0sabrhBcd692UWc",
  authDomain: "fir-firestore-326b6.firebaseapp.com",
  projectId: "fir-firestore-326b6",
  storageBucket: "fir-firestore-326b6.appspot.com",
  messagingSenderId: "692622830254",
  appId: "1:692622830254:web:06c8ba2e0e87e74487db3f",
};

const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const handleCreateStore = async (image, pdf, name, subject, branch) => {
  // const imageRef = ref(storage, `uploads/image/${Date.now()}-${image.name}`);
  // const uploadResult = await uploadBytes(imageRef, image);
  // const pdfRef = ref(storage, `uploads/pdf/${Date.now()}-${pdf.name}`);
  // const uploadPdfResult = await uploadBytes(pdfRef, pdf);

  // return await addDoc(collection(firestore, "notes"), {
  //   imageURL: uploadResult.ref.fullPath,
  //   pdfUrl: uploadPdfResult.ref.fullPath,
  //   name,
  //   subject,
  //   branch,
  // });

  const imageRef = ref(storage, `uploads/image/${Date.now()}-${image.name}`);
  const uploadImageResult = await uploadBytes(imageRef, image);
  const imageUrl = await getDownloadURL(imageRef);

  const pdfRef = ref(storage, `uploads/pdf/${Date.now()}-${pdf.name}`);
  const uploadPdfResult = await uploadBytes(pdfRef, pdf);
  const pdfUrl = await getDownloadURL(pdfRef);

  const noteRef = collection(firestore, "notes");
  const docRef = await addDoc(noteRef, {
    imageURL: imageUrl,
    pdfUrl: pdfUrl,
    name,
    subject,
    branch,
  });
  
  return { imageUrl, pdfUrl, docRef };
};

const listAllNotes = () => {
  return getDocs(collection(firestore, "notes"));
};

const getImageUrl = (paths) => {
  console.log(paths);
  return getDownloadURL(ref(storage, paths));
};
// const getPdfUrl = (path) => {
//   return getDownloadURL(ref(storage, path));
// };
export const FirebaseProvdier = (props) => {
  return (
    <FirebaseContext.Provider
      value={{ handleCreateStore, listAllNotes, getImageUrl }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
