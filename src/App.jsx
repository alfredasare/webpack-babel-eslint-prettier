import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header.component';

const App = () => {
  useEffect(() => {
    console.log('Something');
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
