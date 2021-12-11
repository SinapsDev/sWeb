import React from 'react';
import Routers from './routes';
import './App.css';

import Navbar from './components/navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
