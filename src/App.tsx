import Head from './components/Head';
import LeftArm from './components/LeftArm';
import RightArm from './components/RightArm';

import './styles/styles.scss'

import robot from './assets/robot.svg';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <div className="logo">
        <img src={robot} alt="robot" />
        <h1>Robot Control</h1>
      </div>
      <Head />
      <LeftArm />
      <RightArm />
    </div>
  );
}

export default App;
