import React from 'react';

function App() {
  
  const buttonClick = () => {
      fetch("/WeatherForecast/")
          .then(res => res.text())
          .then(result => window.alert(result))
  } 
  
  return (
    <div>
      <p>Bla bla bla</p>
        <button onClick={buttonClick}>Button</button>
      <p>Bla bla bla</p>
    </div>
  );
}

export default App;
