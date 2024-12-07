import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function OnlineBible() {
  const [ verse, setVerse ] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json"
        );
        const result = await response.data;
        setVerse(result.text);
      } catch (error) {
        console.error("Failed to make request:", error.message);
        setVerse(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>{verse}</h1>
    </div>
  );
}

export default OnlineBible;
