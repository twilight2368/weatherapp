import React, { useContext, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { themeContext } from "../App";

export default function LineChart(props) {
  const [color, setColor] = useState("rgb(255, 99, 132)");
  const [axiscolor, setAxiscolor] = useState("black");
  const [darkmode, setDarkmode] = useContext(themeContext);
  const labels = props.label;

  useEffect(() => {
    if (darkmode) {
      setColor("rgb(99, 186, 247)");
      setAxiscolor("white")
    } else {
      setColor("rgb(255, 99, 132)");
      setAxiscolor("black")
    }
  }, [darkmode]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperture",
        backgroundColor: color,
        borderColor: color,
        data: props.data,
        fill: false,
      },
    ],
  };

  const option = {
    scales: {
      x: {
        ticks: {
          color: axiscolor, // this will change the color of the x axis labels
        },
      },
      y: {
        ticks: {
          color: axiscolor, // this will change the color of the y axis labels
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: axiscolor,
        },
      },
    },
  };
  return (
    <div className="= mx-28 h-full w-full relative">
      <Line data={data} options={option}/>
    </div>
  );
}
