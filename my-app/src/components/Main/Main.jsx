import React from 'react';
import { Chart } from "react-google-charts";
export const data = [
    ["Task", "Hours per Day"],
    ["Procrastinate", 11],
    ["Code", 2],
    ["Sleep", 2],
    ["Watch TV", 2],
    ["Play games", 7]
    ];
export const options = {
    title: "What I'm Doing With My Life",
    pieHole: 0.4,
    is3D: false,
    };
function Main(props) {
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
export default Main;