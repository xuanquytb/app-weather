import { createSlice } from '@reduxjs/toolkit';

const WeatherSlice = createSlice({
    name: 'Weather',
    initialState: {
        query: '',
        Weather: [],
        WeatherWeek: [],
        loadding: true,
        errorMessage: '',
    },
    reducers: {
        getWeather() {},
        getWeatherWeek() {},
        setQuery: (state, action) => {
            return {
                ...state,
                query: action.payload,
            };
        },
        setWeather: (state, action) => {
            return {
                ...state,
                Weather: action.payload,
            };
        },
        setWeatherWeek: (state, action) => {
            return {
                ...state,
                WeatherWeek: action.payload,
            };
        },
        setLoading: (state, action) => {
            return {
                ...state,
                loadding: action.payload,
            };
        },
        setMessage: (state, action) => {
            return {
                ...state,
                errorMessage: action.payload,
            };
        },
    },
});

export const { getWeather, getWeatherWeek, setWeather, setWeatherWeek, setLoading, setMessage, setQuery } =
    WeatherSlice.actions;
export default WeatherSlice.reducer;
