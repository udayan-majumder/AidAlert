"use client"
import {Box,Image,Button,Text,Input} from '@chakra-ui/react'
import { SquareActivity, ChevronRight } from 'lucide-react';

function GuidelinesPage(){
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
          justifyContent={["right"]}
          alignItems={["right"]}
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
            <Text color={["white"]} opacity={0.9} fontSize={["35px"]} fontWeight={700} fontStyle={["poppins"]}> 
                Stay safe, Stay prepared 
            </Text>
            <Text color={["white"]} opacity={0.7} fontSize={["15px"]} letterSpacing={["1px"]}       >
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
            height={["100%"]}
            width={["25%"]}
            borderRadius={15}
            bg="linear-gradient(0deg,rgb(82, 80, 80) -60%,rgb(47, 46, 46) 100%)"
             // backgroundColor={["pink"]}
          >
             <Button height={["10%"]} width={["100%"]} background={["none"]} display={["flex"]} alignItems={["center"]} justifyContent={["center"]}>
            <Box width={["80%"]}display={["flex"]} alignItems={["center"]} justifyContent={["left"]} gap={4}>
            <SquareActivity style={{height:"40px",width:"40px"}}/>
            <Text color={["white"]} fontSize={["20px"]} fontWeight={600} letterSpacing={["1px"]}> EARTHQUAKE </Text> 
            </Box>
            <Box width={["20%"]} transition={"background 0.3s ease-in-out"} _hover={{backgroundColor:"#353535"}}   > 
                <Button background={["none"]}> <ChevronRight /></Button>   
            </Box> 
             </Button>



          </Box>
          <Box
            height={["100%"]}
            width={["70%"]}
            // backgroundColor={["orange"]}
          ></Box>
        </Box>
      </Box>
    );
}

export default GuidelinesPage