import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox ({info}) {
    const HOT_URL="https://bit.ly/3z6AhjJ";
    const COLD_URL = "https://bit.ly/45q713n";
    const RAIN_URL = "https://bit.ly/3XlKymh";
    // let info = {
    //     city:"Kathmandu",
    //     feelsLike: 30.93,
    //     humidity: 58,
    //     temp: 29.12,
    //     tempMax: 29.12,
    //     tempMin: 25.12,
    //     weather: "broken clouds",

    // }
    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather}</h1> */}

            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
        }
        title="green iguana"
      />
      <CardContent className='InfoBox'>
        <Typography gutterBottom variant="h5" component="div">{info.city}{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <LightModeIcon /> : <AcUnitIcon/> }

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature:{info.temp}&deg;C</div>
          <div>Humidiy = {info.humidity}&#37;</div>
          <p>Min Temp: {info.tempMin}&deg;C</p>
          <p>Max Temp: {info.tempMax}&deg;C</p>
          <p>The weather can described as  <strong>{info.weather}</strong> feels Like <strong>{info.feelsLike}&deg;C </strong> </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    );
}