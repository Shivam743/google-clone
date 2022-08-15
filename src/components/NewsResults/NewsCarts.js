import React from "react";

export default function NewsCarts({ title, link, publishedDate }) {
  return (
    <div className="Main_cart">
      <div>
        <p>{link}</p>
      </div>
      <div>
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
      </div>
      <div>
        <p>{publishedDate}</p>
      </div>
    </div>
  );
}
