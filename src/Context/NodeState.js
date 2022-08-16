import React, { useState } from "react";
import NoteContext from "./ContextFile";

const NodeState = ({ children }) => {
  const [SearchText, setSearchText] = useState("");
  const [searchResultsAndTime, setSearchResultsAndTime] = useState(() => ({
    About: 0,
    time: 0,
  }));
  return (
    <>
      <NoteContext.Provider
        value={{
          searchResultsAndTime,
          setSearchResultsAndTime,
          SearchText,
          setSearchText,
        }}
      >
        {children}
      </NoteContext.Provider>
    </>
  );
};
export default NodeState;
