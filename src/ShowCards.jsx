import { useEffect, useState } from "react";
import { useFirebase } from "./Firebase";
// import Card from "./Card";
import NotesPage from "./NotesPage";

const ShowCards = () => {
  const firebase = useFirebase();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    firebase.listAllNotes().then((noteSnapshot) => {
      // Extract data from each document
      const extractedNotes = noteSnapshot.docs.map(doc => doc.data());
      setNotes(extractedNotes);
    }).catch(error => {
      console.error("Error fetching notes:", error);
    });
  }, []);
  console.log("nodsfi");
  if (notes) console.log(notes);

  return (
    <>
      <NotesPage MenuData={notes}/>
    </>
  );
};

export default ShowCards;
