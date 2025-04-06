"use client";

import useWeatherstore from "@/userstore/dataStore";
import { useEffect, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Link,
  Input,
  Spinner,
} from "@chakra-ui/react";
import {
  Sun,
  Cloudy,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Snowflake,
  ArrowBigRightDash,
  ArrowBigLeftDash,
  Search,
} from "lucide-react";
import { Navbar } from "@/components/ui/navbarComponent/navbarPage";
import WeatherStatsComponent from "./weatherstats/page";
import UserLocationDetails from "@/userstore/userlocation";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";
export default function Home() {
  const [content, setContent] = useState();
  const [pageloading, setpageLoading] = useState(false);
  const {
    weatherOrgApi,
    openMeteoApi,
    loading,
    airQualityApi,
    oceanApi,
    soilApi,
    setGeminiResponse,
    geminiResponse,
    setWeatherOrgApi,
    setopenMeteoApi,
    setAirQualityApi,
  } = useWeatherstore();
  const { coordinates, setcoordinates, Refresh, setRefresh } =
    UserLocationDetails();
  const [place, setplace] = useState("");

  async function GetresPonse(content, ai) {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `${content}  predict the weather of today  & natural disaster that can happen its risk ,give the answer in a json object dont make it string from with no xtra wordings and keep it very one word every data with measurement in % in 100% exapmle:   "weather": {
    "temperature": "todays temperature",
    "precipitation": "todays precipitation",
    "humidity": "todays humidity",
    "wind_speed": "todays wind speed",
    "condition": "todays weather condition",
    "uvindex": "todays uv index",
    "pressure": "todays pressure",
    "feels_like": "todays feels like temperature"
  },
  "natural_disasters": {
    "earthquake": {
      "risk": "5%"
    },
    "flood": {
      "risk": "15%"
    },
    "wildfire": {
      "risk": "20%"
    },
    "hurricane": {
      "risk": "2%"
    },
    "tornado": {
      "risk": "3%"
    }
  }
}`,
    });
    setGeminiResponse(
      JSON.parse(response.text.replace(/^```json|```$/g, "").trim())
    );
   
  }
  //search
  async function SearchPlace() {
    setpageLoading(false);
    try {
      const response = await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=${process.env.NEXT_PUBLIC_WEATHER_ORG_API_KEY}`
        )
        .then(async (res) => {
          setcoordinates(res.data[0].lat, res.data[0].lon);
        });
    } catch (err) {
      console.log(err);
    } finally {
      setRefresh(true);
    }
  }

  async function apicalls() {
    setpageLoading(false);
    const weatherApi = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${process.env.NEXT_PUBLIC_WEATHER_ORG_API_KEY}&units=metric`
      )
      .then((res) => {
        setWeatherOrgApi(res.data);
        console.log(weatherOrgApi);
      });

    const openMeteoApi = await axios
      .get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude: coordinates.lat,
          longitude: coordinates.long,
          daily: [
            "uv_index_max",
            "precipitation_sum",
            "precipitation_probability_max",
            "temperature_2m_max",
            "temperature_2m_min",
            "wind_speed_10m_max",
            "wind_gusts_10m_max",
          ],
          hourly: [
            "temperature_2m",
            "wind_speed_10m",
            "wind_gusts_10m",
            "cloud_cover",
            "precipitation",
            "precipitation_probability",
            "apparent_temperature",
            "relative_humidity_2m",
            "soil_moisture_0_to_1cm",
            "soil_temperature_0cm",
            "snow_depth",
          ],
          current: [
            "wind_speed_10m",
            "temperature_2m",
            "precipitation",
            "relative_humidity_2m",
            "apparent_temperature",
            "cloud_cover",
            "wind_gusts_10m",
            "pressure_msl",
          ],
          timezone: "auto",
          past_days: 1, // Gets last 7 days + forecast
        },
      })
      .then((res) => {
        setopenMeteoApi(res.data);
      });

    const airQualityApi = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${process.env.NEXT_PUBLIC_WEATHER_ORG_API_KEY}`
      )
      .then((res) => {
        setAirQualityApi(res.data);
        setpageLoading(true);
      });

    setRefresh(false);
  }

  useEffect(() => {
    if (loading) {
      try {
        const metadata = {
          atmospheric: {
            temperature: openMeteoApi.current.apparent_temperature,
            humidity: openMeteoApi.hourly.relative_humidity_2m,
            pressure: weatherOrgApi.main.pressure,
            wind_speed: openMeteoApi.daily.wind_speed_10m_max,
            precipitation: openMeteoApi.current.precipitation,
            wind_gusts_10m_max: openMeteoApi.daily.wind_gusts_10m_max,
          },
          oceanic: {
            sea_surface_temperature:
              oceanApi.current.sea_surface_temperature || 0,
            sea_level_pressure: oceanApi.current.sea_level_pressure || 0,
            wave_height: oceanApi.current.wave_height || 0,
            wave_period: oceanApi.current.wave_period || 0,
            sea_level_pressure: openMeteoApi.current.pressure_msl || 0,
            swell_height: oceanApi.current.significant_swell_height || 0,
          },
          land_surface: {
            soil_moisture: openMeteoApi.hourly.soil_moisture_0_to_1cm,
            soil_temperature_0cm: openMeteoApi.hourly.soil_temperature_0cm,
            snow_depth: openMeteoApi.hourly.snow_depth,
          },
        };

        setContent(metadata);
        if (Refresh) {
          apicalls();
        }
      } catch (err) {
        console.log(err);
      } finally {
        console.log(geminiResponse, weatherOrgApi,openMeteoApi);
        const ai = new GoogleGenAI({
          apiKey: `${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        });
        GetresPonse(content, ai);
        import("olamaps-web-sdk").then((module) => {
          const { OlaMaps } = module;
          const olaMaps = new OlaMaps({
            apiKey: process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY,
          });

          const myMap = olaMaps.init({
            style:
              "https://api.olamaps.io/tiles/vector/v1/styles/default-dark-standard/style.json",
            container: "map",
            center: [coordinates.long, coordinates.lat],
            zoom: 15,
          });

          olaMaps
            .addMarker({ offset: [0, 6], anchor: "bottom" })
            .setLngLat([coordinates.long, coordinates.lat])
            .addTo(myMap);
        });
        if (geminiResponse) {
          console.log(geminiResponse);
          if(!pageloading){
            setpageLoading(true);
          }
        }
      }
    }
  }, [coordinates,loading,Refresh]);

  useEffect(() => {
    if (loading) {
      if (Refresh) {
        apicalls();
      }
    }
  }, [coordinates, Refresh]);

