import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export default function SideBar(props) {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <>
      <div className={darkmode ? "dark" : ""}>
        <div className=" min-h-screen w-full grid grid-cols-10 dark:bg-slate-600 dark:text-white select-none">
          <div className=" col-span-2 h-full pt-5 p-10">
            <div className="h-full w-full drop-shadow-xl bg-slate-200 rounded-lg dark:bg-slate-700">
              <div className=" h-24 flex flex-row justify-center items-center gap-3">
                <img
                  src={require("../images/weather.png")}
                  alt=""
                  className="h-1/2 "
                />
                <div className=" text-3xl font-black">WeatherToday</div>
              </div>
              <div className=" h-20 flex flex-row justify-center items-center">
                <div className=" m-3 text-xl font-bold">Dark mode</div>
                <div className="flex justify-center items-center ">
                  <Switch
                    checked={darkmode}
                    onChange={setDarkmode}
                    className={`${darkmode ? "bg-slate-800" : " bg-slate-300"}
                    relative inline-flex h-6 w-[43px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${
                        darkmode ? "translate-x-6" : "translate-x-0"
                      }
                      pointer-events-none my-auto inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>

              <div className="w-full">
                <div className="relative w-4/5 mx-auto">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Select an option
                  </label>
                  <select
                    id="countries"
                    className="bg-transparent  text-gray-900 text-2xl rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:bg-transparent dark:text-white"
                    onChange={(e) => {
                      console.log(e.target.value);
                      localStorage.setItem("currentCity", e.target.value);
                    }}
                  >
                    <option value="I dont know" className="dark:text-black text-sm hidden" >
                      Choose your city
                    </option>
                    <option value="US" className="dark:text-black text-sm">
                      United States
                    </option>
                    <option value="CA" className="dark:text-black text-sm">
                      Canada
                    </option>
                    <option value="FR" className="dark:text-black text-sm">
                      France
                    </option>
                    <option value="DE" className="dark:text-black text-sm">
                      Germany
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8">{props.children}</div>
        </div>
      </div>
    </>
  );
}
