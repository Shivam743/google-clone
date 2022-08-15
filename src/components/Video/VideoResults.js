import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../Context/ContextFile";
import MainCart from "../MainCart";

export default function VideoResults() {
  const { searchResultsAndTime, setSearchResultsAndTime } = useContext(
    NoteContext
  );

  const [Data, setData] = useState("");
  const options = {
    method: 'GET',
    url: 'https://google-search3.p.rapidapi.com/api/v1/video/q=iphone+reviews',
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Key': 'a90d78fd2fmsh639eb5e5b616e16p14632fjsnf8008114e803',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
  };
  

  async function getUser() {
    try {
      const { data } = await axios.request(options);
      setSearchResultsAndTime((prev) => ({
        ...prev,
        About: data.total,
        time: data.ts,
      }));
      console.log("first data log", data);
      console.log("all page log", searchResultsAndTime);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();

    return () => {};
  }, []);

  return (
    <div>
      {Data &&
        Data.results &&
        Data.results.map((val, idx) => {
          return (
            <MainCart
              key={idx}
              title={val.title}
              link={val.link}
              description={val.description}
            />
          );
        })}
    </div>
  );
}
