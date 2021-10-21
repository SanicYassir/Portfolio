import React from "react";

import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.bcolor};
  color: ${(props) => props.color};
  padding: 5px;
  height: 50%;
  width: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Dosis", sans-serif;
  font-size: 1.3rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LCard = (props) => {
  return (
    <Row left={props.left}>
      <Card color={props.color} bcolor={props.bcolor} {...props}>
        {props.text}
      </Card>
    </Row>
  );
};

export default LCard;
