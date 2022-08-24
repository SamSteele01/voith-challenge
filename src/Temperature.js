import React from 'react'
import styled from 'styled-components';

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Degrees = styled.div`
  font-size: 64px;
`

const FeelsLike = styled.div`
  font-size: 12px;
`

function convertToCelcius(temp) {
  return Math.round(temp - 273.15);
}

export default function Temperature({ main }) {
  const temp = convertToCelcius(main.temp);
  const feelsLike = convertToCelcius(main.feels_like);
  
  return (
    <Col>
      <Degrees>{temp}°C</Degrees>
      <FeelsLike>Feels like: {feelsLike}°C</FeelsLike>
    </Col>
  )
}
