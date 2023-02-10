import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <div className="bg-black/50 relative p-8 rounded-md">
            <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
            <div className="flex justify-between text-center">
              <div>
                <p className="text-2xl">{data.weather[0].main}</p>
                <p className="text-9xl">
                  Temperature {data.main.temp.toFixed(0)}&#176;
                </p>

                <p className="font-bold text-2xl">
                  Feels Like {data.main.feels_like.toFixed(0)}&#176;
                </p>
                {/* <p className="text-xl">Feels Like</p> */}
                <p className="text-9xl">
                  Max {data.main.temp_max.toFixed(0)}&#176;
                </p>
                <p className="text-9xl">
                  Min {data.main.temp_min.toFixed(0)}&#176;
                </p>
              </div>
              <div>
                <p className="font-bold text-2xl">
                  Humidity {data.main.humidity}%;
                </p>
                {/* <p className="text-xl">Humidity</p> */}
              </div>
              <div>
                <p className="font-bold text-2xl">
                  Winds {data.wind.speed.toFixed(0)} MPH;
                </p>
                {/* <p className="text-xl">Winds</p> */}
              </div>
            </div>
          </div>
          {/* Bottom */}
        </div>
      </div>
    </div>
  );
};

export default Weather;
