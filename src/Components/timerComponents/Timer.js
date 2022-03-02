import React from "react";
import DisplayGroup from "./DisplayGroup";
import TimerInput from "./TimerInput";
import TimerControls from "./TimerControls";
import Lotus from "./Lotus";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function Timer(props) {
  const {
    leadTime,
    intervalTime,
    startStopHandler,
    setMainTimeHandler,
    playStartSound,
    counting,
    countStarted,
    resetHandler,
    minutes,
    seconds,
    darkMode,
  } = props;

  return (
    <Container
      fluid
      className={`p-0 my-auto ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <Row className="d-flex justify-content-center m-3">
        <Lotus />
      </Row>

      <Row>
        <DisplayGroup
          minutes={minutes}
          seconds={seconds}
          leadTime={leadTime}
          intervalTime={intervalTime}
        />
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
          <TimerInput
            setMainTimeHandler={setMainTimeHandler}
            minutes={minutes}
            darkMode={darkMode}
          />
        </Col>
      </Row>

      <Row className="my-5">
        <Col className="mx-auto">
          <TimerControls
            counting={counting}
            startStopHandler={startStopHandler}
            playStartSound={playStartSound}
            leadTime={leadTime}
            countStarted={countStarted}
            resetHandler={resetHandler}
          />
        </Col>
      </Row>
    </Container>
  );
}
