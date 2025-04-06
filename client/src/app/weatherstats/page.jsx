'use client'
import {Box,Flex,Text} from '@chakra-ui/react'
import useWeatherstore from "@/userstore/dataStore";
import { useEffect, useState } from 'react';
import { Waves, SunMedium, Droplets, Gauge, Wind ,Thermometer, Droplet} from 'lucide-react';
import { Navbar } from '@/components/ui/navbarComponent/navbarPage';

export default function WeatherStatsComponent(){
  const [allThreats,setThreats]=useState([])
const {
  weatherOrgApi,
  openMeteoApi,
  loading,
  airQualityApi,
  geminiResponse
} = useWeatherstore();






function Measureaqi() {
  const aqi = airQualityApi.list[0].main.aqi;
  return Array.from({ length: aqi }, (_, i) => (
    <Box key={i} height={["90%"]} width={["15%"]} bgColor={["red"]} borderRadius={["10px"]} boxShadow={["0px 0px 2px 2px rgba(0,0,0,0.2)"]}></Box> // Renders 5, 4, 3, 2, 1, 0
  ));
}

function WeatherAlerts(){
   
const alllist= []

    if (geminiResponse?.natural_disasters?.earthquake?.risk > 50) {
      alllist.push("High risk of earthquake detected! Stay safe!");
    }
    if (geminiResponse?.natural_disasters?.flood?.risk > 50) {
      alllist.push("High risk of flood detected! Stay safe!");
    }
    if (geminiResponse?.natural_disasters?.wildfire?.risk > 50) {
      alllist.push("High risk of wildfire detected! Stay safe!");
    }
    if (geminiResponse?.natural_disasters?.hurricane?.risk > 50) {
      alllist.push("High risk of hurricane detected! Stay safe!");
    }
    if (geminiResponse?.natural_disasters?.tornado?.risk > 50) {
      alllist.push("High risk of tornado detected! Stay safe!");
    }

    // Check weather conditions
    if (weatherOrgApi?.weather?.[0]?.main === "Rain") {
      alllist.push("Heavy rainfall might occur!");
    }
    if (weatherOrgApi?.weather?.[0]?.main === "Thunderstorm") {
      alllist.push("Heavy thunderstorm might occur!");
    }
    if (weatherOrgApi?.weather?.[0]?.main === "Snow") {
      alllist.push("Heavy snowfall might occur!");
    }

    // Check temperature
    if (openMeteoApi?.current?.apparent_temperature > 30) {
      alllist.push("Extreme temperature detected!");
    }

    // Check air quality
    if (loading && airQualityApi?.list?.[0]?.main?.aqi >= 3) {
      alllist.push("Extreme air pollution detected!");
    }

    // Update threats state
    setThreats(alllist);
  
}

useEffect(()=>{
  WeatherAlerts()
},[loading])



if(loading){

const detailsClimateArray = [`${openMeteoApi?.daily?.uv_index_max[0]}`,`${weatherOrgApi?.main?.humidity}%`,`${weatherOrgApi?.main?.pressure} mb`,`${weatherOrgApi?.wind?.speed} km/h`,`${weatherOrgApi?.main?.feels_like} C`,`${openMeteoApi?.current?.precipitation}%`] 
const arrayItems = ["UV INDEX","HUMIDITY","PRESSURE","WIND","FEELS LIKE","PRECIPITATION"]
const Iconsdiv = [SunMedium, Droplets, Gauge, Wind, Thermometer, Droplet];


function geticon(index){
  const Currenticon = Iconsdiv[index]
  return(<Currenticon size={40} strokeWidth={1}/>)
}

function DetermineAqi(){
 const value = airQualityApi?.list[0]?.main?.aqi; 
 if (value > 0 && value <= 1) {
   return (
     <Box
       color={["#90EE90"]} //green
       width={["100%"]}
       display={["flex"]}
       flexDirection={["column"]}
       justifyContent={["center"]}
       alignItems={["center"]}
       gap={1}     >
       Good Quality!
       <Text color={["white"]} opacity={0.8} fontSize={["12px"]}>
         Enjoy & Maintain Clean Air
       </Text>
     </Box>
   );
 } else if (value > 1 && value <= 2) {
   return (
     <Box
       color={["#FFFF00"]} //yellow
       width={["100%"]}
       display={["flex"]}
       flexDirection={["column"]}
       justifyContent={["center"]}
       alignItems={["center"]}
       textAlign={["center"]}
       gap={1}
     >
       Moderate Quality{" "}
       <Text color={["white"]} opacity={0.8} fontSize={["12px"]}>
         Reduce Exposure
       </Text>
     </Box>
   );
 } else if (value > 2 && value <= 3) {
   return (
     <Box
       color={["#FFA500"]} //orange
       width={["100%"]}
       display={["flex"]}
       flexDirection={["column"]}
       justifyContent={["center"]}
       alignItems={["center"]}
       gap={1}
     >
       Unhealthy for sensitive groups
       <Text color={["white"]} opacity={0.8} fontSize={["12px"]}>
         Be Cautious
       </Text>
     </Box>
   );
 } else if (value > 3 && value <= 4) {
   return (
     <Box
       color={["#E34234"]} //dark orange
       width={["100%"]}
       display={["flex"]}
       justifyContent={["center"]}
       alignItems={["center"]}
       flexDirection={["column"]}
       gap={1}
     >
       Unhealthy{" "}
       <Text fontSize={["12px"]} color={["white"]} opacity={0.8}>
         {" "}
         Limit outdoor activities{" "}
       </Text>
     </Box>
   );
 } else if (value > 4 && value <= 5) {
   return (
     <Box
       color={["#8B0000"]} //dark red
       display={["flex"]}
       width={["100%"]}
       justifyContent={["center"]}
       alignItems={["center"]}
       flexDirection={["column"]}
       gap={1}
     >
       Very Unhealthy{" "}
       <Text fontSize={["10px"]} color={["white"]} opacity={0.8}> Serious precautions needed! </Text>
     </Box>
   );
 } else if (value > 5 && value <= 6) {
   return (
     <Box
       color={["#FF3333"]} //bright red
       display={["flex"]}
       width={["100%"]}
       justifyContent={["center"]}
       alignItems={["center"]}
       flexDirection={["column"]}
       gap={1}
     >
       Hazardous{" "}
       <Text fontSize={["10px"]} color={["white"]} opacity={0.8}>
         Extreme Danger, Immediate Action Required!{" "}
       </Text>
     </Box>
   );
 }


}

    return (
      <Box
        height={["100vh", "98%"]}
        width={["100%", "98%"]}
        bg="linear-gradient(180deg,rgb(50, 50, 50) -0%, #1B1B1B 100%)"
        display={["flex"]}
        flexDirection={["column"]}
        justifyContent={["top"]}
        alignItems={["center"]}
        gap={2}
      >
        {/*abouts us*/}
        <Box
          height={["5%"]}
          width={["96%", "100%"]}
          display={["flex"]}
          justifyContent={["left"]}
          alignItems={["center"]}
          padding={["0px 10px"]}
        >
          <Text
            height={["50%"]}
            fontFamily={["poppins"]}
            fontSize={["15px"]}
            borderBottom={["1px solid #DEDEDD"]}
            fontWeight={500}
            fontStyle={["italic"]}
            color={["white"]}
            opacity={0.8}
          >
            {" "}
            ABOUT US{" "}
          </Text>
        </Box>
        {/* warning box*/}
        <Box
          height={["5%"]}
          width={["96%", "100%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          <Text
            height={["50%"]}
            fontFamily={["poppins"]}
            fontSize={["15px"]}
            borderBottom={["1px solid #DEDEDD"]}
            fontWeight={500}
            color={["#fff200"]}
            opacity={0.8}
            display={["flex"]}
            justifyContent={["center"]}
            alignItems={["center"]}
            gap={2}
          >
            {
            allThreats.map((data)=>(
              <Text>{data}</Text>
            ))

            } 
            
          </Text>
        </Box>
        {/* aqi index box*/}
        <Box
          height={["15%"]}
          width={["96%", "100%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          bg="linear-gradient(220deg, #353535 -20%, #1B1B1B 100%)"
          borderRadius={["10px"]}
          boxShadow={["0px 0px 2px 2px rgba(0,0,0,0.2)"]}
        >
          <Flex
            height={["99%"]}
            width={["99%"]}
            display={["flex"]}
            justifyContent={["left"]}
            alignItems={["center"]}
            gap={2}
          >
            <Box height={["100%"]} width={["40%", "25%"]}>
              <Text
                height={["30%"]}
                fontFamily={["poppins"]}
                fontSize={["13px"]}
                display={["flex"]}
                justifyContent={["left"]}
                alignItems={["center"]}
                gap={["3", "2"]}
                color={["white"]}
                opacity={0.8}
                fontWeight={700}
              >
                {" "}
                <Waves color={["#DEDEDD"]} /> AIR- QUALITY
              </Text>
              <Text
                height={["60%"]}
                fontSize={["50px"]}
                fontWeight={500}
                color={["white"]}
                opacity={0.8}
                display={["flex"]}
                justifyContent={["center"]}
                alignItems={["center"]}
                width={["100%"]}
              >
                {airQualityApi ? airQualityApi?.list[0]?.main?.aqi : "l"}/6
              </Text>
            </Box>
            <Box height={["100%"]} width={["55%", "70%"]}>
              <Box
                height={["30%"]}
                width={["100%"]}
                display={["flex"]}
                justifyContent={["center"]}
                alignItems={["center"]}
              >
                <Box
                  display={["flex"]}
                  alignItems={["center"]}
                  height={"6px"}
                  width={["80%"]}
                  bgColor={["gray.700"]}
                  borderRadius={["10px"]}
                  gap={2}
                  padding={["2px 5px"]}
                >
                  {airQualityApi?.list[0]?.main?.aqi ? (
                    Measureaqi()
                  ) : (
                    <Box>loading..</Box>
                  )}
                </Box>
              </Box>
              <Box height={["50%"]}  width={["100%"]} fontFamily={["poppins"]}  display={["flex"]} justifyContent={["center"]} alignItems={["center"]}  fontSize={["13px","16px"]}>{airQualityApi? DetermineAqi():null}</Box>
            </Box>
          </Flex>
        </Box>
        {/**/}
        <Box height={["60%"]} width={["95%"]}display={["grid", "flex"]}  gridTemplateColumns={["repeat(2, 1fr)", "none"]}  gridTemplateRows={["repeat(3, 1fr)", "none"]}  justifyContent={["center"]} flexDirection={["column"]} alignItems={["center"]} fontFamily={["poppins"]} letterSpacing={1} gap={[6,0]}>
          {detailsClimateArray.map((data,index)=>(
            <Box key={index} height={["90%","15%"]} width={["100%","100%"]}  bg={["#353535","none"]} borderBottom={["none","1px solid rgb(83, 83, 83)"]}  display={["flex"]} flexDirection={["column","row"]} justifyContent={["center"]} alignItems={["center"]} gap={[0,1]} borderRadius={["12px","none"]} boxShadow={["0px 0px 3px 3px rgba(17, 17, 17, 0.1)","none"]} color={["white"]} opacity={0.8} transition={"1s ease-in-out"}  _hover={{bgColor:"#333333", transition:"1s ease-in-out"}}>
              <Box height={["10%","100%"]} width={["100%","15%"]}  display={["flex"]} justifyContent={["center","left"]} alignItems={["center"]} >{Iconsdiv? geticon(index):null} </Box>
              <Box height={["40%","100%"]} width={["100%","65%"]} display={["flex"]} justifyContent={["center","left"]} alignItems={["center"]} fontSize={["13px","18px"]}>{arrayItems[index]}</Box>
              <Box height={["20%","60%"]} width={["100%","20%"]}  display={["flex"]} justifyContent={["center"]} alignItems={["center"]} borderLeft={["none","1px solid #fff"]} fontSize={["28px","18px"]} fontWeight={[800,600]}>{data}</Box>
            </Box>
          ))}
        </Box>

        <Navbar />
      </Box>
    );}
}

