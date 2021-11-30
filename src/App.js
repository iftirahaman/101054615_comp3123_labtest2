import './App.css';
import { useState } from 'react';

const api = {
  key : "4dc54a9de6274b19c36e220042853865",
  base : "http://api.openweathermap.org/data/2.5/"

}

function App() {
  const [query, setquery] = useState('');
  const [weather, setweather] = useState({});

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  let day = newDate.getDay();
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let dayN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const search = evt => {
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setweather(result);
        console.log(result);
        setquery('');
      });
    }
  }
 const icon = (x)=>{
   if (x <=232){
     return "11d";
   }
   else if(x <=321){
     return "09d";
   }
   else if(x <=504){
     return "10d";
   }
   
   else if(x === 511){
    return "13d";
  }
  
  else if(x <= 531){
    return "09d";
  }
  else if(x <=622){
    return "13d";
  }
  else if(x <=781){
    return "50d";
  }
  else if(x === 800){
    return "01d";
  }
  
  else if(x === 801){
    return "02d";
  }
  
  else if(x === 802){
    return "03d";
  }
  else if(x <= 804){
    return "04d";
  }
  else{
    return "03d";
  }
 } 

var iico;
  return (
    
    <div className="Appw">
      <div style={{visibility: 'hidden'}}>
         {
          iico  = "http://openweathermap.org/img/wn/10d@2x.png"
        }
      </div>
      <div className="Main">
        <input type="text"
        placeholder="Search"
        className="search-bar"
        onChange={e => setquery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
        <div>Please Input Your Location and Press ENTER</div>
      <div className="day">
          <h2>{dayN[day]}</h2>
      </div>
      <div className="des">
          <h4>{(typeof weather.main != "undefined") ? weather.weather[0].main: ""}</h4>
      </div>
      <button className="btn-check">Check Hourly Report</button>

      {(typeof weather.main != "undefined") ? (
      <div className="Temp">
        
        <div className="left">
        
          <img src={iico} alt="Condition" className="con"/>

          <h4>{weather.name},{weather.sys.country}</h4>
          <h5>{months[month]}, {date}, {year}</h5>
        </div>
        <div className="right">
          <h1>{weather.main.temp} °C</h1>
        </div>
      </div>  ): ('')}
      </div>
    </div>
  );
}

export default App;