useEffect(() => {
  if(!Refresh){
    if (geminiResponse?.natural_disasters){
      if (geminiResponse?.natural_disasters.earthquake.risk > 50) {
        toast.error("High risk of earthquake detected! Stay safe!");
      }
      if (geminiResponse?.natural_disasters.flood.risk > 50) {
        toast.error("High risk of flood detected! Stay safe!");
      }
      if (geminiResponse?.natural_disasters.wildfire.risk > 50) {
        toast.error("High risk of wildfire detected! Stay safe!");
      }
      if (geminiResponse?.natural_disasters.hurricane.risk > 50) {
        toast.error("High risk of hurricane detected! Stay safe!");
      }
      if (geminiResponse?.natural_disasters.tornado.risk > 50) {
        toast.error("High risk of tornado detected! Stay safe!");
      }
    }

    if (pageloading) {
      if (weatherOrgApi?.weather[0]?.main === "Rain") {
        toast.error("Heavy rainfall might occur!");
      }
      if (weatherOrgApi?.weather[0]?.main === "Thunderstorm") {
        toast.error("Heavy thunderstorm might occur!");
      }
      if (weatherOrgApi?.weather[0]?.main === "Snow") {
        toast.error("Heavy snowfall might occur!");
      }
    }

    if (openMeteoApi?.current?.apparent_temperature > 30) {
      toast.error("Extreme temperature detected!");
    }
  if (loading) {
    if (airQualityApi?.list[0]?.main?.aqi > 3) {
      toast.error("Extreme air pollution detected!");
    }
  }
  }
},[Refresh])

