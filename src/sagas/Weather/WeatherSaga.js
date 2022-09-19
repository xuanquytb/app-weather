import { takeLatest } from 'redux-saga/effects';
import { handleGetWeather, handleGetWeatherWeek } from './Handlers';
import { getWeather, getWeatherWeek } from './WeatherSlice';

export default function* WeatherSaga() {
    yield takeLatest(getWeather.type, handleGetWeather);
    yield takeLatest(getWeatherWeek.type, handleGetWeatherWeek);
}
