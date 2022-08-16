import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../../Context/ContextFile";
import ImageCart from "./ImageCart";

export default function ImageResult() {
  const { setSearchResultsAndTime, SearchText } = useContext(NoteContext);
  const [ImageData, setImageData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const options = {
    method: "GET",
    url: `https://google-search3.p.rapidapi.com/api/v1/image/q=${SearchText}`,
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
        time: data.ts,
        About: data.total,
      }));
      setImageData(data.image_results);
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
    <div className="Image_cart">
      {isLoading && <div className="fallback">Loading...</div>}
      
      {!isLoading &&
        ImageData &&
        ImageData.map((val, idx) => {
          return (
            <ImageCart key={idx} src={val.image.src} alt={val.image.alt} />
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
