import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../Context/ContextFile";
import MainCart from "./MainCart";

export default function MainContent() {
  const {  setSearchResultsAndTime,SearchText } = useContext(
    NoteContext
  );

  const [Data, setData] = useState("");
  const options = {
    method: 'GET',
    url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${SearchText}`,
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Key': '4c3475fb3bmsh253331f3d63e9dap1534dfjsn78196ec5add6',
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
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();


    return () => {};
  }, [SearchText]);

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
        {SearchText?"":<div className="Search_not_found"><h2>Search AnyThink</h2></div>}
    </div>
  );
}