useEffect(() => {
    if (geminiResponse?.natural_disasters) {
      if (geminiResponse?.natural_disasters.earthquake.risk > 50) {
        toast.error("High risk of earthquake detected! Stay safe!");
      }
      if (geminiResponse?.natural_disasters.flood.risk > 50) {
        toast.error("High risk of flood detected! Stay safe!");
      }
      if (geminiResponse?.natural_disasters.wildfire.risk > 50) {
        toast.error("High risk of wildfire detected! Stay safe!");
      }
      if (geminiResponse?.natural_disasters.hurricane.risk > 50) {
        toast.error("High risk of hurricane detected! Stay safe!");
      }
      if (geminiResponse?.natural_disasters.tornado.risk > 50) {
        toast.error("High risk of tornado detected! Stay safe!");
      }
    }

    if (openMeteoApi?.current?.apparent_temperature > 30) {
      toast.error("Extreme temperature detected!");
    }
   
},[loading])

useEffect(() => {
   if (pageloading) {
     if (weatherOrgApi?.weather[0]?.main === "Rain") {
       toast.error("Heavy rainfall might occur!");
     }
     if (weatherOrgApi?.weather[0]?.main === "Thunderstorm") {
       toast.error("Heavy thunderstorm might occur!");
     }
     if (weatherOrgApi?.weather[0]?.main === "Snow") {
       toast.error("Heavy snowfall might occur!");
     }
   }
    if (pageloading) {
      if (airQualityApi?.list[0]?.main?.aqi > 3) {
        toast.error("Extreme air pollution detected!");
      }
    }

}, [pageloading]);

  if (!pageloading) {
    return (
      <Box
        height={["100vh"]}
        width={["100%"]}
        bgColor={["black"]}
        display={["flex"]}
        flexDirection={["column"]}
        justifyContent={["center"]}
        alignItems={["center"]}
        gap={2}
      >
        <Spinner
          size={"lg"}
          color="red.500"
          css={{ "--spinner-track-color": "colors.gray.200" }}
        />
        <Text fontFamily={["poppins"]} fontSize={["20px"]}>
          Loading...
        </Text>
      </Box>
    );
  }
