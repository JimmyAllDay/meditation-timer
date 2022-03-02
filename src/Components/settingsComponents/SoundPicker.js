import React, { useState, useEffect } from "react";
import { audioPlayer } from "../utils/soundUtils";

import { Container, Row, Col } from "react-bootstrap";

function SoundPicker(props) {
  const { selected, handler, sounds, disabled, darkMode } = props;

  const samples = sounds.map((sound, i) => (
    <option key={i} value={sound.value} data-label={sound.label}>
      {sound.label}
    </option>
  ));

  const randomised = (
    <option key={0} value={null}>
      Randomised
    </option>
  );

  return (
    <Container className={`my-auto p-0`}>
      <Row className="">
        <Col xs={10} sm={10} md={8} lg={4} className="d-flex">
          <select
            disabled={disabled}
            className={`w-100 ${
              darkMode ? "soundpicker__dark-mode" : "soundpicker"
            }`}
            value={selected}
            onChange={(e) => {
              const name =
                e.target[e.target.selectedIndex].getAttribute("data-label");
              handler(name, e.target.value);
              audioPlayer(e.target.value);
            }}
          >
            {disabled ? randomised : samples}
          </select>
        </Col>
      </Row>
    </Container>
  );
}

export default SoundPicker;
