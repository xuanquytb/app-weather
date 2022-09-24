import React from 'react';
import { useSelector } from 'react-redux';
import ChartJs from '../ChartTemp/ChartJs';

const Forecast = () => {
    const { Weather, WeatherWeek } = useSelector((state) => state.reducer.weather);
    console.log('🚀 ~ file: index.js ~ line 7 ~ Forecast ~ Weather', Weather);

    const { list } = WeatherWeek;

    const { name, main, sys } = Weather;
    const timesunrise = new Date(sys?.sunrise * 1000).toLocaleString('vi-VN', { hour: 'numeric', minute: 'numeric' });
    const hour = new Date().toLocaleString('vi-VN', { hour12: false, hour: '2-digit' });

    const timesunset = new Date(sys?.sunset * 1000).toLocaleString('vi-VN', { hour: 'numeric', minute: 'numeric' });

    const timeDay = {
        '00': '0',
        1: '4.2',
        2: '8.3',
        3: '12.5',
        4: '16.7',
        5: '21',
        6: '25',
        7: '29.3',
        8: '33.5',
        9: '38',
        10: '46',
        11: '50',
        12: '55',
        13: '58',
        14: '60',
        15: '62',
        16: '67',
        17: '71',
        18: '75',
        19: '79',
        20: '83',
        21: '88',
        22: '92',
        23: '100',
        24: '0',
    };

    // const widthSun = {
    //     '00': '0,0',
    //     1: '9.6',
    //     2: '19.2',
    //     3: '28.8',
    //     4: '38',
    //     5: '48',
    //     6: '57.5',
    //     7: '67.2',
    //     8: '76.8',
    //     9: '86.3',
    //     10: '96',
    //     11: '105.5',
    //     12: '115',
    //     13: '124',
    //     14: '134',
    //     15: '144',
    //     16: '153',
    //     17: '163',
    //     18: '172',
    //     19: '182',
    //     20: '192',
    //     21: '201.5',
    //     22: '211',
    //     23: '220',
    //     24: '230',
    // };
    // const ww = useRef(widthSun[hour]);

    return (
        <div className="w-[25%] h-[100%] overflow-hidden bg-gray-100 rounded-md ml-2 ">
            <div className="w-[93%] h-[715px] mt-6  mb-4 ml-4 flex flex-col items-center">
                <div className="flex justify-center items-center w-[93%] relative">
                    <div className="text-[15px] font-semibold absolute left-0 ">{name !== '' && name + ' '}</div>
                    <div className="text-[#f7812d] font-bold text-[30px] absolute right-0">
                        {Weather.length !== 0 && main.temp} ℃
                    </div>
                </div>
                <div className="w-[93%] h-[2px] bg-gray-200 mt-6"></div>
                <div className="flex flex-col w-[93%] h-[35%]">
                    <div className="flex justify-between">
                        <div className="flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M6.341 14A6 6 0 1 1 12 18v-4H6.341zM6 20h9v2H6v-2zm-5-9h3v2H1v-2zm1 5h8v2H2v-2zm9-15h2v3h-2V1zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3z"
                                    fill="rgba(255,141,36,1)"
                                />
                            </svg>
                            <h3>{timesunrise !== 'Invalid Date' && timesunrise}</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M6.341 14A6 6 0 1 1 12 18v-4H6.341zM6 20h9v2H6v-2zm-5-9h3v2H1v-2zm1 5h8v2H2v-2zm9-15h2v3h-2V1zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3z"
                                    fill="rgba(0,0,0,1)"
                                />
                            </svg>

                            <h3>{timesunset !== 'timesunrise' && timesunset}</h3>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center flex-col w-[93%]">
                        <div
                            className={`overflow-hidden w-[230px] h-[115px] border-l border-r border-t rounded-varBor border-dashed border-amber-600 relative`}
                        >
                            <div className={`w-full absolute bg-primary-gradien h-[115px] bottom-0 content-['']`}></div>
                            <div></div>
                        </div>
                        <div className=" w-[230px] absolute bottom-[-11px]">
                            <input
                                type="range"
                                min={0}
                                max={100}
                                before=""
                                after=""
                                value={timeDay[hour]}
                                step={0.1}
                                className={`relative w-[100%] h-[3px]  outline-none border-none appearance-none bg-[#f7812df2]  before:content-[attr(before)] before:w-[8px] before:h-[8px] before:left-0 before:bottom-0 before:top-[-2.5px] before:rounded-[50%] before:bg-black before:absolute after:content-[attr(after)] after:absolute after:w-[8px] after:h-[8px] after:bg-slate-500 after:rounded-[50%] after:top-[-2.5px] after:bottom-0 after:right-0`}
                            />
                        </div>
                    </div>
                </div>
                <div className="min-w-[370px] h-[88px] bg-[#19283f] rounded-xl flex flex-row justify-around text-white">
                    <div className="flex flex-col justify-center text-orange-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    </div>

                    <div className="flex flex-col justify-center">
                        <span className="font-bold bg-green-500 w-[80px] flex flex-row justify-center rounded-xl">
                            20 UVI
                        </span>
                        <p className="font-thin text-[16px]">Nguy cơ từ tia UV vừa phải</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center mt-8">
                    {list !== undefined && <ChartJs data={list[0]} />}
                </div>
            </div>
        </div>
    );
};

export default Forecast;
