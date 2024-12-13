import React from "react";
import axios from "axios";
import { useState } from "react";
import BibleForm from "../components/BibleForm";

function OnlineBible() {
  const [verses, setVerses] = useState([]);
  const [verseDetails, setVerseDetails] = useState({
    version: "",
    versionDesc: "",
    book: "",
    chapter: "",
    verse: "",
  });
  const API_URL = "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/";

  async function fetchVerse(verseParams) {
    let withVerse;

    let API_With_Params =
      API_URL +
      verseParams.version +
      "/books/" +
      verseParams.book.replaceAll(" ", "").toLowerCase() +
      "/chapters/" +
      verseParams.chapter;
    setVerseDetails({
      version: verseParams.version,
      versionDesc: verseParams.versionDesc,
      book: verseParams.book,
      chapter: verseParams.chapter,
      verse: verseParams.verse,
    });

    if (verseParams.verse == "") {
      API_With_Params = API_With_Params + ".json";
      withVerse = false;
    } else {
      API_With_Params =
        API_With_Params + "/verses/" + verseParams.verse + ".json";
      withVerse = true;
    }

    try {
      const response = await axios.get(API_With_Params);
      const result = response.data;
      if (withVerse) {
        setVerses([result]);
      } else {
        setVerses(result.data);
      }
      console.log(verses);
    } catch (error) {
      console.log(error.message);
      setVerses([
        {
          verse: "",
          text:
            "Error encountered. " +
            error.message +
            ". Unable to fetch the verse based on the specified parameters.",
        },
      ]);
    }
  }

  return (
    <div className="container py-3 page border-bottom mb-3">
      <div className="row px-4 px-md-5 mb-4 rounded text-body-emphasis bg-body-secondary mt-2 py-3">
        <div className="col-md-7 my-auto">
          <h1 className="display-6 fst-italic">Meditate on His Words</h1>
          <p className="lead my-3">
            "But his delight is in the law of the LORD; And in his law doth he
            meditate day and night. And he shall be like a tree planted by the
            rivers of water, That bringeth forth his fruit in his season; His
            leaf also shall not wither; And whatsoever he doeth shall prosper."
          </p>
          <p className="lead mb-0 text-end me-5">Psalms 1:2-3</p>
        </div>
        <div className="col-md-5">
          <img
            src="./assets/images/bible.jpg"
            className="bd-placeholder-img bd-placeholder-img-lg img-fluid"
            alt="church family"
          ></img>
        </div>
      </div>

      <h2 className="py-3 mb-4 fst-italic border-bottom">Bible Search</h2>

      <BibleForm onSubmit={fetchVerse} />

      {verseDetails.versionDesc != "" && (
        <h3 className="mt-3 pt-3 pb-2 border-bottom">{verseDetails.versionDesc}</h3>
      )}
      {verseDetails.verse == "" ? (
        <h3 className="py-3">
          {verseDetails.book} {verseDetails.chapter}
        </h3>
      ) : (
        <h3 className="py-3">
          {verseDetails.book} {verseDetails.chapter}:{verseDetails.verse}
        </h3>
      )}
      {verses.map((verse) => (
        <p>
          <sup>{verse.verse}</sup> {verse.text}
        </p>
      ))}
    </div>
  );
}

export default OnlineBible;
