import { useState, useEffect } from "react";
import Head from "next/head";
import { Paper, TextInput, Button, Text, Group } from "@mantine/core";

export default function Home() {
  const [weather, setWeather] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    async function getWeather(searchTerm) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=imperial`
        );
        const data = await response.json();
        console.log(data);
        if (data?.cod === "400") throw data;
        setWeather(data);
      } catch (err) {
        console.log(err);
      }
    }

    getWeather(searchTerm);
    console.log(weather);
  }, []);

  function onKeyDown(event) {
    if (event.key === "Enter") {
      setSearchTerm(event.target.value);
    }
  }

  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage:
          "url('https://news-cdn.softpedia.com/images/news2/YoWindow-for-iOS-a-User-Friendly-Animated-Weather-App-18.png')",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Head>
          <title>Weather</title>
        </Head>
        <h1>Weather App</h1>
        <Paper withBorder p="lg" style={{ maxWidth: "500px" }}>
          <Group position="apart">
            <Text size="xl" weight={500}>
              Get Weather!
            </Text>
          </Group>
          <Group position="apart">
            <Text size="lg">Enter the City name to get the weather below!</Text>
          </Group>
          <Group position="apart" mb="xs">
            <TextInput
              // label="City Name"
              type="text"
              placeholder="Search here..."
              onChange={(e) => setWeather(e.target.value)}
              onKeyDown={(e) => onKeyDown(e)}
            ></TextInput>
          </Group>
          <Group>
            <Button variant="gradient" size="md" onClick={() => getWeather()}>
              Get Weather
            </Button>
          </Group>
        </Paper>
      </div>
      {/* <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => setWeather(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
      /> */}
      {/* <button onClick={() => setWeather(searchTerm)}>Get Weather</button> */}
      {/* {data.map((item) => {
        return;
        <div>item.name, item.main</div>;
      })} */}
      {Object.keys(weather).length !== 0 ? <> </> : null}
      <Group>{/* <Text>{weather.name} Weather</Text> */}</Group>
      <Group>{/* <Text>currently {weather.main.temp} &deg;F</Text> */}</Group>
    </div>
  );
}
