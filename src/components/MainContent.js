import axios from "axios";
import React, { useEffect, useState } from "react";
import MainCart from "../MainCart";

export default function MainContent() {
  const [Data, setData] = useState("");
  const options = {
    method: "GET",
    url: "https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "IN",
      "X-RapidAPI-Key": "a90d78fd2fmsh639eb5e5b616e16p14632fjsnf8008114e803",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };

  async function getUser() {
    try {
      const { data } = await axios.request(options);
      console.log("first data log", data.results[0]);
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
    <div>{Data &&
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
      })}</div>
  );
}
