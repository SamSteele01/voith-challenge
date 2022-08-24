import styled from 'styled-components';
import CurrentWeather from './CurrentWeather'

const Background = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
`

// mobile device width
const Screen = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
`

function App() {
  return (
    <Background>
      <Screen>
        <h2>Heidenheim, Germany</h2>
        <CurrentWeather />
      </Screen>
    </Background>
  );
}

export default App;
