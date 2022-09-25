import React from 'react';
import { useSelector } from 'react-redux';
import BoxWeek from '../BoxWeek';

const BoxWeatherWeed = () => {
    const { Weather, WeatherWeek } = useSelector((state) => state.reducer.weather);

    const weekInfo = WeatherWeek.list?.map((data, index) => {
        return {
            key: index,

            weekday: new Date(data.dt * 1000).toLocaleString('vi-VN', {
                weekday: 'long',
            }),
            dayMon: new Date(data.dt * 1000)
                .toLocaleString('vi-VN', {
                    month: 'long',
                    day: 'numeric',
                })
                .replace(' tháng ', '/'),
            temp: data.temp.day,
            hTemp: data.temp.max,
            lTemp: data.temp.min,
            desc: data.weather[0].description,
            icon: data.weather[0].icon,
        };
    });

    const { rain } = Weather;

    return (
        <div className="info-week w-[22rem] laptop:w-[63rem] laptop:h-[300px] mt-8 flex flex-col laptop:flex-row">
            <div className="flex flex-col bg-[#4b99c9] rounded-lg ml-3 mr-1 h-[250px] laptop:h-[295px]">
                <div className="flex ">
                    <div className=" w-[22rem] laptop:w-[28rem] h-[46px]">
                        <h2 className="font-bold text-[22px] laptop:text-[25px] pl-2">Thời tiết 7 ngày?</h2>
                    </div>
                    <div className="w-[244px] h-11 flex items-end flex-row-reverse pr-3">
                        <div className="w-[40px] h-[40px] rounded-xl bg-[#f7812d] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874zM12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>
                        </div>
                        <div className="w-[40px] h-[40px] rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M13 2.05c5.053.501 9 4.765 9 9.95v1h-9v6a2 2 0 1 0 4 0v-1h2v1a4 4 0 1 1-8 0v-6H2v-1c0-5.185 3.947-9.449 9-9.95V2a1 1 0 0 1 2 0v.05zM19.938 11a8.001 8.001 0 0 0-15.876 0h15.876z" />
                            </svg>
                        </div>
                        <div className="w-[40px] h-[40px] rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M14 18v-2h3.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-12 0v.007H1V10a8 8 0 0 1 15.458-2.901A5.5 5.5 0 1 1 17.5 18H14zm-8 2h10v2H6v-2zm0-8h8v2H6v-2zm-4 4h10v2H2v-2z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-[22rem] laptop:w-[43.3rem] h-[250px]">
                    <div className="h-full w-full relative border-t-[1px] border-dotted border-white">
                        <div>{weekInfo !== undefined && <BoxWeek data={weekInfo} />}</div>
                    </div>
                </div>
            </div>
            <div className="laptop:px-6 laptop:py-6 ml-3 mt-2 w-[338px] h-[236px] laptop:w-[367px] max-h-[244px]' bg-[url('../../../public/image/person1.jpg')] bg-cover rounded-xl">
                <div>
                    <h2 className="font-bold text-[25px]">Dự báo mưa</h2>
                    <h3 className="font-bold text-[17px]">
                        Lượng mưa : {Weather.rain !== undefined ? rain['1h'] + 'm.m' : '0m.m'}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default BoxWeatherWeed;
