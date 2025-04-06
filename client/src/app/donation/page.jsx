'use client'
import {Box,Image,Button,Text,Input} from '@chakra-ui/react'
import { Navbar } from '@/components/ui/navbarComponent/navbarPage'
import React, { useState } from "react";
import Razorpay from 'razorpay';
import axios from 'axios';
function DonationComponent(){

  const [isOn, setIsOn] = useState(false);
  const [paymentAmount,setpaymentAmount] = useState(0)

   const Checkout= async()=>{
     const ress = await axios.post(
       `${process.env.NEXT_PUBLIC_SERVERURL}/payment/create-order`,
       {
         Amount: paymentAmount*100,
         Currency: "INR",
         Receipt: "Order_Reciept_11",
       },{
        withCredentials:true
       }
     ).then((res)=>{
        const options = {
          key: `${process.env.NEXT_PUBLIC_RAZORPAY_KEYID}`, // Replace with your Razorpay key_id
          amount: res.data.response.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Ecommerce",
          description: "Test Transaction",
          order_id: res.data.response.id, // This is the order_id created in the backend
          //  callback_url: `${process.env.NEXT_PUBLIC_SERVERURL}/payment/payment-success`,
        };
        const rzp = new window.Razorpay(options);

        try {
          rzp.open();
          // Add a fallback if popup is blocked
          window.addEventListener("blur", () => {
            setTimeout(() => {
              if (document.hidden) {
                alert(
                  "Payment window blocked. Please allow popups for this site."
                );
              }
            }, 500);
          });
        } catch (e) {
          alert(
            "Could not open payment window. Please disable popup blockers."
          );
        }
     })
   
    
     
   }
// Usage




return (
  <Box
    height={["100vh"]}
    width={["100%"]}
    display={["flex"]}
    flexDir={["column"]}
    justifyContent={["center"]}
    alignItems={["center"]}
    gap={2}
    backgroundImage="url(./donation-bg.png)"
    backgroundSize={["cover"]}
    bgColor={["#2A2A2C"]}
  >
    <Box
      height={["10%"]}
      width={["100%"]}
      display={["flex"]}
      justifyContent={["center", "right"]}
      alignItems={["center", "right"]}
    >
      <Image src="/AiD_ALERT.png" height={["70%", "95%"]} />
    </Box>
    <Box height={["10%", "15%"]} width={["100%"]} gap={3}>
      <Box
        display={["flex"]}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        {" "}
        <Text
          fontSize={["25px", "40px"]}
          fontFamily={["poppins"]}
          color={["white"]}
          fontWeight={650}
          letterSpacing={2}
        >
          {" "}
          DISASTER RELIEF FUND{" "}
        </Text>
      </Box>
      <Box
        display={["flex"]}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        {" "}
        <Text
          fontSize={["14px", "20px"]}
          fontFamily={["poppins"]}
          color={["white"]}
          opacity={0.8}
          textAlign={["center"]}
        >
          {" "}
          Your support helps survivors of natural disasters rebuild their lives{" "}
        </Text>{" "}
      </Box>
    </Box>
    <Box
      borderBottom={["2px solid white"]}
      width={["80%", "60%"]}
      opacity={0.8}
    ></Box>
    <Box
      height={["75%"]}
      width={["100%"]}
      display={["flex"]}
      flexDirection={["column"]}
      justifyContent={["center", "space-between"]}
      alignItems={["center"]}
    >
      <Box
        height={["30%", "50%"]}
        width={["100%"]}
        display={["flex"]}
        justifyContent={["center"]}
        alignItems={["center"]}
        fontWeight={600}
      >
        <Box
          height={["95%"]}
          width={["95%"]}
          display={["flex"]}
          flexDirection={["column"]}
          justifyContent={["space-between", "center"]}
          alignItems={["center"]}
          textAlign={["center"]}
          gap={[5, 10]}
        >
          <Box
            height={["50%", "10%"]}
            width={["100%", "90%"]}
            display={["flex"]}
            justifyContent={["center"]}
            alignItems={["center"]}
          >
            {" "}
            <Text
              color={["white"]}
              opacity={0.8}
              fontSize={["17px", "25px"]}
              fontFamily={["poppins"]}
            >
              {" "}
              Natural disasters strike without warning-
            </Text>
          </Box>
          <Box
            height={["50%", "10%"]}
            width={["100%", "90%"]}
            display={["flex"]}
            justifyContent={["center"]}
            alignItems={["center"]}
          >
            {" "}
            <Text
              color={["white"]}
              opacity={0.8}
              fontSize={["30px", "40px"]}
              fontFamily={["poppins"]}
            >
              {" "}
              Your donation provides hope and relief.
            </Text>
          </Box>
          <Box
            height={["50%", "20%"]}
            width={["100%", "90%"]}
            display={["flex"]}
            justifyContent={["center"]}
            alignItems={["center"]}
          >
            {" "}
            <Text
              color={["white"]}
              opacity={0.8}
              fontSize={["15px", "27px"]}
              fontFamily={["poppins"]}
              textAlign={["center"]}
              fontWeight={200}
            >
              {" "}
              Every amount helps a family with essentials like food,water and
              shelter.{" "}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        height={["40%", "70%"]}
        width={["100%"]}
        gap={3}
        display={["flex"]}
        justifyContent={["center"]}
        flexDirection={["column"]}
        alignItems={["center"]}
        fontFamily={["poppins"]}
      >
        <Box
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          height={["20%"]}
          width={["100%", "60%"]}
        >
          {" "}
          <Input
            placeholder=" Choose amount (eg- ₹200)"
            size="md"
            borderRadius="md"
            border="2px solid"
            borderColor="gray.400"
            height={["50px"]}
            width={["80%", "45%"]}
            color={["white"]}
            fontFamily={["poppins"]}
            letterSpacing={2}
            onChange={(e)=>{setpaymentAmount(e.target.value)}}
          />
        </Box>
        <Box
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          gap={4}
        >
          <Text color={["white"]}> Make this a monthly gift? </Text>
          <Button
            bgColor={isOn ? "red" : "transparent"}
            border={isOn ? "none" : "1px solid rgb(97, 97, 97)"}
            color={["#fff"]}
            onClick={() => {
              setIsOn(!isOn);
            }}
            borderRadius="md"
            px={6}
            py={3}
            fontSize="lg"
          >
            {isOn ? "Subscribe" : "Unsubscribe"}
          </Button>
        </Box>

        <Box>
          {" "}
          <Text color={["white"]} opacity={0.8} fontSize={["15px"]}>
            {" "}
            Pay with-{" "}
          </Text>
        </Box>
        <Box>
          <Button bgColor={["#fff"]} _hover={{bgColor:"whiteAlpha.800"}} onClick={()=>{Checkout()}}>
            <Image src="razorpay.svg" height={["30px"]}></Image>

          </Button>{" "}
        </Box>
      </Box>
    </Box>
    <Box bottom={0} width={["100%", "30%"]}>
      <Navbar />
    </Box>
  </Box>
);

}

export default DonationComponent



