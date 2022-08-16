import React, { useContext } from "react";
import NoteContext from "../Context/ContextFile";

export default function MiniNav() {
  const { searchResultsAndTime, SearchText } = useContext(NoteContext);
  return (
    <>
      {SearchText ? (
        <div className="miniNav">
          About{"  "}
          {`${
            searchResultsAndTime.About
          } results (${searchResultsAndTime.time.toFixed(3)}seconds)`}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
