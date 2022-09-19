import axios from 'axios';

export function requestGetWeather(query = 'Ha Noi') {
    return axios.request({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather`,
        params: {
            q: query,
            appid: '1fa9ff4126d95b8db54f3897a208e91c',
            lang: 'vi',
            units: 'metric',
            cnt: 7,
        },
    });
}
export function requestGetWeatherWeek(query = 'Ha Noi') {
    return axios.request({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/forecast/daily`,
        params: {
            q: query,
            cnt: 7,
            appid: 'd94bcd435b62a031771c35633f9f310a',
            lang: 'vi',
            units: 'metric',
        },
    });
}
