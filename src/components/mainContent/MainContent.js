import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../Context/ContextFile";
import MainCart from "./MainCart";

export default function MainContent() {
  const [isLoading, setIsLoading] = useState(false);

  const { setSearchResultsAndTime, SearchText } = useContext(NoteContext);

  const [Data, setData] = useState("");
  const options = {
    method: "GET",
    url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${SearchText}`,
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "4c3475fb3bmsh253331f3d63e9dap1534dfjsn78196ec5add6",
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
      { SearchText || isLoading ? (
        null
      ) : (
        <div className="Search_not_found">
          <h2>Search AnyThink</h2>
        </div>
      )}
    </div>
  );
}
