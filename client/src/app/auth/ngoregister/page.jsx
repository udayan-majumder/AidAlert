'use client'
import {
  Box,
  Image,
  Button,
  Text,
  Input,
  Link,
  InputGroup} from "@chakra-ui/react";
import { Mail, Lock, User,PhoneCall,BookUser} from 'lucide-react';
import {
  PasswordInput,
} from "@/components/ui/password-input";
import axios from "axios";
import {useState} from "react";
import toast,{ Toaster } from "react-hot-toast";
import { redirect } from "next/navigation";

export default function LoginComponent() {
const [Username,setUsername] = useState('')
const [UserEmail,setUserEmail] = useState('') 
const [UserPhoneno, setUserPhoneno] = useState("");
const [UserAddress, setUserAddress] = useState("");
const [UserPassword,setUserPassWord] = useState('')
const [UserRepassword,setUserRepassword] = useState('')

async function RegisterRequest(){
if((UserEmail && Username)&&(UserPassword === UserRepassword)){
  const UserRegisterDetails = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVERURL}/user/register`,
    {
      username:Username,
      email: UserEmail,
      password: UserPassword,
      phoneno:UserPhoneno,
      usertype:"Ngo",
      address:UserAddress
    }
  ).then((res)=>{
  
    if (res.data.message === "User registered successfully") {
      toast.success("User registered successfully");
      setTimeout(() => {
        return redirect("/auth/login");
      }, 2000);
    } else if (res.data.message === "User already exists") {
      toast.error("User already exists");
    }
    
  })
 
}

}
 

  return (
    <Box
      height={["100vh"]}
      width={["100%"]}
      display={["flex"]}
      flexDirection={["column"]}
      justifyContent={["space-around"]}
      alignItems={["center"]}
      backgroundImage="url(/signup-bg.png)"
      backgroundSize={["cover"]}
      fontFamily={["poppins"]}
    >
      <Toaster />
      <Box
        height={["15%", "10%"]}
        width={["100%"]}
        display={["flex"]}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        {" "}
        <Image src="/AiD_ALERT.png" height={["100%"]} />
      </Box>

      <Box
        height={["85%"]}
        width={["90%", "60%"]}
        display={["flex"]}
        flexDirection={["column"]}
        justifyContent={["center"]}
        alignItems={["center"]}
        background="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(0px)"
        borderRadius="12px"
        // border="1px solid rgba(255, 255, 255, 0.1)"
        boxShadow="0 8px 32px 0  rgba(255, 255, 255, 0.1)"
        gap={2}
      >
        <Box borderBottom={["1px solid white"]}>
          {" "}
          <Text color={["white"]} fontSize={["25px", "40px"]} fontWeight={600}>
            {" "}
            Let's get you signed up!{" "}
          </Text>{" "}
        </Box>
        <Box
          height={["10%"]}
          width={["90%", "70%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          <InputGroup
            width={["90%", "60%"]}
            startElement={<User color={"#000"} />}
          >
            <Input
              placeholder="Organization Name"
              // _icon={<Mail/>}
              variant="outline"
              bg="transparent"
              color="white"
              bgColor={[["#A9A9A9"]]}
              _placeholder={{ color: "whiteAlpha.700" }}
              _hover={{ borderColor: "whiteAlpha.800" }}
              _focus={{
                borderColor: "white",
                boxShadow: "0 0 0 1px white",
              }}
              borderRadius="md"
              height={["45px"]}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></Input>
          </InputGroup>
        </Box>
        <Box
          height={["10%"]}
          width={["90%", "70%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          {" "}
          <InputGroup
            startElement={<Mail color="black" />}
            width={["90%", "60%"]}
          >
            <Input
              placeholder="E-mail"
              // _icon={<Mail/>}
              variant="outline"
              bg="transparent"
              color="white"
              bgColor={[["#A9A9A9"]]}
              _placeholder={{ color: "whiteAlpha.700" }}
              _hover={{ borderColor: "whiteAlpha.800" }}
              _focus={{
                borderColor: "white",
                boxShadow: "0 0 0 1px white",
              }}
              borderRadius="md"
              height={["45px"]}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </InputGroup>{" "}
        </Box>
        <Box
          height={["10%"]}
          width={["90%", "70%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          {" "}
          <InputGroup
            startElement={<PhoneCall color="black" />}
            width={["90%", "60%"]}
          >
            <Input
              placeholder=" Organization Phone No"
              // _icon={<Mail/>}
              variant="outline"
              bg="transparent"
              color="white"
              bgColor={[["#A9A9A9"]]}
              _placeholder={{ color: "whiteAlpha.700" }}
              _hover={{ borderColor: "whiteAlpha.800" }}
              _focus={{
                borderColor: "white",
                boxShadow: "0 0 0 1px white",
              }}
              borderRadius="md"
              height={["45px"]}
              onChange={(e) => {
                setUserPhoneno(e.target.value);
              }}
            />
          </InputGroup>{" "}
        </Box>
        <Box
          height={["10%"]}
          width={["90%", "70%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          {" "}
          <InputGroup
            startElement={<BookUser color="black" />}
            width={["90%", "60%"]}
          >
            <Input
              placeholder="Organization Address"
              // _icon={<Mail/>}
              variant="outline"
              bg="transparent"
              color="white"
              bgColor={[["#A9A9A9"]]}
              _placeholder={{ color: "whiteAlpha.700" }}
              _hover={{ borderColor: "whiteAlpha.800" }}
              _focus={{
                borderColor: "white",
                boxShadow: "0 0 0 1px white",
              }}
              borderRadius="md"
              height={["45px"]}
              onChange={(e) => {
                setUserAddress(e.target.value);
              }}
            />
          </InputGroup>{" "}
        </Box>
        <Box
          height={["10%"]}
          width={["90%", "70%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          <InputGroup
            width={["90%", "60%"]}
            startElement={<Lock color="black" />}
          >
            <PasswordInput
              onChange={(e) => {
                setUserPassWord(e.target.value);
              }}
              placeholder="Password"
              bg="transparent"
              variant="outline"
              color="white"
              bgColor={["#A9A9A9"]}
              borderColor="white"
              borderRadius="md"
              height="45px"
              _placeholder={{ color: "whiteAlpha.700" }}
              _hover={{ borderColor: "whiteAlpha.800" }}
              _focus={{
                borderColor: "white",
                boxShadow: "0 0 0 1px white",
              }}
            />
          </InputGroup>
        </Box>
        <Box
          height={["10%"]}
          width={["90%", "70%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          <InputGroup
            width={["90%", "60%"]}
            startElement={<Lock color="black" />}
          >
            <PasswordInput
              onChange={(e) => {
                setUserRepassword(e.target.value);
              }}
              placeholder="Password"
              bg="transparent"
              variant="outline"
              color="white"
              bgColor={["#A9A9A9"]}
              borderColor="white"
              borderRadius="md"
              height="45px"
              _placeholder={{ color: "whiteAlpha.700" }}
              _hover={{ borderColor: "whiteAlpha.800" }}
              _focus={{
                borderColor: "white",
                boxShadow: "0 0 0 1px white",
              }}
            />
          </InputGroup>
        </Box>
        <Box>
          {" "}
          <Button
            variant="link"
            color="red.600"
            fontSize="sm"
            mt={2}
            _hover={{ textDecoration: "underline", color: "white" }}
            onClick={() => {
              // handle your forgot password logic here
            }}
          >
            {" "}
            Forgot password?{" "}
          </Button>{" "}
        </Box>

        <Box>
          {" "}
          <Button
            bg="white"
            color="black"
            borderRadius="md"
            width="250px"
            height="45px"
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.200" }}
            fontWeight="medium"
            fontSize={["20px"]}
            onClick={() => {
              RegisterRequest();
            }}
          >
            Sign-Up
          </Button>{" "}
        </Box>
        <Box borderBottom={["1px solid white"]}>
          {" "}
          <Text color={["white"]} fontSize={["15px"]} letterSpacing={2}>
            {" "}
            Or sign-up with-{" "}
          </Text>{" "}
        </Box>
        <Box>
          {" "}
          <Button
            bg="white"
            color="black"
            borderRadius="md"
            width="250px"
            height="45px"
            fontWeight="medium"
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.200" }}
            onClick={() => {
              // Your Google login logic here
            }}
          >
            <Image src="/google.png" height={["20px"]}></Image>
            Log in with Google
          </Button>{" "}
        </Box>
        <Box>
          {" "}
          <Button
            bg="white"
            color="black"
            borderRadius="md"
            width="250px"
            height="45px"
            fontWeight="medium"
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.200" }}
            onClick={() => {
              // Your Google login logic here
            }}
          >
            <Image src="/apple-logo.png" height={["25px"]}></Image>
            Log in with Apple
          </Button>{" "}
        </Box>
        <Box>
          {" "}
          <Text color={["white"]} opacity={0.8} fontSize={["15px"]}>
            {" "}
            have an account?{" "}
          </Text>
        </Box>
        <Box>
          {" "}
          <Link
            href="/auth/ngologin"
            variant="link"
            color="whiteAlpha.800"
            fontSize="sm"
            _hover={{ textDecoration: "underline", color: "white" }}
            onClick={() => {
              // Your sign-up navigation or logic here
            }}
          >
            Login Now
          </Link>{" "}
        </Box>
      </Box>
    </Box>
  );
}
