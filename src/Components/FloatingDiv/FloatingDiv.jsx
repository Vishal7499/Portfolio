import React from "react";

import './FloatingDiv.css'
/*import { themeContext } from "../../Context";
import { useContext } from "react";*/

const FloatinDiv = ({img, txt1, txt2}) => {
  /*const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;*/
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