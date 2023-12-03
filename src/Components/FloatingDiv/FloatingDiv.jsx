import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, txt1, txt2}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {txt1}
        <br/>
        {txt2}
      </span>
    </div>
  );
};

export default FloatinDiv;