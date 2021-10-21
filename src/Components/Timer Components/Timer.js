import React from "react";
import TimerInput from "./TimerInput";
import Display from "./Display";
import LeadDisplay from "./LeadDisplay";
import Lotus from "./Lotus";

import { Row, Col, Button } from "react-bootstrap";

const Timer = (props) => {
  return (
    <Col>
      <Row className="d-flex justify-content-center m-3">
        <Lotus />
      </Row>
      <Row className="">
        <Col className="d-flex justify-content-center p-2">
          <Display {...props} />
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
          <LeadDisplay />
        </Col>
      </Row>

      <Row className="row p-4 my-4">
        <div className="d-flex justify-content-center">
          <TimerInput
            timerHandler={props.timerHandler}
            timeHandler={props.timeHandler}
            {...props}
          />
        </div>
      </Row>

      <Row className="d-flex justify-content-center mb-2">
        <Button
          variant="outline-dark"
          className="btn btn-sm border-3 w-25"
          onClick={props.startStopHandler}
        >
          {props.counting ? "Stop" : "Meditate"}
        </Button>
      </Row>

      <Row className="d-flex justify-content-center">
        <Button
          variant="outline-dark"
          className="btn btn-sm border-3 w-25"
          onClick={props.resetHandler}
        >
          Reset
        </Button>
      </Row>
    </Col>
  );
};

export default Timer;
