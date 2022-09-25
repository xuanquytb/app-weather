function BoxWeek({ data }) {
    return (
        <div className="flex">
            {data.map((item, index) => {
                return (
                    <div
                        className="flex flex-col justify-center items-center w-[48px] laptop:w-full laptop:mb-5 text-white gap-y-[0.8rem] laptop:gap-x-5 border-r-[0.1px] border-dotted border-gray-100"
                        key={index}
                    >
                        <img
                            className="w-[60px] h-[40px] object-cover"
                            src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                            alt=""
                        />
                        <h5 className="font-semibold break-word text-[10px] laptop:text-[12px] capitalize">
                            {item.weekday}
                        </h5>
                        <h5 className="font-semibold break-word text-[10px] laptop:text-[12px]">{item.dayMon}</h5>
                        <h5 className="font-semibold break-word text-[10px] laptop:text-[12px] capitalize text-center min-h-[30px]">
                            {item.desc}
                        </h5>
                        <h5 className="font-semibold break-word text-[10px] laptop:text-[12px] ">
                            <span>{item.lTemp + '°'}</span>
                            <span className="hidden laptop:block"> - </span>
                            <span className="hidden laptop:block">{item.hTemp + '°'}</span>
                        </h5>
                    </div>
                );
            })}
        </div>
    );
}

export default BoxWeek;
