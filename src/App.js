import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Components/Layout/DefaultLayout/DefaultLayout';
import { publicRouter } from './Router';
import { getWeather, getWeatherWeek } from './sagas/Weather/WeatherSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather());
        dispatch(getWeatherWeek());
    }, [dispatch]);
    return (
        <div className="flex justify-center items-center h-[100%] bg-opacity-90 transition-all">
            <Router>
                <Routes>
                    {publicRouter.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
