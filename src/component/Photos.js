import React from "react";
import Poster from "./Poster";
import SearchResult from "./SearchResult";
import Oops from "./Oops";

const Photos = ({ filteredPhoto, flag, setMovie, setShowModal }) => {
  return (
    <>
      {filteredPhoto.length > 0 ? (
        <>
          {flag ? (
            <Poster filteredPhoto={filteredPhoto} />
          ) : (
            <SearchResult
              filteredPhoto={filteredPhoto}
              setMovie={setMovie}
              setShowModal={setShowModal}
            />
          )}
        </>
      ) : (
        <Oops />
      )}
    </>
  );
};

export default Photos;
