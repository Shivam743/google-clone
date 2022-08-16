import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../Context/ContextFile";

export default function Navbar() {
  const [TempSearchText, setTempSearchText] = useState("");
  const { setSearchText } = useContext(NoteContext);
  return (
    <div className="header">
      <div className="logo">
        <Link to="search">google2.0</Link>
      </div>
      <div className="Search_area">
        <div className="text">
          <input
            type="text"
            placeholder="     SEARCH"
            value={TempSearchText}
            onChange={(e) => setTempSearchText(e.target.value)}
          />
        </div>
        <div className="search_icon" onClick={()=>setSearchText(TempSearchText)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/122/122932.png"
            alt="se"
            width={33}
          />
        </div>
      </div>
    </div>
  );
}
