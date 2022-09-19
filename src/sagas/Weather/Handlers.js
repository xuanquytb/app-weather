import { call, put, select } from 'redux-saga/effects';
import { requestGetWeather, requestGetWeatherWeek } from './Requests';
import { setLoading, setMessage, setWeather, setWeatherWeek } from './WeatherSlice';

export function* handleGetWeather({ type, payload }) {
    let newQuery = '';
    try {
        newQuery = yield select((state) => state.reducer.weather.query);

        if (newQuery === '') {
            newQuery = 'Ha Noi';
        }
        const response = yield call(requestGetWeather, newQuery);
        if (response.status === 200) {
            yield put(setWeather(response.data));
            yield put(setLoading(false));
        }
    } catch (error) {
        yield put(setMessage('Lỗi API' + error));
    }
}
export function* handleGetWeatherWeek({ type, payload }) {
    let newQuery = '';
    try {
        newQuery = yield select((state) => state.reducer.weather.query);
        if (newQuery === '') {
            newQuery = 'Ha Noi';
        }
        const response = yield call(requestGetWeatherWeek, newQuery);
        if (response.status === 200) {
            yield put(setWeatherWeek(response.data));
            yield put(setLoading(false));
        }
    } catch (error) {
        yield put(setMessage('Lỗi API' + error));
    }
}
