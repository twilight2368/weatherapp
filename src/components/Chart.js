import { useEffect, useState } from "react"
import LineChart from "./Linechart";

export default function Chart(props) {
    const [label, setLabel] = useState([]);
    const [mydata, setMydata] = useState([]);

    useEffect((e) => {
      const alldata = props.data.hour;
      // console.log(alldata);

      // Create new arrays outside the loop
      const newMydata = [];
      const newLabel = [];

      alldata.map((e) => {
        // Push new elements to the new arrays
        newMydata.push(e.temp_c);
        newLabel.push(e.time.split(" ")[1]);
      });

      // Call setState once with the new arrays
      setMydata(newMydata);
      setLabel(newLabel);
    }, []);

    // // Log the updated state after the render
    // useEffect(() => {
    //   console.log(mydata);
    //   console.log(label);
    // }, [mydata, label]);
    return (
        <>
        <div className="w-full h-full p-5 bg-slate-200 dark:bg-slate-700 rounded-xl drop-shadow-2xl">
            <h2 className="w-full flex justify-center items-center text-4xl mt-2">Weather forecast for today </h2>
            <div className=" w-full h-5/6 mt-2 flex justify-center items-center">
                  {mydata && label ? <><LineChart label = {label} data = {mydata}/></> : <></>}
            </div>
        </div>
        </>
    )
}