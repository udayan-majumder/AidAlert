'use client'
import { Box,Button,Input,Text,Image } from "@chakra-ui/react";
import UserDetails from "@/userstore/userinfoStore";
import { useState } from "react";
import {Navbar} from "../../components/ui/navbarComponent/navbarPage"
function UserInfoPage(){
  const [editUsername,seteditUsername] = useState(true)
  const {UserInfo} = UserDetails()
 
    return (
      <Box
        height={["100vh"]}
        width={"100%"}
        backgroundImage={"url(/mountain.jpg)"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        display={["flex"]}
        flexDirection={["column"]}
        alignItems={["center"]}
        justifyContent={["center"]}
        fontFamily={["poppins"]}
        letterSpacing={[1]}
        gap={[8]}
      >
        <Box
          height={["10%"]}
          width={"80%"}
          display={["flex"]}
          alignItems={["center"]}
          justifyContent={["center"]}
          fontFamily={["poppins"]}
          letterSpacing={[1]}
        >
          <Image src={"/AiD_ALERT.png"} />
        </Box>

        <Box
          height={["80%"]}
          width={["85%", "60%"]}
          background="rgba(255, 255, 255, 0.2)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.3)"
          boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
          display={["flex"]}
          alignItems={["center"]}
          justifyContent={["center"]}
          fontFamily={["poppins"]}
          letterSpacing={[1]}
          opacity={["none"]}
          borderRadius={[10]}
          flexDirection={["column"]}
        >
          <Text
            height={["10%"]}
            width={"80%"}
            display={["flex"]}
            color={"white"}
            fontSize={["20px"]}
            alignItems={["center"]}
            justifyContent={["center"]}
            fontFamily={["poppins"]}
            letterSpacing={[1]}
            borderBottom={["1px solid rgb(230,230,230)"]}
            fontWeight={[500]}
          >
            Your Information
          </Text>
          <Box
            height={["80%"]}
            width={["80%", "60%"]}
            display={["flex"]}
            alignItems={["center"]}
            fontFamily={["poppins"]}
            letterSpacing={[1]}
            //bgColor={["red"]}
            flexDirection={["column"]}
          >
            <Box
              height={["50%"]}
              width={"100%"}
              display={["flex"]}
              alignItems={["center"]}
              flexDirection={["column"]}
              justifyContent={["space-evenly"]}
              fontFamily={["poppins"]}
              letterSpacing={[1]}
              //bgColor={["teal"]}
            >
              <Box
                height={["27%"]}
                width={"100%"}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["center"]}
                fontFamily={["poppins"]}
                letterSpacing={[1]}
                //bgColor={["purple"]}
                flexDirection={["column"]}
              >
                <Text
                  height={["40%"]}
                  width={"100%"}
                  display={["flex"]}
                  color={"white"}
                  fontSize={["12px"]}
                  alignItems={["left"]}
                  justifyContent={["left"]}
                  fontFamily={["poppins"]}
                  letterSpacing={[1]}
                >
                  Your name:
                </Text>
                <Box
                  height={["40%"]}
                  width={"100%"}
                  display={["flex"]}
                  color={"white"}
                  fontSize={["12px"]}
                  flexDirection={["row"]}
                  alignItems={["center"]}
                  justifyContent={["space-between"]}
                  fontFamily={["poppins"]}
                >
                  <Input
                    placeholder={UserInfo?.Username}
                    readOnly={editUsername}
                    width={["72%", "85%"]}
                    border={["1px solid white"]}
                  ></Input>
                  <Button
                    onClick={() => {
                      seteditUsername(false);
                    }}
                    width={["20%", "10%"]}
                  >
                    edit
                  </Button>
                </Box>
              </Box>

              <Box
                height={["27%"]}
                width={"100%"}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["center"]}
                fontFamily={["poppins"]}
                letterSpacing={[1]}
                //bgColor={["purple"]}
                flexDirection={["column"]}
              >
                <Text
                  height={["40%"]}
                  width={"100%"}
                  display={["flex"]}
                  color={"white"}
                  fontSize={["12px"]}
                  alignItems={["left"]}
                  justifyContent={["left"]}
                  fontFamily={["poppins"]}
                  letterSpacing={[1]}
                >
                  Email:
                </Text>
                <Box
                  height={["40%"]}
                  width={"100%"}
                  display={["flex"]}
                  color={"white"}
                  fontSize={["12px"]}
                  flexDirection={["row"]}
                  alignItems={["center"]}
                  justifyContent={["space-between"]}
                  fontFamily={["poppins"]}
                >
                  <Input
                    placeholder={UserInfo?.Email}
                    readOnly={editUsername}
                    width={["72%", "85%"]}
                    border={["1px solid white"]}
                  ></Input>
                  <Button
                    onClick={() => {
                      seteditUsername(false);
                    }}
                    width={["20%", "10%"]}
                  >
                    edit
                  </Button>
                </Box>
              </Box>

              <Box
                height={["27%"]}
                width={"100%"}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["center"]}
                fontFamily={["poppins"]}
                letterSpacing={[1]}
                //bgColor={["purple"]}
                flexDirection={["column"]}
              >
                <Text
                  height={["40%"]}
                  width={"100%"}
                  display={["flex"]}
                  color={"white"}
                  fontSize={["12px"]}
                  alignItems={["left"]}
                  justifyContent={["left"]}
                  fontFamily={["poppins"]}
                  letterSpacing={[1]}
                >
                  Contact number:
                </Text>
                <Box
                  height={["40%"]}
                  width={"100%"}
                  display={["flex"]}
                  color={"white"}
                  fontSize={["12px"]}
                  flexDirection={["row"]}
                  alignItems={["center"]}
                  justifyContent={["space-between"]}
                  fontFamily={["poppins"]}
                >
                  <Input
                    placeholder={UserInfo?.Phoneno}
                    readOnly={editUsername}
                    width={["72%", "85%"]}
                    border={["1px solid white"]}
                  ></Input>
                  <Button
                    onClick={() => {
                      seteditUsername(false);
                    }}
                    width={["20%", "10%"]}
                  >
                    edit
                  </Button>
                </Box>
              </Box>

              {/* password changing part */}
            </Box>
            <Button
              height={["10%"]}
              width={"80%"}
              display={["flex"]}
              color={"white"}
              fontSize={["12px", "15px"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              fontFamily={["poppins"]}
              letterSpacing={[1]}
              bg="none"
            >
              Want to change your password?
            </Button>
            <Box
              height={["40%", "30%"]}
              width={"100%"}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["space-evenly"]}
              fontFamily={["poppins"]}
              letterSpacing={[1]}
              //bgColor={["blue"]}
              flexDirection={["column"]}
            >
              <Box
                height={["40%"]}
                width={"100%"}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["center"]}
                fontFamily={["poppins"]}
                letterSpacing={[1]}
                //bgColor={["purple"]}
                flexDirection={["column"]}
              >
                <Text
                  height={["40%"]}
                  width={"100%"}
                  display={["flex"]}
                  color={"white"}
                  fontSize={["12px"]}
                  alignItems={["left"]}
                  justifyContent={["left"]}
                  fontFamily={["poppins"]}
                  letterSpacing={[1]}
                >
                  Old password:
                </Text>

                <Input
                  placeholder={"*****"}
                  readOnly={editUsername}
                  width={"100%"}
                  border={["1px solid white"]}
                ></Input>
              </Box>

              <Box
                height={["40%"]}
                width={"100%"}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["center"]}
                fontFamily={["poppins"]}
                letterSpacing={[1]}
                //bgColor={["purple"]}
                flexDirection={["column"]}
              >
                <Text
                  height={["40%"]}
                  width={"100%"}
                  display={["flex"]}
                  color={"white"}
                  fontSize={["12px"]}
                  alignItems={["left"]}
                  justifyContent={["left"]}
                  fontFamily={["poppins"]}
                  letterSpacing={[1]}
                >
                  New password:
                </Text>

                <Input
                  placeholder={""}
                  readOnly={editUsername}
                  width={"100%"}
                  border={["1px solid white"]}
                ></Input>
              </Box>
            </Box>
            <Button
              height={["6%", "8%"]}
              width={["70%", "40%"]}
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              fontFamily={["poppins"]}
              letterSpacing={[1]}
              bgColor={["white"]}
              flexDirection={["column"]}
              borderRadius={[20]}
            >
              <Text
                height={["40%"]}
                width={"100%"}
                display={["flex"]}
                color={"black"}
                fontSize={["14px"]}
                alignItems={["center"]}
                justifyContent={["center"]}
                fontFamily={["poppins"]}
                letterSpacing={[1]}
              >
                Save Changes
              </Text>
            </Button>
          </Box>
        </Box>
        <Box width={["100%","30%"]}>
          <Navbar />
        </Box>
      </Box>
    );
}


export default UserInfoPage;