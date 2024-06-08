import React from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../Pie chart/Data";
import PieChart from './PieChart';

Chart.register(CategoryScale);

const PieChartHome = () => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
    
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#f0331a",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
  return (
    <>
    <PieChart chartData={chartData} />
    </>
  )
}

export default PieChartHome