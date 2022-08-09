import React from "react";
import { Link } from "react-router-dom";

export default function MainCart({ gittitle, link, description }) {
    
  return (
    <div className="Main_cart">
      {/* <div>
        about {about} results{"("}{ts.toFixed(2)}{')'}
      </div> */}

      <div>{link}</div>
      <div>
        <Link to={link}>{title}</Link>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
