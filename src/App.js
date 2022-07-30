import React, { useState, useEffect } from 'react';
import Card from './components/Card';

import { GlobalStyles } from './styles/Global';

const App = () => {
  const [advice, setAdvice] = useState([]);
  const url = 'https://api.adviceslip.com/advice';

  const getAdvice = async () => {
    try {
      // second argument solves caching problem (prevent returning same data one after another)
      const response = await fetch(url, { cache: 'no-cache' });
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Card advice={advice.advice} id={advice.id} getAdvice={getAdvice} />
    </>
  );
};

export default App;
