import { combineReducers } from '@reduxjs/toolkit';
import WeatherSlice from './Weather/WeatherSlice';

export const reducer = combineReducers({
    weather: WeatherSlice,
});
