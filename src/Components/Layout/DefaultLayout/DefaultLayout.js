import React from 'react';
import Forecast from '../../Forecast';
import Headers from '../Components/Headers';
import Navbar from '../Components/Navbar';

const DefaultLayout = ({ children }) => {
    return (
        <div className="relative w-[556px] tablet:[768px] laptop:w-[1490px] h-[757px] bg-[#fff] flex rounded-xl">
            <Navbar />
            <div>
                <Headers />
                <div>{children}</div>
            </div>
            <Forecast />
        </div>
    );
};

export default DefaultLayout;
