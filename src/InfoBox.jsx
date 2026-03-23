import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox ({info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const HOT_URL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJs5t6_NmVWJrFmEoxjgor7p0dHO5rQWEkw&s";
    const COLD_URL="https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
    const RAIN_URL="https://www.birminghamworld.uk/jpim-static/image/2024/05/11/12/54/Thunderstorm+forecast+for+Birmingham.jpeg.jpg?crop=3:2,smart&trim=&width=640&quality=65";

    return (
        <div className="InfoBox">
           
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity>80 
                        ? RAIN_URL
                        : info.temp>15 
                        ? HOT_URL 
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {info.city} {
                        info.humidity>80 
                        ? <ThunderstormIcon/>
                        : info.temp>15 
                        ? <SunnyIcon/>
                        : <AcUnitIcon/> 
                    }

                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The Weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>

                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>
    )
}