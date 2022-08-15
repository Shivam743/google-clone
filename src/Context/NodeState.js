import React, { useState } from "react";
import NoteContext from "./ContextFile";

const NodeState = ({ children }) => {
  const [searchResultsAndTime, setSearchResultsAndTime] = useState(()=>({
    About:0,
    time:0
  }));
  return (
    <>
      <NoteContext.Provider value={{ searchResultsAndTime, setSearchResultsAndTime }}>
        {children}
      </NoteContext.Provider>
    </>
  );
};
export default NodeState;
