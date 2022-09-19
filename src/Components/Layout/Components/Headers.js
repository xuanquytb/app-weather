import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather, getWeatherWeek, setQuery } from '../../../sagas/Weather/WeatherSlice';

const Headers = () => {
    const { query } = useSelector((state) => state.reducer.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getGPS() {
            let lat = '';
            let lon = '';
            navigator.geolocation.getCurrentPosition(async function (position) {
                lat = position.coords.latitude;

                lon = position.coords.longitude;

                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1fa9ff4126d95b8db54f3897a208e91c`,
                );

                const { name } = result.data;
                dispatch(setQuery(name));
                dispatch(getWeather());
                dispatch(getWeatherWeek());
            });
        }
        getGPS();
    }, [dispatch]);

    const reloadWeather = () => {
        dispatch(getWeather());
    };
    return (
        <div className="w-[930px] h-14 flex justify-between mt-5 ml-4 mb-5">
            <div>
                <span className="font-BadScript font-semibold mb-3">Xuân Qúy</span>
                <span className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-xl ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onClick={reloadWeather}
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </div>

            <div className="w-[285px] h-11 flex justify-center items-center rounded-xl bg-gray-200">
                <input
                    className="outline-none py-2 px-3   border-none bg-transparent"
                    type="text"
                    placeholder="Search city..."
                    value={query}
                    name="city"
                    onChange={(e) => dispatch(setQuery(e.target.value))}
                />
                <span className="ml-3 hover:scale-[1.2]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </span>
                <span
                    className="ml-3 hover:scale-[1.2]"
                    onClick={(e) => {
                        dispatch(getWeather());
                        dispatch(getWeatherWeek());
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Headers;
