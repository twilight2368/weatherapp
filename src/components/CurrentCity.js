import { useEffect } from "react";

export default function CurrentCity(props) {
  // useEffect(()=>{
  //   console.log( 'location: ' ,props.data)
  // })
    return (
      <>
        <div className="h-4/5 w-5/6 m-auto p-3 bg-slate-200 rounded-xl drop-shadow-xl overflow-y-hidden dark:bg-slate-700">
          <div className=" text-2xl font-bold">
            <span>Current city: </span>{" "}
            <span className=" font-normal">{props.data.name}</span>
          </div>
          <div className=" text-2xl font-bold">
            <span>Country: </span>{" "}
            <span className=" font-normal"> {props.data.country}</span>
          </div>
          <div className=" text-2xl font-bold">
            <span>Last update in localtime: </span>{" "} <br />
            <span className=" font-normal"> {props.data.localtime}</span>
          </div>
        </div>
      </>
    );
}