import React, { useState } from "react";
import SoundPicker from "./SoundPicker";
import SettingsSlider from "./SettingsSlider";
import Toggle from "./Toggle";

import { Icon } from "@iconify/react";

import { Container, Col, Row } from "react-bootstrap";

function SettingsContainer(props) {
  const {
    sounds,
    startSound,
    endSound,
    intervalSound,
    sSoundHandler,
    eSoundHandler,
    iSoundHandler,
    leadInTime,
    setLeadTimeHandler,
    intervalTime,
    setIntervalHandler,
    sSoundDisabler,
    sSoundDisabled,
    eSoundDisabler,
    eSoundDisabled,
    iSoundDisabler,
    iSoundDisabled,
    darkMode,
    darkModeHandler,
  } = props;

  console.log(intervalSound);

  const [leadIn, setLeadIn] = useState(0);
  const [interval, setInterval] = useState(0);

  const intervalHandler = (e) => {
    return setInterval(e.target.value);
  };

  const leadInHandler = (e) => {
    return setLeadIn(e.target.value);
  };

  return (
    <Container fluid className={`p-5 ${darkMode ? "bg-dark" : "bg-light"}`}>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="mb-3">Settings</h1>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
          <h3 className="my-3">Timer</h3>
        </Col>
      </Row>

      <Row>
        <Col
          xs={12}
          sm={4}
          md={6}
          className="d-flex justify-content-xs-start justify-content-sm-end"
        >
          <h5 className="my-3">Interval Time</h5>
        </Col>
        <Col className="d-flex justify-content-start d-flex">
          <SettingsSlider
            maxValue={300}
            stepValue={30}
            handler={setIntervalHandler}
            timeDisplay={intervalTime}
            darkMode={darkMode}
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={4}
          md={6}
          className="d-flex justify-content-xs-start justify-content-sm-end"
        >
          <h5 className="align-self-center my-3">Interval Sound</h5>
        </Col>
        <Col className="d-flex justify-content-start d-flex">
          <SoundPicker
            sounds={sounds.startSounds}
            handler={iSoundHandler}
            selected={intervalSound.sample}
            disabled={iSoundDisabled}
            darkMode={darkMode}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <h5 className="my-3">Randomise Interval Sound</h5>
        </Col>
        <Col className="d-flex justify-content-start d-flex">
          <Toggle
            icon1={<Icon icon="akar-icons:chevron-down" />}
            icon2={<Icon icon="dashicons:randomize" />}
            checked={iSoundDisabled}
            onChangeFunc={iSoundDisabler}
            darkMode={darkMode}
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={4}
          md={6}
          className="d-flex justify-content-xs-start justify-content-sm-end"
        >
          <h5 className="align-self-center my-3">Lead-in Timer</h5>
        </Col>
        <Col className="d-flex justify-content-start d-flex">
          <SettingsSlider
            maxValue={10}
            stepValue={1}
            handler={setLeadTimeHandler}
            timeDisplay={leadInTime}
            darkMode={darkMode}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="d-flex justify-content-center">
          <h3 className="my-3">Start</h3>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={4}
          md={6}
          className="d-flex justify-content-xs-start justify-content-sm-end"
        >
          <h5 className="align-self-center my-3">Start Sound</h5>
        </Col>
        <Col className="d-flex justify-content-start ">
          <SoundPicker
            sounds={sounds.startSounds}
            handler={sSoundHandler}
            selected={startSound.sample}
            disabled={sSoundDisabled}
            darkMode={darkMode}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <h5 className="align-self-center my-3">Randomise Start Sound</h5>
        </Col>
        <Col className="d-flex justify-content-start ">
          <Toggle
            icon1={<Icon icon="akar-icons:chevron-down" />}
            icon2={<Icon icon="dashicons:randomize" />}
            checked={sSoundDisabled}
            onChangeFunc={sSoundDisabler}
            darkMode={darkMode}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="d-flex justify-content-center">
          <h3 className="my-3">End</h3>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={4}
          md={6}
          className="d-flex justify-content-xs-start justify-content-sm-end"
        >
          <h5 className="align-self-center my-3">End Sound</h5>
        </Col>
        <Col className="d-flex justify-content-start ">
          <SoundPicker
            sounds={sounds.endSounds}
            handler={eSoundHandler}
            selected={endSound.sample}
            disabled={eSoundDisabled}
            darkMode={darkMode}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end ">
          <h5 className="my-3">Randomise End Sound</h5>
        </Col>
        <Col className="d-flex justify-content-start ">
          <Toggle
            icon1={<Icon icon="akar-icons:chevron-down" />}
            icon2={<Icon icon="dashicons:randomize" />}
            checked={eSoundDisabled}
            onChangeFunc={eSoundDisabler}
            darkMode={darkMode}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h3 className="my-3">Other</h3>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end ">
          <h5 className="my-3">Dark Mode</h5>
        </Col>
        <Col className="d-flex justify-content-start ">
          <Toggle
            icon1={<Icon icon="carbon:sun" />}
            icon2={<Icon icon="carbon:moon" />}
            checked={darkMode}
            onChangeFunc={darkModeHandler}
            darkMode={darkMode}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SettingsContainer;
