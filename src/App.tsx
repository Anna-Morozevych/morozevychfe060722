import React, { useEffect, useState } from 'react';
import './App.scss';
import { Chart } from './components/Chart ';

const inputData = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

const App: React.FC = () => {
  const [input, setInput] = useState<Data[]>([]);
  const totalTime = input.reduce((sum, el) => sum + el.time, 0);

  useEffect(() => {
    setInput(inputData);
  }, []);

  const generateNewValues = () => {
    function getRandomArbitrary(min: number, max: number) {
      return Math.round((Math.random() * (max - min) + min) * 10) / 10;
    }

    const newValue = input.map(el => (
      {
        ...el,
        time: getRandomArbitrary(0, 20),
      }
    ));

    setInput(newValue);
  };

  useEffect(() => {
    setTimeout(() => {
      generateNewValues();
    }, 30000);
  });

  return (
    <div className="App">
      <h1 className="App__title">
        spent time (seconds)
      </h1>
      <Chart
        input={input}
        totalTime={totalTime}
      />

      <button
        type="button"
        className="App__button"
        onClick={generateNewValues}
      >
        Adobe button
      </button>
    </div>
  );
};

export default App;
