import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    // city:"Kathmandu",
    // feelsLike: 30.93,
    // humidity: 58,
    // temp: 29.12,
    // tempMax: 29.12,
    // tempMin: 25.12,
    // weather: "broken clouds",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <h2>
      Weather Widget
      </h2>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
