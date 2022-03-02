import React, { useState } from "react";

export default function SettingsButton(props) {
  const [active, setActive] = useState(false);

  const addClassHandler = () => {
    return setActive(!active);
  };

  return (
    <div
      className={`settings-button ${active && "open"}`}
      onClick={() => {
        addClassHandler();
        props.settingsHandler();
      }}
    >
      <div className="hamburger-menu"></div>
    </div>
  );
}
