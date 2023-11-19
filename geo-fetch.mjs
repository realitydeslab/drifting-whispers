import fetch from 'node-fetch';

const apiKey = 'e75e1345a65d4ce1bedc9e59fd3012d6'; // Replace with your OpenCage API key
const city = 'Istanbul';

const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${apiKey}`;

async function fetchGeoData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status.code === 200 && data.results.length > 0) {
            const result = data.results[0];
            const geoData = {
                name: city,
                long: result.geometry.lng,
                lat: result.geometry.lat,
                // The API may not provide ICAO, state, abbreviation, or elevation data
                icao: 'N/A',
                state: 'N/A',
                abbr: 'N/A',
                elv: 'N/A'
            };
            console.log([geoData]);
        } else {
            console.error('No data found for the specified location');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchGeoData();
