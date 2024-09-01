import { useEffect, useState } from "react";

export default function Details(props) {
  const [timeon, setTimeon] = useState('sunrise');
  // useEffect(() => {
  //   console.log(props.data);
  // }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className=" h-full w-full  drop-shadow-xl rounded-xl bg-slate-200 dark:bg-slate-700">
        <div className="h-1/3 w-full relative">
          <div
            className={
              " h-full w-full absolute duration-500 flex flex-col  justify-center items-center " +
              classNames(timeon === "sunrise" ? " opacity-100" : " opacity-0")
            }
          >
            <img
              src={require("../images/sunrise.png")}
              alt=""
              className="h-20 w-20 block"
            />
            <div className="text-2xl">{props.data.astro.sunrise}</div>
          </div>
          <div
            className={
              " h-full w-full absolute duration-500 flex flex-col justify-center items-center " +
              classNames(timeon === "sunset" ? " opacity-100" : " opacity-0")
            }
          >
            <img
              src={require("../images/sunset.png")}
              alt=""
              className="h-20 w-20 block"
            />
            <div className="text-2xl">{props.data.astro.sunset}</div>
          </div>
          <div
            className={
              " h-full w-full absolute duration-500 flex flex-col  justify-center items-center " +
              classNames(timeon === "moonrise" ? " opacity-100" : " opacity-0")
            }
          >
            <img
              src={require("../images/moonrise.png")}
              alt=""
              className="h-20 w-20 block"
            />
            <div className="text-2xl">{props.data.astro.moonrise}</div>
          </div>
        </div>

        <div className="h-10 w-full">
          <select
            id="timeon"
            className="bg-transparent  text-gray-900 text-2xl rounded-lg block w-4/5 mx-auto p-1.5 dark:bg-gray-700 dark:bg-transparent dark:text-white"
            onChange={(e) => {
              setTimeon(e.target.value);
            }}
          >
            <option value="sunrise" className="dark:text-black text-sm">
              Sunrise
            </option>
            <option value="sunset" className="dark:text-black text-sm">
              Sunset
            </option>
            <option value="moonrise" className="dark:text-black text-sm">
              Moonrise
            </option>
          </select>
        </div>

        <div className="w-full pt-0 p-5 text-2xl flex justify-center items-center">
          <ul className="list-none list-inside">
            <li>
              Average temperature: {props.data.day.avgtemp_c}{" "}
              <span>&#8451;</span>
            </li>
            <li>
              Max temperature: {props.data.day.maxtemp_c} <span>&#8451;</span>
            </li>
            <li>
              Min temperature: {props.data.day.mintemp_c} <span>&#8451;</span>
            </li>
            <li>Average humidity: {props.data.day.avghumidity} %</li>
            <li>Chance of rain: {props.data.day.daily_chance_of_rain} %</li>
            <li>Chance of snow: {props.data.day.daily_chance_of_snow} %</li>
            <li>UV warning: {props.data.day.uv}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
