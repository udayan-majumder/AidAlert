"use client";

import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import axios from "axios";
import { useEffect } from "react";
import useWeatherstore from "@/userstore/dataStore";
import { Provider } from "@/components/ui/provider";
import UserLocationDetails from "@/userstore/userlocation";
import { redirect,usePathname} from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Specify the font weights you need
  subsets: ["latin"], // Specify the subset(s) you need
  variable: "--font-poppins", // Define a CSS variable for the font
});

export default function RootLayout({ children }) {
  const path = usePathname()
  const {
    setWeatherOrgApi,
    setopenMeteoApi,
    setLoading,
    setAirQualityApi,
    setOceanApi,
    setSoilApi,
    loading
  } = useWeatherstore();
 
  const {coordinates,setcoordinates,setRefresh,Refresh} = UserLocationDetails();


 async function GetUserDetails() {

  const CheckLoginStatus = await axios.get(`${process.env.NEXT_PUBLIC_SERVERURL}/user/userdetails`,{withCredentials:true})
  .then((res)=>{
    console.log(res)
   if(res.data.message ==='UnAuthorized'){
    if(!path.startsWith('/auth')){
     return redirect("/auth");
    }
   }
   else if(res.data.message=== 'Authorized'){
    if(path.startsWith("/auth")){
       return redirect("/");
    }
   
   }
  })
  

 }






  async function GetAllApi() {
    navigator.geolocation.getCurrentPosition(async(position) => {
      const { latitude, longitude } = position.coords;
      if(latitude,longitude){
        setcoordinates(latitude,longitude)
      }
    
      try {
        if(coordinates){
        // 1. OpenWeatherMap (Current Conditions)
        console.log(latitude,longitude,coordinates.lat,coordinates.long)
        const weatherApi = await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_ORG_API_KEY}&units=metric`
          )
          .then((res) => {
            setWeatherOrgApi(res.data);
            
          });

        // 2. Open-Meteo (Historical + Forecast)
        const openMeteoApi = await axios
          .get(`https://api.open-meteo.com/v1/forecast`, {
            params: {
              latitude,
              longitude,
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

        // 3. AirVisual API (Air Quality - Critical for Health Predictions)
        const airQualityApi = await axios
          .get(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_ORG_API_KEY}`
          )
          .then((res) => {
            setAirQualityApi(res.data);
          });

        //4. ocean API (Ocean/Tide Data - For Coastal Areas)
        const marineData = await axios
          .get(`https://marine-api.open-meteo.com/v1/marine?`, {
            params: {
              latitude,
              longitude,
              daily: [
                "swell_wave_height_max",
                "wind_wave_height_max",
                "wave_height_max",
              ],
              hourly: [
                "wave_height",
                "sea_surface_temperature",
                "sea_level_height_msl",
                "swell_wave_height",
                "wind_wave_height",
                "wind_wave_direction",
                "swell_wave_direction",
              ],
              current: [
                "sea_surface_temperature",
                "sea_level_height_msl",
                "wave_height",
                "wave_direction",
                "wind_wave_height",
                "wind_wave_direction",
                "swell_wave_height",
                "swell_wave_direction",
              ],
              timezone: "auto",
              past_days: 1, // Gets last 7 days + forecast
            },
          })
          .then((res) => {
            setOceanApi(res.data); // Current ocean conditions
          });

        //5. VisualCrossing (Severe Weather Alerts)
    
      }} catch (err) {
        console.log(err);
      }finally{
        if(coordinates){
        setLoading();
        }
      }
    });
  }

  useEffect(() => {
    GetAllApi();
    GetUserDetails()
  }, []);

  return (
    <html lang="en">
      <head>
        <script src="https://www.unpkg.com/olamaps-web-sdk@latest/dist/olamaps-web-sdk.umd.js"></script>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        style={{ backgroundColor: "#fff" }}
        suppressHydrationWarning
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
