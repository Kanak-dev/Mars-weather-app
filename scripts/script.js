const showPreviousWeather = document.querySelector('.show_previous_weather');
const previousWeatherContainer = document.querySelector('.previous_weather');

showPreviousWeather.addEventListener('click', () => {
    previousWeatherContainer.classList.toggle('show_weather');
})