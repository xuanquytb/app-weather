import React from 'react';

const CardStatus = (props) => {
    let { temp, temp_max, temp_min, humidity } = props.main;
    // console.log(props);
    return (
        <div className="w-[338px] laptop:w-[495px] mb-3 laptop:mb-0 h-[180px] flex bg-[url('../../../public/image/nature4.jpg')] bg-cover rounded-xl">
            <div className="px-[20px] py-[20px] h-[200px] w-full ">
                <div className="flex">
                    <div className="w-[40px] h-[40px] rounded-[50%] bg-white flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zM8 16h8a4 4 0 1 1-8 0z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="font-bold">Nhiệt độ thành phố</p>
                        <p className="font-medium text-[#000]">{props.nameCity}</p>
                        <p className="font-medium text-[#000]">Độ ẩm: {humidity} %</p>
                    </div>
                </div>
                <div className="w-4 h-[6px] bg-white rounded-lg text-[#111111] text-[14px] font-semibold mt-5 ml-[8px] mb-0 mr-0 text-center"></div>

                <div className="w-full h-[75px] flex justify-between mt-[10px] laptop:mt-[36px]">
                    <div className="text-white rounded-lg text-[12px] laptop:text-[16px] flex items-center justify-center flex-col w-[90px] laptop:w-[108px] h-[47px] laptop:h-[75px] bg-[#19283f]">
                        <p>Nhiệt độ</p>
                        <p className="font-bold">{temp} ℃</p>
                    </div>
                    <div className="rounded-lg text-[10.5px] laptop:text-[16px] flex items-center justify-center flex-col w-[95px] laptop:w-[160px] h-[47px] laptop:h-[75px] bg-[#cce16a]">
                        <p>Nhiệt độ cao nhất</p>
                        <p className="font-bold">{temp_max} ℃</p>
                    </div>
                    <div className="rounded-lg text-[10.5px] laptop:text-[16px] flex items-center justify-center flex-col w-[95px] laptop:w-[160px] h-[47px] laptop:h-[75px] bg-[#ffffff]">
                        <p>Nhiệt độ thấp nhất</p>
                        <p className="font-bold">{temp_min} ℃</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardStatus;