if(pageloading){

  return (
    /* parent*/

    <Box>
    <Toaster/>
      <Box
        height={["100vh"]}
        width={["100%"]}
        bg="linear-gradient(0deg, #353535 -60%, #1B1B1B 100%)"
        display={["flex"]}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        {/*red box */}
        <Box
          height={["100%"]}
          width={["30%"]}
          bg="linear-gradient(180deg,rgb(50, 50, 50) -0%, #1B1B1B 100%)"
          display={["none", "flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          borderRightRadius={["10px"]}
        >
          <WeatherStatsComponent />
        </Box>
        <Box height={["95%"]} width={["100%", "70%"]}>
          <Flex
            height={["100%"]}
            width={["100%"]}
            flexDirection={["column"]}
            justifyContent={["space-around"]}
            alignItems={["center"]}
            gap={1}
          >
            <Box
              height={["0%", "10%"]}
              width={["80%", "100%"]}
              display={["flex"]}
              justifyContent={["center", "right"]}
              alignItems={["center"]}
            >
              <Image
                src="./AiD_ALERT.png"
                height={["60px", "100px"]}
                width={["auto"]}
              />
            </Box>
            <Box
              height={["10%", "0%"]}
              width={["100%"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              gap={2}
            >
              <Text
                fontFamily={["poppins"]}
                fontSize={["12px", "16px"]}
                color={["#fff200"]}
                fontStyle={["italic"]}
                letterSpacing={0.5}
                display={["none"]}
              >
                heavy rainfall might occur !
              </Text>
              <Link href="/weatherstats">
                <Button
                  display={["block", "none"]}
                  borderRadius={"80px"}
                  height={["30px"]}
                  width={["220px"]}
                  bgColor={["#353535"]}
                  color={["#fff"]}
                  fontFamily={["poppins"]}
                  fontSize={["14px"]}
                  fontWeight={350}
                  letterSpacing={0.5}
                  boxDirection={"2px  2px 2px 2px rgba(0, 0, 0, 0.1)"}
                >
                  Detailed Overview
                </Button>
              </Link>
            </Box>
            <Box
              height={["20%", "30%"]}
              width={["95%", "90%"]}
              display={["flex"]}
              justifyContent={["space-between"]}
              // padding={["0px 5px"]}
              alignItems={["center"]}
              position={["relative"]}
              zIndex={[0]}
            >
              <Image
                src={["./mountain.jpg"]}
                position={["absolute"]}
                zIndex={[-1]}
                height={["160px", "220px"]}
                width={["100%"]}
                opacity={0.5}
                filter={"blur(1px)"}
                borderRadius={["10px"]}
                boxShadow={[
                  "0px 0px 1px 1px rgba(0,0,0,0.1)",
                  "1px 1px 1px 1px rgba(0,0,0,0.3)",
                ]}
              ></Image>
              <Box
                height={["100%"]}
                width={["35%", "20%"]}
                // bgColor={["blue"]}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["center"]}
                alignItems={["center"]}
                gap={6}
                // filter="blur(0px) brightness(0.9)"
              >
                {/*mobile view*/}
                <Box
                  color={["#fff"]}
                  opacity={0.9}
                  fontFamily={["poppins"]}
                  display={["flex", "none"]}
                  flexDirection={["column"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                  gap={6}
                >
                  {/* {console.log(geminiResponse.weather.condition)} */}
                  {pageloading ? (
                    weatherOrgApi?.weather[0]?.main === "Sunny" ? (
                      <Sun size={80} strokeWidth={1.5} />
                    ) : weatherOrgApi?.weather[0]?.main === "Clouds" ? (
                      <Cloudy size={80} strokeWidth={1.5} />
                    ) : weatherOrgApi?.weather[0]?.main === "Rain" ? (
                      <CloudRain size={80} strokeWidth={1.5} />
                    ) : weatherOrgApi?.weather[0]?.main === "Thunderstorm" ? (
                      <CloudLightning size={80} strokeWidth={1.5} />
                    ) : weatherOrgApi?.weather[0]?.main === "Snow" ? (
                      <CloudSnow size={80} strokeWidth={1.5} />
                    ) : weatherOrgApi?.weather[0]?.main === "cold" ? (
                      <Snowflake size={80} strokeWidth={1.5} />
                    ) : (
                      <Sun size={80} strokeWidth={1.5} />
                    )
                  ) : (
                    <Sun size={80} strokeWidth={1.5} />
                  )}
                  <Box
                    fontFamily={["poppins"]}
                    fontSize={["15px"]}
                    fontWeight={500}
                    color={["#fff"]}
                    opacity={0.8}
                  >
                    Feels like {(weatherOrgApi?.main?.feels_like).toFixed(0)}°C
                  </Box>
                </Box>

                {/*pc view*/}
                <Box
                  color={["#fff"]}
                  display={["none", "flex"]}
                  flexDirection={["column"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                  gap={5}
                >
                  {/* {console.log(geminiResponse.weather.condition)} */}
                  {pageloading ? (
                    weatherOrgApi?.weather[0]?.main === "Sunny" ? (
                      <Sun size={100} strokeWidth={1} />
                    ) : weatherOrgApi?.weather[0]?.main === "Clouds" ? (
                      <Cloudy size={100} />
                    ) : weatherOrgApi?.weather[0]?.main === "Rain" ? (
                      <CloudRain size={100} />
                    ) : weatherOrgApi?.weather[0]?.main === "Thunderstorm" ? (
                      <CloudLightning size={100} />
                    ) : weatherOrgApi?.weather[0]?.main === "Snow" ? (
                      <CloudSnow size={100} />
                    ) : weatherOrgApi?.weather[0]?.main === "cold" ? (
                      <Snowflake size={100} />
                    ) : (
                      <Sun size={100} />
                    )
                  ) : (
                    <Sun size={100} />
                  )}
                  <Box
                    fontFamily={["poppins"]}
                    fontSize={["18px"]}
                    color={["#fff"]}
                    letterSpacing={[1]}
                    fontWeight={500}
                  >
                    Feels like {(weatherOrgApi?.main?.feels_like).toFixed(0)}°C
                  </Box>
                </Box>
              </Box>

              <Box
                height={["100%"]}
                width={["35%", "20%"]}
                // bgColor={["blue"]}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["center"]}
                alignItems={["center"]}
                color={["#fff"]}
              >
                <Box
                  width={["100%"]}
                  fontFamily={["poppins"]}
                  fontSize={["40px", "60px"]}
                  display={["flex"]}
                  justifyContent={["center"]}
                  alignItems={["top"]}
                  fontWeight={600}
                  opacity={0.8}
                  gap={1}
                  // textAlign={["right"]}
                  // bgColor={["red"]}
                >
                  {(content?.atmospheric?.temperature).toFixed(0)}
                  <Box fontSize={["30px", "40px"]}>°C</Box>
                </Box>
                <Box
                  // height={["50%"]}
                  width={["100%", "100%"]}
                  // bgColor={["pink"]}
                  display={["flex"]}
                  flexDirection={["column"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                >
                  <Box
                    textAlign={["right"]}
                    width={["60%"]}
                    fontFamily={["poppins"]}
                    fontSize={["18px", "25px"]}
                    fontWeight={600}
                    opacity={0.8}
                  >
                    {weatherOrgApi?.weather[0]?.main}
                  </Box>
                  <Box
                    fontFamily={["poppins"]}
                    fontSize={["10px", "12px", "12px"]}
                    fontStyle={["italic"]}
                    width={["60%", "50%"]}
                    opacity={0.8}
                    textAlign={["right"]}
                    // bgColor={ "red"}
                  >
                    {weatherOrgApi?.name}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              height={["20%"]}
              width={["90%"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["center"]}
              alignItems={["center"]}
            >
              <Box
                display={["flex"]}
                justifyContent={["center"]}
                alignItems={["center"]}
                height={["20%"]}
                width={["100%"]}
              >
                <Text
                  color={["#ffffff"]}
                  fontFamily={["poppins"]}
                  fontWeight={400}
                  borderBottom={["1px solid white"]}
                  opacity={0.8}
                  letterSpacing={1}
                >
                  HOURLY FORECAST
                </Text>
              </Box>
              <Box
                display={["flex"]}
                justifyContent={["center"]}
                alignItems={["center"]}
                gap={2}
                height={["80%"]}
                width={["100%"]}
                //bgColor={["green"]}
              >
                <Box color={["#ffffff"]} opacity={0.8}>
                  <ArrowBigLeftDash size={40} strokeWidth={1.5} />
                </Box>
                <Box
                  display={["flex"]}
                  justifyContent={["flex-start"]}
                  alignItems={["center"]}
                  gap={10}
                  overflow={["scroll"]}
                  width={["90%"]}
                  height={["100%"]}
                  overflowY={"hidden"}
                  padding={["0px 5px"]}
                >
                  {openMeteoApi?.hourly?.temperature_2m.map((data, index) => (
                    <Box
                      height={["80%"]}
                      width={["22%", "15%"]}
                      //bgColor={["red"]}
                      display={["flex"]}
                      flex="0 0 auto"
                      flexDirection={["column"]}
                      justifyContent={["center"]}
                      alignItems={["center"]}
                      borderRadius={["15px"]}
                      bg="linear-gradient(270deg, #353535 -60%, #1B1B1B 100%)"
                      key={index}
                    >
                      <Box
                        height={["90%"]}
                        width={["90%"]}
                        //bgColor={["blue"]}
                        display={["flex"]}
                        flexDirection={["column", "row"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                      >
                        <Box
                          height={["50%", "100%"]}
                          width={["100%", "50%"]}
                          display={["flex"]}
                          justifyContent={["end", "center"]}
                          alignItems={["center"]}
                          //bgColor={"lime"}
                        >
                          {pageloading ? (
                            openMeteoApi?.hourly?.temperature_2m[index] > 30 ? (
                              <Sun
                                size={100}
                                strokeWidth={0.5}
                                color="#ffffff"
                              />
                            ) : openMeteoApi?.hourly?.temperature_2m[index] >
                              20 ? (
                              <Cloudy
                                size={100}
                                strokeWidth={0.5}
                                color="#ffffff"
                              />
                            ) : openMeteoApi?.hourly?.temperature_2m[index] >
                              15 ? (
                              <CloudRain
                                size={100}
                                strokeWidth={0.5}
                                color="#ffffff"
                              />
                            ) : openMeteoApi?.hourly?.temperature_2m[index] >
                              10 ? (
                              <CloudLightning
                                size={100}
                                strokeWidth={0.5}
                                color="#ffffff"
                              />
                            ) : openMeteoApi?.hourly?.temperature_2m[index] >=
                              0 ? (
                              <CloudSnow
                                size={100}
                                strokeWidth={1}
                                color="#ffffff"
                              />
                            ) : openMeteoApi?.hourly?.temperature_2m[index] >
                              -10 ? (
                              <Snowflake
                                size={100}
                                strokeWidth={1}
                                color="#ffffff"
                              />
                            ) : (
                              <Sun size={100} strokeWidth={0.5} />
                            )
                          ) : (
                            <Sun size={100} strokeWidth={0.5} />
                          )}
                        </Box>
                        <Box
                          height={["70%", "100%"]}
                          width={["100%", "50%"]}
                          display={["flex"]}
                          flexDirection={["column"]}
                          justifyContent={[, "center"]}
                          alignItems={["center"]}
                          fontFamily={["poppins"]}

                          // bgColor={["pink"]}
                        >
                          <Box
                            color={["#ffffff"]}
                            width={["100%"]}
                            textAlign={["center "]}
                            fontSize={["12px"]}
                          >
                            {(openMeteoApi?.hourly?.time[index]).slice(11)}
                          </Box>
                          <Box color={["#ffffff"]} fontSize={["13px", "16px"]}>
                            {openMeteoApi?.hourly?.temperature_2m[index]}℃
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box color={["#ffffff"]} opacity={0.8}>
                  <ArrowBigRightDash size={40} strokeWidth={1.5} />
                </Box>
              </Box>
            </Box>
            <Box
              height={["30%"]}
              width={["90%"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              gap={2}
            >
              <Box
                height={["10%"]}
                width={["100%"]}
                display={["flex"]}
                justifyContent={["center"]}
                alignItems={["center"]}
                gap={[1, 3]}
              >
                <Input
                  height={["40px"]}
                  width={["75%", "85%"]}
                  border={["1px solid #383838"]}
                  color={["#fff"]}
                  fontFamily={["poppins"]}
                  letterSpacing={1}
                  placeholder="Search city or state"
                  onChange={(e) => {
                    setplace(e.target.value);
                  }}
                ></Input>
                <Button
                  color={["#fff"]}
                  bgColor={["#262626"]}
                  border={["1px solid #353535"]}
                  _hover={{ bgColor: "#292929" }}
                  onClick={() => {
                    SearchPlace();
                  }}
                >
                  <Search />
                </Button>
              </Box>
              <Box
                height={["90%"]}
                width={["100%"]}
                display={["flex"]}
                justifyContent={["center"]}
                alignItems={["center"]}
                position={["relative"]}
              >
                <Box
                  height={["90%"]}
                  width={["90%"]}
                  id="map"
                  position={["relative"]}
                  borderRadius={["10px"]}
                ></Box>
              </Box>
            </Box>
            <Box width={["100%"]} display={["block", "none"]}>
              <Navbar />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}}
