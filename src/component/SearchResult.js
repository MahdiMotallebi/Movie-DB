import React from "react";

const Poster = ({ filteredPhoto, setMovie, setShowModal }) => {
  const openModal = (photo) => {
    setMovie(photo);
    setShowModal(true);
  };
  return (
    <>
      <h2 className="title-grid-photos">search results</h2>
      <div className="grid-photos-search-result">
        {filteredPhoto.map((photo) => {
          const { id, year, title, poster } = photo;

          return (
            <div
              className="photo-search-result"
              onClick={() => openModal(photo)}
              key={id}
            >
              <div className="image-search-container">
                <img
                  src={poster}
                  alt={poster}
                  className="image-search"
                  loading="lazy"
                />
              </div>
              <div className="contentMovie">
                <p className="title">{title}</p>
                <span className="year">({year})</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Poster;
