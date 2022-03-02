import React from "react";

import { Container, Col, Row } from "react-bootstrap";

export default function DisplayGroup(props) {
  const { minutes, seconds, leadTime, intervalTime } = props;

  const formattedLead = leadTime.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const convertTime = (intervalSeconds) => {
    const minutes = Math.floor(intervalSeconds / 60);
    const seconds = Math.floor(intervalSeconds % 60);

    const formattedMinutes = minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    const formattedSeconds = seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <Container fluid>
      <Col className="mx-auto d-flex flex-column mb-5">
        <div className="align-self-center display-group__main-wrapper">
          <h1 className="display-group__main-display">
            {minutes.toLocaleString(undefined, {
              minimumIntegerDigits: 2,
            })}
            :
            {seconds.toLocaleString(undefined, {
              minimumIntegerDigits: 2,
            })}
          </h1>
        </div>
        <div className="align-self-center display-group__sub-wrapper d-flex">
          <div className="col-5"></div>
          <div className="col-7">
            <p className="align-self-end display-group__sub-display">{`Lead-in: 00:${formattedLead}`}</p>
            <p className="align-self-end display-group__sub-display">{`Interval: ${convertTime(
              intervalTime.time
            )}`}</p>
          </div>
        </div>
      </Col>
    </Container>
  );
}
