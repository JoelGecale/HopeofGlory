import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { books } from "../data";

function BibleForm(props) {
  const [versions, setVersions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const API_URL =
    "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/bibles.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const result = response.data;
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
      <form className="row row-cols-lg-auto g-3 align-items-center bg-body-secondary py-3">
        <div className="col-auto">
          <label className="visually-hidden" for="selectVersion">
            Version
          </label>

          <select className="form-select" id="selectVersion" defaultValue="none">
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

        <div className="col-auto">
          <label className="visually-hidden" for="selectBook">
            Book
          </label>

          <select className="form-select" id="selectBook" defaultValue="none">
            <option value="none">Choose book...</option>
            {books.map((book) => (
              <option key={book}>{book}</option>
            ))}
          </select>
        </div>

        <div className="col-auto">
          <input
            className="form-control"
            type="text"
            placeholder="Chapter"
            aria-label="default input example"
            name="chapter"
            id="chapter"
          ></input>
        </div>

        <div className="col-auto">
          <input
            className="form-control"
            type="text"
            placeholder="Verse (optional)"
            aria-label="default input example"
            name="verse"
            id="verse"
          ></input>
        </div>

        <div className="col-auto">
          <button type="submit" onClick={(e) => {
            e.preventDefault();
            props.onSubmit({version: document.getElementById("selectVersion").value, versionDesc: document.getElementById("selectVersion").options[document.getElementById("selectVersion").selectedIndex].text, book: document.getElementById("selectBook").value, chapter: document.getElementById("chapter").value, verse: document.getElementById("verse").value });
          }} className="btn text-white">
            Submit
          </button>
        </div>
      </form>
    </>    
  );
}

export default BibleForm;
