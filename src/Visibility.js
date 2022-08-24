import React from 'react'
import styled from 'styled-components';

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.div`
  width: 70px;
  height: 70px;
  margin: 10px;
  background-color: lightblue;
`
// TODO: look up images for different conditions
// ex: sun, cloud, cloud w/ rain, cloud w/ lightning bolt, snow, etc...
export default function Visibility({ weather }) {
  return (
    <Col>
      <Image />
      <div>{weather[0].main}</div>
    </Col>
  )
}
