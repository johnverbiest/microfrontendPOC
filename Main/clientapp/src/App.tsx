import React from 'react';
import { IMenuData } from './MenuData';

function App() {

  const buttonClick = () => {
    fetch("/api/main/WeatherForecast/")
      .then(res => res.text())
      .then(result => window.alert(result))
  }

  const event = new CustomEvent<IMenuData>('updateMenu', {
    detail: {
      serviceName: "main",
      topMenuStructure: [
        {
          itemName: "mainitem1",
          itemLink: "/",
          itemOrder: 1
        },
        {
          itemName: "mainitem2",
          itemLink: "/",
          itemOrder: 3
        }]
    }
  });

  setTimeout(() => window.dispatchEvent(event), 400);

  return (
    <div>
      <p>Bla bla bla</p>
      <button onClick={buttonClick}>Button</button>
      <p>Bla bla bla</p>
    </div>
  );
}

export default App;
