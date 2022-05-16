const apiKey = 'ngV6XRIKmYAhlw9TzAhLVFsVQNbgC5qa';

const getWeather = async (cityKey) => {

    const query = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey.Key}?apikey=${apiKey}`;

    const response = await fetch(query);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;

}
//City Info
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(base + query);
    const cityKey = await response.json();
    return cityKey[0];

}