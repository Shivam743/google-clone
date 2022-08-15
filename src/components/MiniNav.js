import React, { useContext } from "react";
import NoteContext from "../Context/ContextFile";

export default function MiniNav() {
  const { searchResultsAndTime } = useContext(NoteContext);
  console.log("miniLog", searchResultsAndTime);
  return (
    <div className="miniNav">
      About{"  "}
      {`${
        searchResultsAndTime.About
      } results (${searchResultsAndTime.time.toFixed(3)}seconds)`}
    </div>
  );
}
