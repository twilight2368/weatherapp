import { useEffect } from "react";
import CurrentCity from "./CurrentCity";
import CurrentTemp from "./CurrentTemp";
import Chart from "./Chart";
import Details from "./Details";

export default function Content(props){
  // useEffect(()=>{
  //   console.log( "my data passdown: ",props.data)
  // }, [props.data])
    return (
      <>
        <div className="h-full w-full p-5 grid grid-cols-4 gap-2 grid-rows-3">
          <div className="col-span-1">
            {props.data ? <CurrentCity data={props.data.location} /> : <></>}
          </div>
          <div className=" col-span-3">
            {props.data ? <CurrentTemp data={props.data.current} /> : <></>}
          </div>
          <div className=" col-span-3 row-span-2 pt-0 p-5">
            {props.data ? (
              <>
                <Chart />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className=" row-span-2 pt-2 p-4 mb-0">
                {
                  props.data ? <><Details data = {props.data.forecast.forecastday[0]}/></> : <></>
                }
          </div>
        </div>
      </>
    );
}