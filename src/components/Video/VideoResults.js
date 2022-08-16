import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../Context/ContextFile";
import MainCart from "../mainContent/MainCart";

export default function VideoResults() {
  const [isLoading, setIsLoading] = useState(false);

  const { setSearchResultsAndTime, SearchText } = useContext(NoteContext);

  const [Data, setData] = useState("");
  const options = {
    method: "GET",
    url: `https://google-search3.p.rapidapi.com/api/v1/video/q=${SearchText}`,
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "a90d78fd2fmsh639eb5e5b616e16p14632fjsnf8008114e803",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };

  async function getUser() {
    try {
      setIsLoading(true);
      const { data } = await axios.request(options);
      setSearchResultsAndTime((prev) => ({
        ...prev,
        About: data.total,
        time: data.ts,
      }));

      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();

    return () => {};
  }, [SearchText]);

  return (
    <div>
      {isLoading && <div className="fallback">Loading...</div>}

      {!isLoading &&
        Data &&
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
      {SearchText || isLoading ? (
        ""
      ) : (
        <div className="Search_not_found">
          <h2>Search AnyThink</h2>
        </div>
      )}
    </div>
  );
}
