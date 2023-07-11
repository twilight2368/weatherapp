import { useContext, useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
import Loading from "../components/Loading";
import { APIkey } from "../Shared";
import { cityContext } from "../App";
import Content from "../components/Content";

export default function Main(props) {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useContext(cityContext);
  const [currentdata, setCurrentdata] = useState();

  const url =
    "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" + city + "&days=3";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": APIkey,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoading(true);
    if (city) {
      fetch(url, options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data);
          setCurrentdata(data)
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      localStorage.setItem("currentCity", "Hanoi");
      setCity(localStorage.getItem("currentCity"));
    }
  }, [city]);

  return (
    <>
      <SideBar>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Content data = {currentdata} />
          </>
        )}
      </SideBar>
    </>
  );
}
