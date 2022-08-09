
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageCart from "./ImageCart";

export default function ImageResult() {
  const [ImageData, setImageData] = useState("");
  const options = {
    method: "GET",
    url: "https://google-search3.p.rapidapi.com/api/v1/image/q=tesla",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "a90d78fd2fmsh639eb5e5b616e16p14632fjsnf8008114e803",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };
  async function getUser() {
    try {
      const { data } = await axios.request(options);
      console.log("first data log", data.image_results);
      setImageData(data.image_results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
    return () => {
    };
  }, []);
  return (
    <div className="Image_cart">
      {ImageData &&
        ImageData.map((val, idx) => {
          return (
            <ImageCart
              key={idx}
              src={val.image.src}
              alt={val.image.alt}
            />
          );
        })}
    </div>
  );
}