document.getElementById('search-button').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    getWeather(city);
})

function getWeather(city) {
    const apiKey = '6bdc844069ef32bafec6d33cbf035ff0';
    const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showOnUi(data))
}

function showOnUi(data){
    console.log(data);
    document.getElementById('show-city').innerText = data.name; 
    document.getElementById('show-temperature').innerText = data.main.temp;
    document.getElementById('feel-like').innerText = data.main.feels_like;
    document.getElementById('info').innerText = data.weather[0].main;
    document.getElementById('image-icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = '';
}