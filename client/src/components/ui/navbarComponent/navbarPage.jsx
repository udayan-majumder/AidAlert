import { Box,Link} from "@chakra-ui/react";
import { HandHeart, House, MessageCircleMore, Newspaper, User} from "lucide-react";



export function Navbar(){
    


return (
    <Box height={["80px"]} width={["100%"]} display={["flex"]} justifyContent={["center"]} alignItems={["center"]}>
    <Box height={["90%"]} width={["94%"]} bg="linear-gradient(180deg, #353535 0%, #1B1B1B 100%)" borderRadius={80} display={["flex"]} justifyContent={["space-around"]} alignItems={["center"]}>
    <Box  display={["flex"]} flexDirection={["column"]} justifyContent={["center"]} alignItems={["center"]} gap={1}>  <Box bgColor={["#424242"]}  borderRadius={100} padding={["5px 5px"]} ><User size={35} color="white" strokeWidth={0.8} /></Box> <Box fontSize={["10px"]} color={["#fff"]} fontFamily={["poppins"]} letterSpacing={1}>userinfo</Box> </Box>
    <Link href="/donation" outline={"none"}>
    <Box  display={["flex"]} flexDirection={["column"]} justifyContent={["center"]} alignItems={["center"]} gap={1}>  <Box bgColor={["#424242"]}  borderRadius={100} padding={["5px 5px"]} ><HandHeart size={35} color="white" strokeWidth={0.8} /></Box> <Box fontSize={["10px"]} color={["#fff"]} fontFamily={["poppins"]} letterSpacing={1}>donate </Box> </Box>
    </Link>
    <Link href="/" outline={"none"}>
    <Box display={["flex"]} flexDirection={["column"]}   justifyContent={["center"]} alignItems={["center"]} gap={1}> <Box bgColor={["#424242"]}  borderRadius={100} padding={["5px 5px"]}> <House size={35} color="white" strokeWidth={0.8}/></Box><Box color={["#fff"]} fontSize={["10px"]} fontFamily={["poppins"]} letterSpacing={1}>homepage</Box> </Box>
    </Link>
    <Link href="/feedback" outline={"none"}>
    <Box display={["flex"]} flexDirection={["column"]}  justifyContent={["center"]} alignItems={["center"]}gap={1}> <Box bgColor={["#424242"]}  borderRadius={100} padding={["5px 5px"]}><MessageCircleMore  size={35} color="white"strokeWidth={0.8}/> </Box><Box color={["#fff"]} fontSize={["10px"]} fontFamily={["poppins"]} letterSpacing={1}>feedback</Box> </Box>
    </Link>
     
     <Box display={["flex"]} flexDirection={["column"]}  justifyContent={["center"]} alignItems={["center"]} gap={1}> <Box bgColor={["#424242"]}  borderRadius={100} padding={["5px 5px"]}><Newspaper size={35} color="white"strokeWidth={0.8}/> </Box><Box color={["#fff"]} fontSize={["10px"]} fontFamily={["poppins"]} letterSpacing={1}>news</Box> </Box> 
    </Box>
    </Box>
)



}

