import React, { useState } from 'react';
import './App.css'

function App() {

  const [color, setColor] = useState('white');

  const colors = ['white', 'yellow', 'red', 'blue', 'green'];

  const renderButtons = colors => {
    return colors.map( (color, index) => {
      return ( <li key={index}
        className={'color-selector ' + color}
        onClick={() => setColor(color)}>
      </li> );
    });
  };

  return (
    <div className="App">
      <h3>tlqkf
      </h3>
      <div id='area' className={color}> </div>
      <div id='toolbox'>
        { renderButtons(colors) }
      </div>
    </div>
  );
}

export default App;