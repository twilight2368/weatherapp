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
        tension: 0.1,
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
  };
  return (
    <div className="h-full w-full relative ml-24">
      <Line data={data} options={option}/>
    </div>
  );
}
