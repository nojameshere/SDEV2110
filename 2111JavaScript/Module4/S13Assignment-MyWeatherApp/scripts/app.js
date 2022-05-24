const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');

const updateUI = (data) => {

    const { cityDetails, weather } = data;
    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather[0].WeatherText}</div>
        <div class="icon bg-light mx-auto text-center">
            <img src="" alt="">
        </div>
        <div class="temperature my-4">
            <span>${weather[0].Temperature.Imperial.Value}</span>
            <span>&deg;F = </span>
            <span>${weather[0].Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    //remove d-none tag if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    //change image
    let timeSrc = null;
    if(weather[0].IsDayTime){
        timeSrc = 'img/day.webp'
    } else {
        timeSrc = 'img/night.webp'
    }
    time.setAttribute('src', timeSrc);
    //This needs to be called here instead of globally because we're changing the innerHTML where it is
    //which changes the query selector's pointer. Ideally we would just put the iconSrc into the template
    //and wouldn't even need a query selector for it since it changes every time a submit event happens.
    const icon = document.querySelector('.icon img');
    //change icon
    let iconSrc = `img/weatherIcons/${weather[0].WeatherIcon}.png`;
    icon.setAttribute('src', iconSrc);
}

const updateCity = async (city) => {
    
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails);

    return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
    //prevents default refresh
    e.preventDefault();
    //gets entered city
    const city = cityForm.city.value.trim();
    cityForm.reset();
    //update the UI with city name here
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})