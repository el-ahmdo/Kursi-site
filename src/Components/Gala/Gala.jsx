import React from "react";
import "./Gala.css";
import vid_cut from "../Assets/images/PhotoGallery.png";

const Gala = () => {
  return (
    <div className="Photo_galery">
      <h1>Photo Gallery</h1>

      <div className="Gallery-con">
        <div className="stack">
          <div className="top-image">
            <img src={vid_cut} alt="Top Image" />
          </div>

          <div className="layer layer-1"></div>
          <div className="layer layer-2"></div>
          <div className="layer layer-3"></div>
          <div className="layer layer-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Gala;
