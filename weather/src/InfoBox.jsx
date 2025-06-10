import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

function InfoBox({ info }) {

    if (!info) {
        return null; // Render nothing if no info is available
    }

    const haze_URL = "https://explorelandscapephotography.com/wp-content/uploads/2021/05/Haze-Layers-1.jpg";
    const hot_URL = "https://www.commonwealthcarealliance.org/wp-content/uploads/2022/05/summer-safety-768x512.jpg";
    const rain_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnxlbnwwfHwwfHx8Mg%3D%3D";
    const cold_URL = "https://images.unsplash.com/photo-1512341875699-0b87026a8d5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <div className='InfoBox'>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345, boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={
                    info.humidity > 80 
                    ? rain_URL
                    : info.temp > 30
                    ? hot_URL
                    : info.temp < 10
                    ? cold_URL
                    : haze_URL
                }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}%</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>The Weather can be described as <i>{info.weather}</i> and Feels Like = {info.feelslike}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default InfoBox