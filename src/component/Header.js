import React, { useState, useEffect } from "react";

const Header = ({ photos, setFilteredPhoto, setFlag }) => {
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    filterPhoto();
  }, [searchData]);

  const handleOnchange = (e) => {
    setSearchData(e.target.value);
  };

  const filterPhoto = () => {
    const newPhoto = photos.filter((photo) =>
      photo.title.toLowerCase().includes(searchData.toLowerCase())
    );

    if (searchData == "") {
      setFlag(true);
      setFilteredPhoto(photos);
    } else {
      setFlag(false);
      setFilteredPhoto(newPhoto);
    }
  };

  return (
    <header className="header">
      <h1>find movies</h1>
      <input
        type="text"
        name="photo"
        placeholder="E.g Harry Potter"
        className="search-photo"
        onChange={handleOnchange}
      />
    </header>
  );
};

export default Header;
