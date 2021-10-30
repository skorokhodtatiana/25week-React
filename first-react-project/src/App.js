import React from 'react';
import PieChart from './components/PieChart';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Pie Chart</h1>
      <button className="buttonGitHub">GitHub Source</button>
     <PieChart/>
    </div>
  );
}

export default App;
