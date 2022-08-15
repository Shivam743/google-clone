import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import NoteContext from "../../Context/ContextFile";
import NewsCarts from "./NewsCarts";

export default function NewsResults() {
  const { setSearchResultsAndTime } = useContext(NoteContext);
  const [Data, setData] = useState();
  const options = {
    method: "GET",
    url: "https://google-search3.p.rapidapi.com/api/v1/news/q=bitcoin",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "a90d78fd2fmsh639eb5e5b616e16p14632fjsnf8008114e803",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };
  async function getNew() {
    try {
      const { data } = await axios.request(options);
      setSearchResultsAndTime((prev) => ({ ...prev, time: data.ts }));
      setData(data.entries);
      console.log("entries", data.entries[0]);
      console.log("data", Data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNew();
  }, []);

  return (
    <div>
      <div>
        {Data &&
          Data.map((val, idx) => {
            return <NewsCarts key={idx} title={val.title} publishedDate={val.published} link={val.link}/>;
          })}
      </div>
    </div>
  );
}
