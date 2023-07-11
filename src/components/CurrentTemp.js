import { useEffect } from "react"

export default function CurrentTemp(props){
    // useEffect(()=>{
    //     console.log( 'current temp: ',props.data);
    // })
    return (
      <>
        <div className="h-4/5 w-full p-0 text-xl grid grid-cols-3 gap-5">
          <div className="h-full w-full p-3 drop-shadow-xl rounded-xl bg-slate-200 dark:bg-slate-700">
            <div className=" text-3xl flex justify-center items-center">
              {props.data.condition.text}
            </div>
            <div
              title={"last update: " + props.data.last_updated}
              className="h-1/2 w-full flex justify-center items-center"
            >
              <span className="text-8xl">
                <span>{props.data.temp_c}</span>
                <span>&#8451;</span>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="mx-2">Feels like:</span>
              <span>
                {props.data.feelslike_c} <span>&#8451;</span>
              </span>
            </div>
          </div>
          <div className="col-span-2 h-full w-full p-3 drop-shadow-xl rounded-xl grid grid-cols-3 grid-rows-3 bg-slate-200 dark:bg-slate-700">
            <div
              className=" col-span-1 row-span-2 flex flex-row justify-center items-start h-full"
              title="Humidity"
            >
              <div>
                <img
                  src={require("../images/humidity.png")}
                  alt=""
                  className="h-12 mx-2"
                />
              </div>
              <div className="h-full flex justify-center items-start text-6xl ">
                <span>{props.data.humidity}</span>
                <span>%</span>
              </div>
            </div>
            <div className=" col-start-3 col-span-1 row-span-1 flex justify-end items-start">
              <span className="text-slate-400 dark:text-slate-500">
                Source: WeatherAPI
              </span>
            </div>
            <div
              className=" col-start-2 row-start-1 col-span-1 row-span-3 flex justify-center items-center"
              title="UV light"
            >
              <div>
                <img
                  src={require("../images/uv-index.png")}
                  alt=""
                  className="h-14 mx-2"
                />
              </div>
              <div className="h-full flex justify-center items-center text-6xl ">
                <span>{props.data.uv}</span>
              </div>
            </div>
            <div className=" col-start-1 row-start-3 col-span-1 row-span-1 flex justify-center items-end">
              <span className=" text-slate-400 dark:text-slate-500">
                Last update: <span>{props.data.last_updated}</span>
              </span>
            </div>

            <div className=" col-span-1 row-span-2 col-start-3 row-start-2 flex flex-row justify-center items-end" title="Wind speed">
              <div>
                <img
                  src={require("../images/wind.png")}
                  alt=""
                  className="h-14 mx-2"
                />
              </div>
              <div className="flex flex-row justify-center items-center">
                <span className="text-6xl mx-1">{props.data.wind_kph}</span>
                <span className="text-base">K/m</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}