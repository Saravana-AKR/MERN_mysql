import React from 'react'
import { useState } from "react";
import { Data } from "../Bar chart/Data";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { BarChart } from './Barchart';

Chart.register(CategoryScale);

const BarChartHome = () => {

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.month.toLocaleUpperCase()),
    
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
    <BarChart chartData={chartData} />
    </>
  )
}

export default BarChartHome