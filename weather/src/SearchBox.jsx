import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");

    //api call to fetch weather data 
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0bc377b363428138f4f12495754427af";

    let getWeatherData = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                setError("City not found in our Database, please try nearby city");
                return;
            }

            setError(""); // Clear any previous error messages

            let result = {
                city: jsonResponse.name,
                feelslike: jsonResponse.main.feels_like,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description,
            };

            console.log(jsonResponse);
            return result;
        }
        catch (error) {
            setError("there is no such city in our Database, please try again");
        }
    };



    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            
            let newInfo = await getWeatherData();
            updateInfo(newInfo);
            setCity('');
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
            setError("Failed to fetch weather data. Please try again.");
        }
    };

    return (
        <div className="SearchBox">
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" color="primary" type="submit">
                    Search
                </Button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    )
}

export default SearchBox