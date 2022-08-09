import React from "react";

export default function ImageCart({ src, alt }) {
  console.log("src", src);
  return (
    
      <div>
        <img src={src} alt={alt} />
      </div>
    
  );
}
