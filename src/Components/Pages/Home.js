import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import BoxWeatherWeed from '../BoxWeatherWeed';
import CardStatus from '../CardStatus/CardStatus';
import CardWind from '../CardWind/CardWind';

const Home = () => {
    const { Weather } = useSelector((state) => state.reducer.weather);

    return (
        <div className="flex">
            {Weather.id > 0 && (
                <div className="w-full h-full flex flex-col">
                    <div className="flex flex-col items-center w-[22.8rem] laptop:w-[62.8rem] h-[600px] laptop:h-[300px] sm:justify-between md:flex-row  ">
                        <CardStatus nameCity={Weather.name} main={Weather.main} />
                        <CardWind weather={Weather.weather[0]} wind={Weather.wind} clouds={Weather.clouds} />
                    </div>
                    <Fragment>
                        <BoxWeatherWeed />
                    </Fragment>
                </div>
            )}
        </div>
    );
};

export default Home;
