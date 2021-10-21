import React from "react";
import SoundPicker from "./SoundPicker";

import { Container, Col, Row } from "react-bootstrap";

function SettingsContainer(props) {
  console.log(props);

  return (
    <Container className="w-75">
      <Row>
        <Col className=" d-flex justify-content-center">
          <h1 className="mt-5 mb-4">Settings</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end ">
          <h3 className="align-self-center my-3">Lead-in Timer</h3>
        </Col>
        <Col className="d-flex justify-content-start ">
          <input
            className="w-50 my-3"
            type="range"
            min="0"
            max="30"
            value="0"
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end ">
          <h3 className="align-self-center my-3">Start Sound</h3>
        </Col>
        <Col className="d-flex justify-content-start ">
          <SoundPicker
            sounds={props.sounds.startSounds}
            handler={props.sSoundHandler}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end ">
          <h5 className="align-self-center my-3">Randomise Start Sound</h5>
        </Col>
        <Col className="d-flex justify-content-start ">
          <input className="my-auto" type="checkbox" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end ">
          <h3 className="align-self-center my-3">End Sound</h3>
        </Col>
        <Col className="d-flex justify-content-start ">
          <SoundPicker
            sounds={props.sounds.endSounds}
            handler={props.eSoundHandler}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end ">
          <h5 className="my-3">Randomise End Sound</h5>
        </Col>
        <Col className="d-flex justify-content-start ">
          <input className="my-auto" type="checkbox" />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="d-flex justify-content-end ">
          <h5 className="my-3">Play Long End Sounds</h5>
        </Col>
        <Col className="d-flex justify-content-start ">
          <input className="my-auto" type="checkbox" />
        </Col>
      </Row>
    </Container>
  );
}

export default SettingsContainer;
