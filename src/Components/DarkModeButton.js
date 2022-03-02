import React from "react";

import { Container } from "react-bootstrap";

import { Icon } from "@iconify/react";

export default function DarkModeButton({ darkMode, darkModeHandler }) {
  return (
    <div className="dark-mode-button" onClick={darkModeHandler}>
      <h4>
        <Icon icon="carbon:sun" className="dark-mode-icon text-info" />
      </h4>
    </div>
  );
}
