import { useContext, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";
import { cityContext } from "../App";
import { themeContext } from "../App";
export default function SideBar(props) {
  const [darkmode, setDarkmode] = useContext(themeContext);
  const [allcity, setAllcity] = useState();
  const [city, setCity] = useContext(cityContext);
  const [searchcity, setSearchcity] = useState();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkmode(true);
    } else if (theme === "light") {
      setDarkmode(false);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    fetch("JSON/MyCity.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setAllcity(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className={darkmode ? "dark" : ""}>
        <div className=" min-h-screen w-full grid grid-cols-10 dark:bg-slate-600 dark:text-white select-none">
          <div className=" col-span-2 h-full pt-5 p-10">
            <div className="h-full w-full drop-shadow-xl bg-slate-200 rounded-lg dark:bg-slate-700">
              <div className=" h-24 flex flex-row justify-center items-center gap-3">
                <img
                  src={require("../images/weather1.png")}
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
                    onClick={(e) => {
                      if (darkmode) {
                        localStorage.setItem("theme", "light");
                      } else {
                        localStorage.setItem("theme", "dark");
                      }
                    }}
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
                    className="block mb-0 text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Select an option
                  </label>
                  <select
                    id="countries"
                    className="bg-transparent  text-gray-900 text-2xl rounded-lg block w-full p-1.5 dark:bg-gray-700 dark:bg-transparent dark:text-white"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setCity(e.target.value);
                      setSearchcity(e.target.value);
                      localStorage.setItem("currentCity", e.target.value);
                    }}
                  >
                    <option
                      value="I dont know"
                      className="dark:text-black text-sm hidden"
                    >
                      Choose your city
                    </option>

                    {allcity ? (
                      allcity.map((e) => {
                        return (
                          <>
                            <option
                              key={e.key}
                              value={e.key}
                              className="text-black dark:text-black text-sm"
                            >
                              {e.key}
                            </option>
                          </>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </select>
                </div>
              </div>

              <div className=" w-full h-24">
                <form
                  id="searchcity"
                  className="w-4/5 mx-auto max-w-sm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCity(searchcity);
                  }}
                >
                  <div className="flex justify-center items-center border-b-2 border-rose-500 dark:border-sky-500 py-2">
                    <input
                      className="bg-transparent border-none w-full text-slate-700 dark:text-slate-200 mr-3 py-1 px-2 text-2xl leading-tight focus:outline-none"
                      type="text"
                      placeholder="Search"
                      value={searchcity}
                      onChange={(e) => {
                        setSearchcity(e.target.value);
                      }}
                    />
                    <button
                      className="flex-shrink-0 bg-rose-500 hover:bg-rose-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-xl text-white py-1 px-2 rounded"
                      type="submit"
                      form="searchcity"
                    >
                      <MagnifyingGlassIcon className="h-6 w-6 text-slate-700 dark:text-slate-200" />
                    </button>
                  </div>
                  <div className="text-slate-600 dark:text-slate-200 text-sm text-center">
                    Reminder: The city that you are searching for will not be
                    saved when you reload if it is not in the select option.
                  </div>
                </form>
              </div>

              <div className="w-full mt-64 flex justify-center items-center">
                <p class="text-center text-slate-500 text-sm">
                  &copy;2023 Mewtwo. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-8">{props.children}</div>
        </div>
      </div>
    </>
  );
}
