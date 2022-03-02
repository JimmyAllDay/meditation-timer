import React from "react";

import Switch from "react-ios-switch";

export default function Toggle(props) {
  const { icon1, icon2, checked, onChangeFunc, darkMode } = props;
  return (
    <div
      className={`p-1 d-flex rounded-3 me-auto my-auto ${
        darkMode ? "border border-info" : "border"
      }`}
    >
      <h5 className="my-auto me-2">{icon1 && icon1}</h5>
      <Switch
        checked={checked && checked}
        className={undefined}
        disabled={undefined}
        handleColor="white"
        name={undefined}
        offColor="white"
        onChange={() => {
          onChangeFunc();
        }}
        onColor={`${darkMode ? "#6b6b6b" : "rgb(76, 217, 100)"}`}
        pendingOffColor={undefined}
        pendingOnColor={undefined}
        readOnly={undefined}
        style={undefined}
      />
      <h5 className="my-auto ms-2">{icon2 && icon2}</h5>
    </div>
  );
}
