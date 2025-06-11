"use client"
import {Box,Image,Button,Text} from '@chakra-ui/react'
import { SquareActivity, ChevronRight, Waves, Fan, Mountain, ThermometerSun, Flame, TriangleAlert, UmbrellaOff} from 'lucide-react';
import { useState } from 'react';
import { Navbar } from '@/components/ui/navbarComponent/navbarPage';

function GuidelinesPage(){
  
  const [Clickedvalue,setClickedvalue] = useState(0)


    return (
      <Box
        height={["100vh"]}
        width={["100%"]}
        display={["flex"]}
        flexDir={["column"]}
        justifyContent={["center"]}
        alignItems={["center"]}
        bg="linear-gradient(0deg, #353535 -60%, #1B1B1B 100%)"
      >
        <Box
          height={["10%"]}
          width={["100%"]}
          display={["flex"]}
          justifyContent={["center","right"]}
          alignItems={[ "center", "right"]}
          //   backgroundColor={["blue"]}
        >
          <Image src="/AiD_ALERT.png" height={["95%"]} />
        </Box>
        <Box
          height={["15%"]}
          width={["100%"]}
          display={["flex"]}
          flexDir={["column"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          //   backgroundColor={["yellow"]}
        >
          <Text
            color={["white"]}
            opacity={0.9}
            fontSize={["25px","35px"]}
            fontWeight={700}
            fontStyle={["poppins"]}
          >
            Stay safe, Stay prepared
          </Text>
          <Text
            color={["white"]}
            opacity={0.7}
            fontSize={["10px","15px"]}
            letterSpacing={["1px"]}
          >
            Choose a disaster type to view safety guidelines and emergency tips.
          </Text>
        </Box>
        <Box
          height={["85%"]}
          width={["100%"]}
          display={["flex"]}
          flexDir={["row"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          //   backgroundColor={["teal"]}
        >
          <Box
            height={["95%","100%"]}
            width={["95%","25%"]}
            borderRadius={15}
            bg="linear-gradient(0deg,rgb(82, 80, 80) -60%,rgb(47, 46, 46) 100%)"
            overflow={"scroll"}
            // backgroundColor={["pink"]}
          >
            <Button
              height={["10%"]}
              width={["100%"]}
              background={["none"]}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              borderBottom={"1px solid rgb(102, 102, 102)"}
              onClick={() => setClickedvalue(0)}
            >
              <Box
                width={["80%"]}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["left"]}
                gap={4}
              >
                <SquareActivity style={{ height: "40px", width: "40px" }} />
                <Text
                  color={["white"]}
                  fontSize={["15px"]}
                  fontWeight={600}
                  letterSpacing={["1px"]}
                >
                  
                  EARTHQUAKE
                </Text>
              </Box>
              <Box
                width={["20%"]}
                transition={"background 0.3s ease-in-out"}
                _hover={{ backgroundColor: "#353535" }}
              >
                <Button background={["none"]}>
                  
                  <ChevronRight />
                </Button>
              </Box>
            </Button>
            {Clickedvalue === 0 ? (
              <Box height={["100%"]} width={["100%"]} display={["flex","none"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                 <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["18px","20px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Earthquake Preparedness & Safety steps: </Text> 
                </Box>
                  <Box height={["10%"]} width={["90%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]} > <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  1. Secure Heavy Items   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px", "20px"]} color={["white"]}  letterSpacing={["2px"]}>Anchor shelves, water heaters, and heavy furniture to walls.  </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  2.Create a Safety Plan   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]} letterSpacing={["2px"]}>  Identify safe spots like under sturdy tables or against interior walls</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  3. Build an Emergency Kit    </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}>  Include water, food, flashlight, first-aid, and whistle.   </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  4. Practice “Drop, Cover, and Hold On"  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Regularly drill with your family. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  5. Aftershock Awareness  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Be prepared for smaller quakes following the main event </Text>  </Box>
              </Box>):<Box></Box>}
            <Button
              height={["10%"]}
              width={["100%"]}
              background={["none"]}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              borderBottom={"1px solid rgb(102, 102, 102)"}
              onClick={() => setClickedvalue(1)}
            >
              <Box
                width={["80%"]}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["left"]}
                gap={4}
              >
                <Waves style={{ height: "40px", width: "40px" }} />
                <Text
                  color={["white"]}
                  fontSize={["15px"]}
                  fontWeight={600}
                  letterSpacing={["1px"]}
                >
                  
                  FLOOD
                </Text>
              </Box>
              <Box
                width={["20%"]}
                transition={"background 0.3s ease-in-out"}
                _hover={{ backgroundColor: "#353535" }}
              >
                <Button background={["none"]}>
                  
                  <ChevronRight />
                </Button>
              </Box>
            </Button>{
               Clickedvalue === 1 ? (
              <Box height={"100%"} width={["100%"]} display={["flex","none"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["25px", "30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Flood Preparedness & Safety Steps </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  1. Prepare Your Home   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Elevate electrical appliances, seal cracks, and check drain  </Text>  </Box> 
                  
                <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  2. Emergency Kit   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Stock food, water, meds, flashlight, waterproof documents. </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  3. Stay Informed  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Monitor radio, weather alerts, and mobile apps.  </Text>  </Box>
              </Box>) : <Box></Box>  } 
            <Button
              height={["10%"]}
              width={["100%"]}
              background={["none"]}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              borderBottom={"1px solid rgb(102, 102, 102)"}
              onClick={() => setClickedvalue(2)}
            >
              <Box
                width={["80%"]}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["left"]}
                gap={4}
              >
                <Fan style={{ height: "40px", width: "40px" }} />
                <Text
                  color={["white"]}
                  fontSize={["15px"]}
                  fontWeight={600}
                  letterSpacing={["1px"]}
                >
                  
                  CYCLONE
                </Text>
              </Box>
              <Box
                width={["20%"]}
                transition={"background 0.3s ease-in-out"}
                _hover={{ backgroundColor: "#353535" }}
              >
                <Button background={["none"]}>
                  
                  <ChevronRight />
                </Button>
              </Box>
            </Button> 
            {
                 Clickedvalue === 2 ? (
              <Box height={"100%"} width={["100%"]} display={["flex","none"]}  justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["20px","30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Cyclone Preparedness & Safety Steps </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  1. Reinforce Home Structure  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Secure roofs, windows, and doors.  </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  2.Emergency Contacts   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]} letterSpacing={["2px"]}>  Share a contact plan with your family.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  3. Evacuation Readiness    </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}>  Know cyclone shelters and keep bags ready.   </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  4. Power Down  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Unplug electronics and switch off gas lines. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  5. Post-Cyclone Caution  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Avoid debris, fallen wires, and don’t drink tap water until safe </Text>  </Box>
              </Box> ) : <Box></Box> }
            <Button
              height={["10%"]}
              width={["100%"]}
              background={["none"]}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              borderBottom={"1px solid rgb(102, 102, 102)"}
              onClick={() => setClickedvalue(3)}
            >
              <Box
                width={["80%"]}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["left"]}
                gap={4}
              >
                <Mountain style={{ height: "40px", width: "40px" }} />
                <Text
                  color={["white"]}
                  fontSize={["15px"]}
                  fontWeight={600}
                  letterSpacing={["1px"]}
                >
                 
                  LANDSLIDE
                </Text>
              </Box>
              <Box
                width={["20%"]}
                transition={"background 0.3s ease-in-out"}
                _hover={{ backgroundColor: "#353535" }}
              >
                <Button background={["none"]}>
                  
                  <ChevronRight />
                </Button>
              </Box>
            </Button>{
                Clickedvalue === 3 ? (
              <Box height={"100%"} width={["100%"]} display={["flex","none"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]} >
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["25px", "30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Landslide Preparedness  </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  1. Stay Alert to Warning Signs </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Cracks in ground, tilting trees, or unusual sounds. </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  2.Avoid Steep Slopes  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]} letterSpacing={["2px"]}>  Especially after heavy rain or earthquakes.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  3. Have a Family Meeting Spot   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Outside of risk zones.   </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]}  display={["flex"]} alignItems={["center"]} justifyContent={["left"]} > <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  4.Listen to Local Authorities </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Evacuate when advised. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  5. Post-Slide Caution </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Beware of secondary slides, report damaged roads and power lines. </Text>  </Box>
              </Box> ) : <Box></Box>  }
            <Button
              height={["10%"]}
              width={["100%"]}
              background={["none"]}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              borderBottom={"1px solid rgb(102, 102, 102)"}
              onClick={() => setClickedvalue(4)}
            >
              <Box
                width={["80%"]}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["left"]}
                gap={4}
              >
                <ThermometerSun style={{ height: "40px", width: "40px" }} />
                <Text
                  color={["white"]}
                  fontSize={["15px"]}
                  fontWeight={600}
                  letterSpacing={["1px"]}
                >
                  
                  HEATWAVE
                </Text>
              </Box>
              <Box
                width={["20%"]}
                transition={"background 0.3s ease-in-out"}
                _hover={{ backgroundColor: "#353535" }}
              >
                <Button background={["none"]}>
                  
                  <ChevronRight />
                </Button>
              </Box>
            </Button>{
              Clickedvalue === 4 ? (
              <Box height={"100%"} width={["100%"]} display={["flex","none"]}  justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]} >
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["25px", "30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Heatwave Survival Tips  </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  1. Stay Indoors During Peak Hours </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> 12 PM to 4 PM is the hottest. </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]} > <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  2.Hydrate Frequently  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]} letterSpacing={["2px"]}>  Drink water every hour, even if not thirsty.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  3. Wear Light-Colored Clothing  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Avoid dark, tight fabrics.  </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  4.Avoid Strenuous Activities </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Postpone exercise and outdoor chores. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  5. Cool Your Space </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}>  Use fans, wet towels, or AC if available.     </Text>  </Box>
              </Box> ) : <Box></Box> }
            <Button
              height={["10%"]}
              width={["100%"]}
              background={["none"]}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              borderBottom={"1px solid rgb(102, 102, 102)"}
              onClick={() => setClickedvalue(5)}
            >
              <Box
                width={["80%"]}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["left"]}
                gap={4}
              >
                <Flame style={{ height: "40px", width: "40px" }} />
                <Text
                  color={["white"]}
                  fontSize={["15px"]}
                  fontWeight={600}
                  letterSpacing={["1px"]}
                >
                  
                  FIRE
                </Text>
              </Box>
              <Box
                width={["20%"]}
                transition={"background 0.3s ease-in-out"}
                _hover={{ backgroundColor: "#353535" }}
              >
                <Button background={["none"]}>
                  
                  <ChevronRight />
                </Button>
              </Box>
            </Button>{
              Clickedvalue === 5 ? (
              <Box height={"100%"} width={["100%"]}  display={["flex","none"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["20px","30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Fire Safety & Preparedness  </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  1. Install Smoke Alarms </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Test monthly and change batteries every 6 months.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  2. Plan Escape Routes </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]} letterSpacing={["2px"]}>  Identify 2 exits from each room. Practice evacuation </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  3. Fire Extinguisher Access </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Learn how to use it and place it near kitchen & exits. </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  4.Stay Low & Go </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Crawl under smoke, don’t open hot doors. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]} > <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  5.Do Not Re-Enter </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}>  Wait for fire officials to declare it safe.    </Text>  </Box>
              </Box>) : <Box> </Box>}
            <Button
              height={["10%"]}
              width={["100%"]}
              background={["none"]}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              borderBottom={"1px solid rgb(102, 102, 102)"}
              onClick={() => setClickedvalue(6)}
            >
              <Box
                width={["80%"]}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["left"]}
                gap={4}
              >
                <TriangleAlert style={{ height: "40px", width: "40px" }} />
                <Text
                  color={["white"]}
                  fontSize={["15px"]}
                  fontWeight={600}
                  letterSpacing={["1px"]}
                >
                  
                  PANDEMIC
                </Text>
              </Box>
              <Box
                width={["20%"]}
                transition={"background 0.3s ease-in-out"}
                _hover={{ backgroundColor: "#353535" }}
              >
                <Button background={["none"]}>
                  
                  <ChevronRight />
                </Button>
              </Box>
            </Button>
            {
            Clickedvalue === 6 ? (
              <Box height={"100%"} width={["100%"]} display={["flex","none"]}  justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["20px", "30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Pandemic Preparedness & Safety Steps  </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  1. Hygiene Practices </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Wash hands, wear masks, and sanitize surfaces.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]} > <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  2. Stock Essentials </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]} letterSpacing={["2px"]}>  Medicines, groceries, masks, and hygiene supplies </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  3. Stay Informed </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Follow verified health authority updates. </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  4. Social Distancing </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Avoid gatherings and maintain 6-feet distance. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  5. Isolation Protocols </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}>  Have a room ready if someone gets sick.   </Text>  </Box>
              </Box>) : <Box> </Box> }
            
            <Button
              height={["10%"]}
              width={["100%"]}
              background={["none"]}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              borderBottom={"1px solid rgb(102, 102, 102)"}
              onClick={() => setClickedvalue(7)}
            >
              <Box
                width={["80%"]}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["left"]}
                gap={4}
              >
                <UmbrellaOff style={{ height: "40px", width: "40px" }} />
                <Text
                  color={["white"]}
                  fontSize={["15px"]}
                  fontWeight={600}
                  letterSpacing={["1px"]}
                >
                  
                  DROUGHT
                </Text>
              </Box>
              <Box
                width={["20%"]}
                transition={"background 0.3s ease-in-out"}
                _hover={{ backgroundColor: "#353535" }}
              >
                <Button background={["none"]}>
                  
                  <ChevronRight />
                </Button>
              </Box>
              </Button>{
                Clickedvalue === 7 ? (
              <Box height={"100%"} width={["100%"]} display={["flex","none"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["20px", "30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Drought Preparedness & Resource Conservation </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  1. Water Storage </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Collect rainwater and store safely.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  2. Limit Usage </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]} letterSpacing={["2px"]}>  Use buckets instead of hoses, fix leaks immediately. </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  3. Drought-Resistant Crops </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Farmers should explore climate-smart agriculture. </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  4. Community Planning </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}> Coordinate water-sharing and local storage strategies. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text color={["white"]} fontSize={["20px","25px"]} fontWeight={600} >  5. Stay Informed </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]} display={["flex"]} alignItems={["center"]} justifyContent={["left"]}> <Text fontSize={["15px","20px"]} color={["white"]}  letterSpacing={["2px"]}>  Follow agricultural extension services for guidance.   </Text>  </Box>
              </Box>): <Box> </Box> }
              
            
            <Box height={["30%","20%"]} display={["flex"]} justifyContent={["flex-end"]} flexDirection={["column"]} width={["100%"]}>
              <Navbar />
            </Box>
          </Box>
          <Box height={["100%"]} width={["70%"]} display={["none","flex"]} justifyContent={["center"]} alignItems={["flex-start"]} >
            {Clickedvalue === 0 ? (
              <Box height={["100%"]} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                 <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Earthquake Preparedness & Safety steps: </Text> 
                </Box>
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  1. Secure Heavy Items   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}>Anchor shelves, water heaters, and heavy furniture to walls.  </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  2.Create a Safety Plan   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]} letterSpacing={["2px"]}>  Identify safe spots like under sturdy tables or against interior walls</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  3. Build an Emergency Kit    </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}>  Include water, food, flashlight, first-aid, and whistle.   </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  4. Practice “Drop, Cover, and Hold On"  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Regularly drill with your family. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  5. Aftershock Awareness  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Be prepared for smaller quakes following the main event </Text>  </Box>
              </Box>
               
                
              
            ) : Clickedvalue === 1 ? (
              <Box height={"100%"} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Flood Preparedness & Safety Steps </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  1. Prepare Your Home   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Elevate electrical appliances, seal cracks, and check drain  </Text>  </Box> 
                <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  2. Emergency Kit   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Stock food, water, meds, flashlight, waterproof documents. </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  3. Stay Informed  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Monitor radio, weather alerts, and mobile apps.  </Text>  </Box>
              </Box>
            ) : Clickedvalue === 2 ? (
              <Box height={"100%"} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Cyclone Preparedness & Safety Steps </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  1. Reinforce Home Structure  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Secure roofs, windows, and doors.  </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  2.Emergency Contacts   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]} letterSpacing={["2px"]}>  Share a contact plan with your family.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  3. Evacuation Readiness    </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}>  Know cyclone shelters and keep bags ready.   </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  4. Power Down  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Unplug electronics and switch off gas lines. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  5. Post-Cyclone Caution  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Avoid debris, fallen wires, and don’t drink tap water until safe </Text>  </Box>
              </Box>
            ) : Clickedvalue === 3 ? (
              <Box height={"100%"} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]} >
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Landslide Preparedness  </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  1. Stay Alert to Warning Signs </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Cracks in ground, tilting trees, or unusual sounds. </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  2.Avoid Steep Slopes  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]} letterSpacing={["2px"]}>  Especially after heavy rain or earthquakes.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  3. Have a Family Meeting Spot   </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Outside of risk zones.   </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  4.Listen to Local Authorities </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Evacuate when advised. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  5. Post-Slide Caution </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Beware of secondary slides, report damaged roads and power lines. </Text>  </Box>
              </Box>
            ) : Clickedvalue === 4 ? (
              <Box height={"100%"} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]} >
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Heatwave Survival Tips  </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  1. Stay Indoors During Peak Hours </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> 12 PM to 4 PM is the hottest. </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  2.Hydrate Frequently  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]} letterSpacing={["2px"]}>  Drink water every hour, even if not thirsty.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  3. Wear Light-Colored Clothing  </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Avoid dark, tight fabrics.  </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  4.Avoid Strenuous Activities </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Postpone exercise and outdoor chores. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  5. Cool Your Space </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}>  Use fans, wet towels, or AC if available.     </Text>  </Box>
              </Box>
            ) : Clickedvalue === 5 ? (
              <Box height={"100%"} width={["100%"]}  display={["flex"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Fire Safety & Preparedness  </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  1. Install Smoke Alarms </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Test monthly and change batteries every 6 months.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  2. Plan Escape Routes </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]} letterSpacing={["2px"]}>  Identify 2 exits from each room. Practice evacuation </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  3. Fire Extinguisher Access </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Learn how to use it and place it near kitchen & exits. </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  4.Stay Low & Go </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Crawl under smoke, don’t open hot doors. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  5.Do Not Re-Enter </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}>  Wait for fire officials to declare it safe.    </Text>  </Box>
              </Box>
              
            ) : Clickedvalue === 6 ? (
              <Box height={"100%"} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Pandemic Preparedness & Safety Steps  </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  1. Hygiene Practices </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Wash hands, wear masks, and sanitize surfaces.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  2. Stock Essentials </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]} letterSpacing={["2px"]}>  Medicines, groceries, masks, and hygiene supplies </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  3. Stay Informed </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Follow verified health authority updates. </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  4. Social Distancing </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Avoid gatherings and maintain 6-feet distance. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  5. Isolation Protocols </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}>  Have a room ready if someone gets sick.   </Text>  </Box>
              </Box>
            
            ) : Clickedvalue === 7 ? (
              <Box height={"100%"} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignItems={["center"]} flexDirection={["column"]}>
                <Box display={["flex"]} justifyContent={["left"]} alignItems={["left"]} height={["10%"]} width={["95%"]} >
                  <Text fontSize={["30px"]} fontWeight={600} color={["white"]} fontStyle={["italic"]} > Drought Preparedness & Resource Conservation </Text> 
                </Box>
                <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  1. Water Storage </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Collect rainwater and store safely.</Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  2. Limit Usage </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]} letterSpacing={["2px"]}>  Use buckets instead of hoses, fix leaks immediately. </Text>  </Box> 
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  3. Drought-Resistant Crops </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Farmers should explore climate-smart agriculture. </Text>  </Box>
                  <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  4. Community Planning </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}> Coordinate water-sharing and local storage strategies. </Text>  </Box> 
                   <Box height={["10%"]} width={["90%"]} > <Text color={["white"]} fontSize={["25px"]} fontWeight={600} >  5. Stay Informed </Text> </Box> 
                  <Box height={["10%"]} width={["85%"]}> <Text fontSize={["20px"]} color={["white"]}  letterSpacing={["2px"]}>  Follow agricultural extension services for guidance.   </Text>  </Box>
              </Box>
            
            ) : (
              <Box></Box>
            )}
          </Box>
        </Box>
      </Box>
    );
}

export default GuidelinesPage