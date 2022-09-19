import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartJs = (props) => {
    const {
        temp: { day, morn, eve, night },
    } = props.data;

    const series = [
        {
            name: '℃',
            data: [morn, day, eve, night],
        },
    ];

    const options = {
        chart: {
            height: 350,
            type: 'line',
        },

        stroke: {
            width: 5,
            curve: 'smooth',
        },
        xaxis: {
            categories: ['Sáng', 'Ban Ngày', 'Tối', 'Ban đêm'],
            tickAmount: 10,
        },
        markers: {
            size: 5,
        },
        title: {
            text: 'Temp Day ?',
            align: 'left',
            style: {
                fontSize: '16px',
                color: '#666',
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        // yaxis: {
        //     min: 15,
        //     max: 50,
        // },
    };

    return (
        <div>
            <ReactApexChart options={options} series={series} type="line" height={300} width={350} />
        </div>
    );
};

export default ChartJs;
