import React from "react";
import './Loading.css';

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="loader loader-inner"></div>
      </div>
    </div>
  );
};

export default Loading;
