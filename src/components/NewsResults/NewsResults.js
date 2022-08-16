import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import NoteContext from "../../Context/ContextFile";
import NewsCarts from "./NewsCarts";

export default function NewsResults() {
  const { setSearchResultsAndTime,SearchText } = useContext(NoteContext);
  const [Data, setData] = useState();
  const options = {
    method: 'GET',
    url: `https://google-search3.p.rapidapi.com/api/v1/news/q=${SearchText}`,
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Key': '4c3475fb3bmsh253331f3d63e9dap1534dfjsn78196ec5add6',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
  };
  async function getNew() {
    try {
      const { data } = await axios.request(options);
      setSearchResultsAndTime((prev) => ({ ...prev, time: data.ts }));
      setData(data.entries);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getNew();
  }, [SearchText]);

  return (
    <div>
      <div>
        {Data &&
          Data.map((val, idx) => {
            return <NewsCarts key={idx} title={val.title} publishedDate={val.published} link={val.link}/>;
          })}
      </div>
      {SearchText?"":<div className="Search_not_found"><h2>Search AnyThink</h2></div>}
    </div>
  );
}
