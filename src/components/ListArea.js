import React from "react";
import { BadList } from "./BadList";
import { EntryList } from "./EntryList";

export const ListArea = () => {
  return (
    <div className="row mt-5 g-2">
      <EntryList />
      <BadList />
    </div>
  );
};
