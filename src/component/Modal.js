import React from "react";
import Modal from "react-modal";

const ModalPhoto = ({ movie, showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <Modal className="Modal" isOpen={true} onRequestClose={closeModal}>
          <div className="btn-modal-container">
            <button className="btn-modal" onClick={closeModal}>
              X
            </button>
          </div>

          <div className="modal-photo">
            <img
              src={movie.poster}
              alt={movie.poster}
              className="modal-image"
            />
            <div className="contentMovie-modal">
              <p className="title">{movie.title}</p>
              <span className="info">
                {movie.country}, {movie.year}
              </span>
              <span className="imdb_rating">⭐ {movie.imdb_rating} / 10</span>
              <div className="extra-img-container">
                {movie.images.map((img) => {
                  return <img src={img} alt={img} className="extra-img" />;
                })}
              </div>
              <div className="genres-container">
                {movie.genres.map((genre) => {
                  return <span className="genre">{genre}</span>;
                })}
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalPhoto;
