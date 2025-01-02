import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "Bidar",
        feelslike: 18.6,
        temp: 18.76,
        tempMix: 18.76,
        tempMan: 18.76,
        humidity: 73,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App By Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}