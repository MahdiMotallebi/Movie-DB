import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/main.css";
import Header from "./component/Header";
import Photos from "./component/Photos";
import ModalPhoto from "./component/Modal";
import Loading from "./component/Loading";

function App() {
  const [photos, setPhotos] = useState([]);
  const [filteredPhoto, setFilteredPhoto] = useState([]);
  const [movie, setMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [flag, setFlag] = useState(true);
  const [loading, setLoading] = useState(undefined);
  const URL = "http://localhost:3500/data";
  //https://moviesapi.ir/api/v1/movies?page=
  useEffect(async () => {
    const result = await axios.get(URL);
    const data = await result.data;
    console.log(result.data);
    setPhotos(data);
    setFilteredPhoto(data);
    setLoading(true);
  }, []);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <>
          <Header
            photos={photos}
            setFilteredPhoto={setFilteredPhoto}
            filteredPhoto={filteredPhoto}
            setFlag={setFlag}
          />

          <div className="container">
            {!loading ? (
              <Loading />
            ) : (
              <Photos
                filteredPhoto={filteredPhoto}
                setShowModal={setShowModal}
                flag={flag}
                setMovie={setMovie}
                loading={loading}
              />
            )}
          </div>

          <ModalPhoto
            showModal={showModal}
            filteredPhoto={filteredPhoto}
            movie={movie}
            setShowModal={setShowModal}
          />
        </>
      )}
    </>
  );
}
export default App;
