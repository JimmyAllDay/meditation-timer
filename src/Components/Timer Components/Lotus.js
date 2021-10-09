import React from "react";

import appIcon from "../../Assets/vecteezy_vector-lotus-icon-on-white-background_1991733/med-app-icon.svg";

function Lotus() {
  const lotus = appIcon;
  return (
    <div className="mt-5 w-50 d-flex justify-content-center">
      <div className="w-25">
        <img src={lotus} alt="Lotus icon"></img>
      </div>
    </div>
  );
}

export default Lotus;
