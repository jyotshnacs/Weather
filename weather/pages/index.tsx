import Head from "next/head";
import Image from "next/legacy/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather.jsx";
import Spinner from "../components/Spinner";

export default function Home() {
  const [weather, setWeather] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setloading] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=${API_KEY}`;
  const fetchWeather = (e: any) => {
    e.preventDefault();
    setloading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setWeather(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    setSearchTerm("");
    setloading(false);
  };

  function onKeyDown(event: any) {
    if (event.key === "Enter") {
      setSearchTerm(event.target.value);
      setWeather(event.target.value);
    }
  }

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Head>
          <title>Weather</title>
        </Head>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[1]" />
        <Image
          src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80"
          alt="weather"
          layout="fill"
          className="object-cover"
        />
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transaprent border border-gray-300 text-white rounded-2xl"
          >
            <div>
              <input
                className="bg-transparent
              border-none text-white focus:outline-none text-2xl"
                type="text"
                placeholder="Enter a City Name..."
                onChange={(e) => setWeather(e.target.value)}
                onKeyDown={onKeyDown}
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}
