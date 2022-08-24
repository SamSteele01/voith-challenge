import React, { useEffect, useState } from 'react'
import env from "react-dotenv";
import superagent from 'superagent'
import styled from 'styled-components';
import Temperature from './Temperature';
import Visibility from './Visibility';
import Wind from './Wind';
import Humidity from './Humidity';

// Heidenheim Germany
const lat = 49.3988;
const lon = 8.6724;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState(null);
  
  useEffect(() => {
    superagent.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${env.API_KEY}`)
      .end((err, res) => {
        if (err) console.error(err);
        console.log('res: ', res.body);
        setWeatherData(res.body);
      })
  }, [])
  
  return (
    <>
    {weatherData && (
      <>
        <Row>
          <Temperature main={weatherData.main} />
          <Visibility weather={weatherData.weather} />
        </Row>
        <Row>
          <Wind wind={weatherData.wind}/>
          <Humidity humid={weatherData.main.humidity}/>
        </Row>
      </>
    )}
    </>
  )
}
