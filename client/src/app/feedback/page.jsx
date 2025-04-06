'use client'

import {Box,Image,Button,Text,Textarea} from '@chakra-ui/react'
import { Star } from 'lucide-react'
import { Navbar } from '@/components/ui/navbarComponent/navbarPage'
import { useState } from 'react'


export default function FeedBackPage(){
const [rating,setrating] = useState(0)


    return(
//#4D4D4D
<Box height={["100vh"]} width={["100%"]}bgColor={["#2A2A2C"]} backgroundImage="url(./feedback-bg.png)" backgroundSize={["cover"]} backgroundRepeat={"no-repeat"} display={["flex"]} flexDir={["column"]} justifyContent={["space-between"]} alignItems={["center"]}>
<Box height={["10%"]} width={["100%"]} display={["flex"]} justifyContent={["center","right"]} alignItems={["center","right"]}> 
<Image src='/AiD_ALERT.png' height={["70%","95%"]}/> 
</Box>
<Box height={["20%"]} width={["100%"]} justifyContent={["center"]} alignItems={["center"]} display={["flex"]} flexDirection={["column"]}  >
    <Box> <Text fontSize={["26px","40px"]} fontWeight={600} color={["white"]} letterSpacing={2}> Tell us what you think! </Text></Box>
    <Box> <Text fontFamily={["poppin"]} fontSize={["12px","20px"]} letterSpacing={1} color={["white"]} opacity={0.6 }> Your feedback helps us keep you safe </Text> </Box>
</Box>
<Box width={["90%","20%"]}  borderBottom={["1px solid #4D4D4D"]}> </Box>
<Box height={["10%"]} width={["100%","100%"]}  display={["flex"]} justifyContent={["center"]} alignItems={["center"]}>
    <Box> <Text fontFamily={["poppin"]} fontSize={["16px","25px"]} color={["white"]} opacity={0.8}> Rate us- </Text></Box>
    <Box display={["flex"]} justifyContent={["space-between"]} alignItems={["center"]} width={["50%","15%"]}> 
        <Button background={["none"]} height={["5px","40px"]} width={["5px","40px"]} color={(rating>0)? "yellow" : "#fff"} onClick={()=>{setrating(1)}}> <Star/> </Button> 
        <Button background={["none"]}  height={["5px","40px"]} width={["5px","40px"]} color={(rating>1)? "yellow" : "#fff"} onClick={()=>{setrating(2)}}> <Star/> </Button>
        <Button background={["none"]}  height={["5px","40px"]} width={["5px","40px"]} color={(rating>2)? "yellow" : "#fff"} onClick={()=>{setrating(3)}} > <Star/> </Button>
        <Button background={["none"]}  height={["5px","40px"]} width={["5px","40px"]}  color={(rating>3)? "yellow" : "#fff"} onClick={()=>{setrating(4)}}> <Star/> </Button>
        <Button background={["none"]}  height={["5px","40px"]} width={["5px","40px"]} color={(rating>4)? "yellow" : "#fff"} onClick={()=>{setrating(5)}} > <Star/> </Button>
    </Box>
</Box>
<Box height={["40%"]} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignContent={["center"]}>
    <Textarea height={["100%"]} width={["90%","40%"]}  placeholder='whats on your mind?' textAlign={["start"]} paddingTop={["10px"]} bgColor={["#2D2D2D"]} opacity={0.7} fontFamily={["poppins"]} letterSpacing={1} color={["#fff"]}/> 
</Box> 
<Box height={["10%"]} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignItems={["center"]}>
    <Button fontFamily={["poppins"]}> SUBMIT </Button>
</Box>
<Box width={["100%","30%"]}>
    <Navbar/>
</Box>
</Box>
    )
}