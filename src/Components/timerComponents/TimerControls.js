import React from "react";

import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

import { Icon } from "@iconify/react";

export default function TimerControls(props) {
  const {
    counting,
    startStopHandler,
    playStartSound,
    leadTime,
    countStarted,
    resetHandler,
  } = props;

  return (
    <Container fluid>
      <Row>
        <Col className="mx-auto d-flex flex-column">
          <div className="align-self-center">
            {counting ? (
              <Icon
                icon="carbon:pause"
                className="pause"
                onClick={() => {
                  startStopHandler();
                  playStartSound(leadTime, countStarted);
                }}
              />
            ) : (
              <Icon
                icon="carbon:play"
                className="play"
                onClick={() => {
                  startStopHandler();
                  playStartSound(leadTime, countStarted);
                }}
              />
            )}
          </div>

          <div className="align-self-center mt-2">
            <Icon
              icon="radix-icons:reset"
              className="reset"
              onClick={resetHandler}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
