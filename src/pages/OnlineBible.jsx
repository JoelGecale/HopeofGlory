import React from "react";
import axios from "axios";
import { useState} from "react";
import BibleForm from "../components/BibleForm";

function OnlineBible() {
  const [verses, setVerses] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const API_URL =
 //"https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json";
   "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         const result = response.data;
//         setVerse(result.text);
//       } catch (error) {
//         console.error("Failed to make request:", error.message);
//         setVerse(error.message);
//       }
//     };

//     fetchData();
//   }, []);

  async function fetchVerse(verseParams){
    try {
        //const response = await axios.get(API_URL + verseParams.version + "/books/" + verseParams.book.toLowerCase() + "/chapters/" + verseParams.chapter + "/verses/" + verseParams.verse + ".json");
        const response = await axios.get(API_URL + verseParams.version + "/books/" + verseParams.book.toLowerCase() + "/chapters/" + verseParams.chapter + ".json");
        const result =response.data;
        console.log(result);
        setVerses(result.data);
        console.log(verses);
        setIsSubmitted(true);
    } catch (error) {
        console.log(error.message);
    }    
  }

  return (
    <div className="container py-3">      
      <BibleForm onSubmit={fetchVerse}/>
      {isSubmitted && verses.map((verse) => <p key={verse.verse}><sup>{verse.verse}</sup> {verse.text}</p>)}
    </div>
  );
}

export default OnlineBible;
