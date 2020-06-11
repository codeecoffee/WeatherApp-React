import React from 'react';
//import logo from './logo.svg';
import './App.css';

const api = {
  key: "5967f6b3a6c592153a87c49b57243ecc",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const dateBuilder = (d) => {
    let months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    let day = days [d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Searching..."  
          />
        </div>
        <div>
          <div className="location-box">
            <div className="location">Any city, US</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              15 C
            </div>
            <div className="weather">Sunny</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
