'use client'

import {
  Box,
  Image,
  Button,
  Text,
  Input,
  Link,
  InputGroup} from "@chakra-ui/react";
import { Mail, Lock, } from 'lucide-react';
import {
  PasswordInput,
} from "@/components/ui/password-input";
import axios from "axios";
import {useState} from "react";
import toast,{ Toaster } from "react-hot-toast";
import { redirect } from "next/navigation";
import UserDetails from "@/userstore/userinfoStore";
export default function LoginComponent() {

const [UserEmail,setUserEmail] = useState('') 
const [UserPassword,setUserPassWord] = useState('')
const {setUserInfo,setUserloading} = UserDetails()

async function LoginRequest(){
if(UserEmail && UserPassword){
  const UserLoginDetails = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVERURL}/user/login`,
    {
      email: UserEmail,
      password: UserPassword,
    }
  ).then((res)=>{

    if(res.data.message==='Login successful'){
      toast.success('Login Successfull')
      localStorage.setItem('token',res?.data?.token)
      setUserInfo(res?.data?.userinfo)
      setTimeout(() => {
        setUserloading(false)
        return redirect('/')
      }, 2000);
    }
    else if(res.data.message === 'Invalid credentials'){
      toast.error('Invalid credentials')
    }
    
    else if(res.data.message === 'no user found'){
      toast.error('no user found')
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
        height={["70%"]}
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
            Let's get you logged in!{" "}
          </Text>{" "}
        </Box>
        <Box
          height={["10%"]}
          width={["70%"]}
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
          width={["70%"]}
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
              LoginRequest();
            }}
          >
            Login
          </Button>{" "}
        </Box>
        <Box borderBottom={["1px solid white"]}>
          {" "}
          <Text color={["white"]} fontSize={["15px"]} letterSpacing={2}>
            {" "}
            Or login with-{" "}
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
            Don't have an account?{" "}
          </Text>
        </Box>
        <Box>
          {" "}
          <Link href="/auth/ngoregister"
            variant="link"
            color="whiteAlpha.800"
            fontSize="sm"
            _hover={{ textDecoration: "underline", color: "white" }}
            onClick={() => {
              // Your sign-up navigation or logic here
            }}
          >
            Sign Up Now
          </Link>{" "}
        </Box>
      </Box>
    </Box>
  );
}
