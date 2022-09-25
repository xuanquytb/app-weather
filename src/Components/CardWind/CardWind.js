import React from 'react';

const CardWind = (props) => {
    // console.log(props);
    return (
        <div className="w-[338px] laptop:w-[495px] h-[180px] flex flex-col justify-around bg-[url('../../../public/image/Wind.jpg')] bg-cover rounded-xl">
            <div className="px-[24px] laptop:w-full max-h-[40%]">
                <div className="flex mb-15 ml-3 flex-row item-center h-[80%]">
                    <img src={`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`} alt="" />
                    <p className="font-semibold self-center  text-[#111111] capitalize">{props.weather.description}</p>
                </div>
            </div>
            <div className="px-[18px] py-1 w-[230px] bg-white rounded-xl ml-2">
                <h2 className="text-[12px] laptop:text-[16px] text-[#f7812d] font-bold">
                    Tốc độ gió :{props.wind.speed} Km/h
                </h2>
                <h2 className="text-[12px] laptop:text-[16px] text-[#f7812d] font-bold ">
                    Gió mạnh :{props.wind.gust} Km/s
                </h2>
            </div>
            <div className="ml-2 px-[17px] laptop:px-[24px] w-[230px] h-[44px] laptop:h-[60px] bg-white rounded-xl flex flex-col justify-around text-[12px] laptop:text-[16px]">
                <div className="font-bold w-[245px] text-[#f7812d] h-[21px]">Mật độ mây che phủ</div>
                <div className="font-bold w-[245px] text-[#f7812d] h-[25px]">{props.clouds.all} %</div>
            </div>
        </div>
    );
};

export default CardWind;
