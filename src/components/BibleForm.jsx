import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HorizontalCard from "./HorizontalCard";

function BibleForm(props) {
  const [versions, setVersions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const API_URL =
    "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/bibles.json";
  const books = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const result = response.data;
        console.log(result);
        setVersions(result);
        setLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <form class="row row-cols-lg-auto g-3 align-items-center py-3">
        <div class="col-12">
          <label class="visually-hidden" for="selectVersion">
            Version
          </label>

          <select class="form-select" id="selectVersion" defaultValue="none">
            <option value="none">Choose version...</option>
            {loaded &&
              versions
                .filter((version) => version.language.name == "English")
                .map((version) => (
                  <option key={version.id} value={version.id}>
                    {version.localVersionName} (
                    {version.localVersionAbbreviation})
                  </option>
                ))}
          </select>
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="selectBook">
            Book
          </label>

          <select class="form-select" id="selectBook" defaultValue="none">
            <option value="none">Choose book...</option>
            {books.map((book) => (
              <option key={book}>{book}</option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <input
            class="form-control"
            type="text"
            placeholder="Chapter"
            aria-label="default input example"
            name="chapter"
            id="chapter"
          ></input>
        </div>

        <div className="col-12">
          <input
            class="form-control"
            type="text"
            placeholder="Verse (optional)"
            aria-label="default input example"
            name="verse"
            id="verse"
          ></input>
        </div>

        <div class="col-12">
          <button type="submit" onClick={(e) => {
            e.preventDefault();
            props.onSubmit({version: document.getElementById("selectVersion").value, book: document.getElementById("selectBook").value, chapter: document.getElementById("chapter").value, verse: document.getElementById("verse").value });
          }} className="btn text-white">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default BibleForm;
