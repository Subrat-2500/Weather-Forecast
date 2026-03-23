import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Wonderland",
        feelsLike : 24.17,
        humidity : 19,
        temp : 25.11,
        tempMax : 25.11,
        tempMin : 25.11,
        weather : "overcast clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}> 
            <h1>WEATHER  APP</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}