import fetch from 'node-fetch';

const apiKey = '6d0dbab583f5fa7f2329eebc49b3a906'; // Your OpenWeatherMap API key
const city = 'London'; // The city for which you want weather data

const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;

try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log('Current weather data:', data);
        // Extract and log specific wind data
        console.log(`Wind Speed: ${data.wind.speed} m/s`);
        console.log(`Wind Direction: ${data.wind.deg} degrees`);
    } else {
        console.error('Error fetching weather data:', response.statusText);
    }
} catch (error) {
    console.error('Error:', error);
}
