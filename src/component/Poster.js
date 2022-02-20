import React from "react";

const Poster = ({ filteredPhoto }) => {
  return (
    <>
      <h2 className="title-grid-photos">you might like</h2>
      <div className="grid-photos">
        {filteredPhoto.map((photo) => {
          const { id, poster } = photo;

          return (
            <div className="poster-container" key={id}>
              <img src={poster} alt={poster} className="image" loading="lazy" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Poster;
