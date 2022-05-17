class Forecast{
    constructor(){
        this.key = 'ngV6XRIKmYAhlw9TzAhLVFsVQNbgC5qa';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails);

        return { cityDetails, weather };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const cityKey = await response.json();
        return cityKey[0];
    }
    async getWeather(cityKey){
        const query = `${cityKey.Key}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + query);
        const weatherData = await response.json();
        return weatherData;
    }
}