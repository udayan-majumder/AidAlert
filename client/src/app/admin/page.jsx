"use client";

import { Box, Button, Text, Image ,Spinner} from "@chakra-ui/react";
import {
  CircleUserRound,
  ClipboardList,
  LogOut,
  AlignJustify,
  X,
  ShieldUser,
  ShieldAlert,
  Brain,
} from "lucide-react";
import { useEffect, useState } from "react";
import UserDetails from "@/userstore/userinfoStore";
import NgoStore from "@/userstore/ngoinfoStore";
import axios from "axios";
import AdminInfoStore from "@/userstore/adminstore";
import { useRouter } from "next/navigation";

function Adminpage() {
  const [isClicked, setClicked] = useState(0);
  const [Hamburger, setHamburger] = useState(false);
  const [reload, setreload] = useState(false);
  const [pageLoading, setpageLoading] = useState(false);
  const  [Totalqty,setTotalqty] = useState(0)
  const { UserInfo } = UserDetails();
  const { NgoProductList, setNgoProductList ,NgoList,setNgoList} = NgoStore();
  const  {UserList,setUserList,SOSInfoList,setSOSInfo,AverageRiskList} = AdminInfoStore()
  const router = useRouter()

  
  const getProductDetails = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVERURL}/admin/getproducts`
    );
    const list = res?.data?.List || [];

    // calculate total before setting state
    const total = list.reduce((acc, item) => acc + (item?.quantity || 0), 0);

    setTotalqty(total);
    setNgoProductList(list);
  };
  

  const getAllUser = async() =>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVERURL}/admin/getallusers`)
    
    if(res?.data?.List?.length>0){
      setUserList(res?.data?.List)
    }
  }
 
  const GetNgoList = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVERURL}/ngo/getngolist`
    );

    if (res?.data?.List.length > 0) {
      setNgoList(res?.data?.List);
    }
  };

  const GetSOSInfo = async ()=>{
   const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVERURL}/admin/sosinfo`)

    setSOSInfo(res?.data?.SOSList)
   
  }

  useEffect(()=>{
    getProductDetails()
    getAllUser()
    GetNgoList()
    GetSOSInfo()
  },[])


  return (
    <Box
      height={["100vh"]}
      width={"100%"}
      display={["flex"]}
      alignItems={["center"]}
      justifyContent={["center"]}
      fontFamily={["poppins"]}
      letterSpacing={[1]}
    >
      {/*Navbar Box*/}
      <Box
        height={["100%"]}
        width={"20%"}
        bgColor={["#1B1B1B"]}
        display={["none", "flex"]}
        flexDirection={["column"]}
        alignItems={["center"]}
        justifyContent={["space-evenly"]}
      >
        <Box
          height={["12%"]}
          width={["85%"]}
          display={["flex"]}
          alignItems={["center"]}
          justifyContent={["left"]}
          gap={[3]}
        >
          <CircleUserRound size={40} strokeWidth={1.5} />
          <Text fontSize={["16px"]}> Admin Panel</Text>
        </Box>
        <Box
          height={["80%"]}
          width={["100%"]}
          display={["flex"]}
          flexDirection={["column"]}
          alignItems={["center"]}
          justifyContent={["flex-start"]}
          gap={[5]}
        >
          <Button
            width={["90%"]}
            justifyContent={["left"]}
            gap={[2]}
            bgColor={isClicked === 0 ? ["red.500"] : ["#1B1B1B"]}
            color={["white"]}
            transition={"background 1s ease-in-out,transform 1s ease-in-out"}
            _hover={{
              backgroundColor: "red.500",
              transform: "scale(1.06)",
            }}
            onClick={() => setClicked(0)}
          >
            <ShieldUser size={30} strokeWidth={1.0} />
            <Text fontWeight={100}>User Managment</Text>
          </Button>

          <Button
            width={["90%"]}
            justifyContent={["left"]}
            gap={[2]}
            bgColor={isClicked === 1 ? ["red.500"] : ["#1B1B1B"]}
            color={["white"]}
            transition={"background 1s ease-in-out,transform 1s ease-in-out"}
            _hover={{
              backgroundColor: "red.500",
              transform: "scale(1.06)",
            }}
            onClick={() => setClicked(1)}
          >
            <ClipboardList size={30} strokeWidth={1.0} />
            <Text fontWeight={100}>Inventory Summary</Text>
          </Button>

          <Button
            width={["90%"]}
            justifyContent={["left"]}
            gap={[2]}
            bgColor={isClicked === 2 ? ["red.500"] : ["#1B1B1B"]}
            color={["white"]}
            transition={"background 1s ease-in-out,transform 1s ease-in-out"}
            _hover={{
              backgroundColor: "red.500",
              transform: "scale(1.06)",
            }}
            onClick={() => {
              setClicked(2);
            }}
          >
            <ShieldAlert size={30} strokeWidth={1.0} />
            <Text fontWeight={100}>Incident Report</Text>
          </Button>
          <Button
            width={["90%"]}
            justifyContent={["left"]}
            gap={[2]}
            bgColor={isClicked === 3 ? ["red.500"] : ["#1B1B1B"]}
            color={["white"]}
            transition={"background 1s ease-in-out,transform 1s ease-in-out"}
            _hover={{
              backgroundColor: "red.500",
              transform: "scale(1.06)",
            }}
            onClick={() => setClicked(3)}
          >
            <Brain size={30} strokeWidth={1.0} />
            <Text fontWeight={100}>AI Prediction</Text>
          </Button>
        </Box>
        <Box
          height={["10%"]}
          width={["90%"]}
          display={["flex"]}
          alignItems={["center"]}
          justifyContent={"center"}
        >
          <Button
            width={["90%"]}
            justifyContent={["left"]}
            gap={[2]}
            bgColor={["#1B1B1B"]}
            color={["white"]}
            transition={"background 1s ease-in-out"}
            _hover={{
              backgroundColor: "gray.800",
            }}
            onClick={() => {
              localStorage.clear("token");
              router.push("/auth");
            }}
          >
            <LogOut size={30} strokeWidth={1.0} />
            <Text fontWeight={100}>Log out</Text>
          </Button>
        </Box>
      </Box>
      {/*Data Box */}
      <Box
        height={["100%"]}
        width={["100%", "80%"]}
        bgColor={["#EDEDED"]}
        display={["flex"]}
        flexDirection={["column"]}
        justifyContent={["flex-start"]}
        alignItems={["center"]}
        gap={1}
      >
        <Box
          height={["8%"]}
          width={["100%"]}
          display={["flex"]}
          justifyContent={["flex-end", "right"]}
          alignItems={["center"]}
          gap={8}
        >
          <Image
            src={"/AiD-ALERTblacklogo.png"}
            height={["70%", "90%"]}
          ></Image>
          <Button
            display={["block", "none"]}
            onClick={() => {
              setHamburger(true);
            }}
            bgColor={"#1B1B1B"}
            color={"#fff"}
          >
            <AlignJustify />
          </Button>
          {Hamburger ? (
            <Box height={["100%"]} width={["100%"]}>
              <Box
                height={["100%"]}
                width={"80%"}
                bgColor={["#1B1B1B"]}
                display={["flex", "none"]}
                flexDirection={["column"]}
                alignItems={["center"]}
                justifyContent={["space-evenly"]}
                position={["absolute"]}
                zIndex={[10]}
                left={0}
                top={0}
              >
                <Box
                  height={["12%"]}
                  width={["85%"]}
                  display={["flex"]}
                  alignItems={["center"]}
                  justifyContent={["left"]}
                  gap={[3]}
                >
                  <CircleUserRound size={40} strokeWidth={1.5} />
                  <Text fontSize={["16px"]}> About Us</Text>
                  <Box
                    width={["40%"]}
                    display={["flex"]}
                    justifyContent={["right"]}
                  >
                    <Button
                      onClick={() => {
                        setHamburger(false);
                      }}
                    >
                      <X />
                    </Button>
                  </Box>
                </Box>
                <Box
                  height={["80%"]}
                  width={["100%"]}
                  display={["flex"]}
                  flexDirection={["column"]}
                  alignItems={["center"]}
                  justifyContent={["flex-start"]}
                  gap={[5]}
                >
                  <Text
                    fontSize={["18px"]}
                    width={["90%"]}
                    marginLeft={["10%"]}
                  >
                    Organization Dashboard
                  </Text>
                  <Button
                    width={["90%"]}
                    justifyContent={["left"]}
                    gap={[2]}
                    bgColor={isClicked === 0 ? ["red.500"] : ["#1B1B1B"]}
                    color={["white"]}
                    transition={
                      "background 1s ease-in-out,transform 1s ease-in-out"
                    }
                    _hover={{
                      backgroundColor: "red.500",
                      transform: "scale(1.06)",
                    }}
                    onClick={() => setClicked(0)}
                  >
                    <ShieldUser size={30} strokeWidth={1.0} />
                    <Text fontWeight={100}>User Management</Text>
                  </Button>

                  <Button
                    width={["90%"]}
                    justifyContent={["left"]}
                    gap={[2]}
                    bgColor={isClicked === 1 ? ["red.500"] : ["#1B1B1B"]}
                    color={["white"]}
                    transition={
                      "background 1s ease-in-out,transform 1s ease-in-out"
                    }
                    _hover={{
                      backgroundColor: "red.500",
                      transform: "scale(1.06)",
                    }}
                    onClick={() => setClicked(1)}
                  >
                    <ClipboardList size={30} strokeWidth={1.0} />
                    <Text fontWeight={100}>Inventory Summary</Text>
                  </Button>

                  <Button
                    width={["90%"]}
                    justifyContent={["left"]}
                    gap={[2]}
                    bgColor={isClicked === 2 ? ["red.500"] : ["#1B1B1B"]}
                    color={["white"]}
                    transition={
                      "background 1s ease-in-out,transform 1s ease-in-out"
                    }
                    _hover={{
                      backgroundColor: "red.500",
                      transform: "scale(1.06)",
                    }}
                    onClick={() => setClicked(2)}
                  >
                    <ShieldAlert size={30} strokeWidth={1.0} />
                    <Text fontWeight={100}>Incident Report</Text>
                  </Button>
                  <Button
                    width={["90%"]}
                    justifyContent={["left"]}
                    gap={[2]}
                    bgColor={isClicked === 3 ? ["red.500"] : ["#1B1B1B"]}
                    color={["white"]}
                    transition={
                      "background 1s ease-in-out,transform 1s ease-in-out"
                    }
                    _hover={{
                      backgroundColor: "red.500",
                      transform: "scale(1.06)",
                    }}
                    onClick={() => setClicked(3)}
                  >
                    <ShieldAlert size={30} strokeWidth={1.0} />
                    <Text fontWeight={100}>AI Prediction</Text>
                  </Button>
                </Box>
                <Box
                  height={["10%"]}
                  width={["90%"]}
                  display={["flex"]}
                  alignItems={["center"]}
                  justifyContent={"center"}
                >
                  <Button
                    width={["90%"]}
                    justifyContent={["left"]}
                    gap={[2]}
                    bgColor={["#1B1B1B"]}
                    color={["white"]}
                    transition={"background 1s ease-in-out"}
                    _hover={{
                      backgroundColor: "gray.800",
                    }}
                    onClick={() => {
                      localStorage.clear("token");
                      router.push("/auth");
                    }}
                  >
                    <LogOut size={30} strokeWidth={1.0} />
                    <Text fontWeight={100}>Log out</Text>
                  </Button>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box></Box>
          )}
        </Box>
        <Box
          height={["85%"]}
          width={["100%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          gap={[4]}
        >
          {isClicked === 0 ? (
            <Box
              height={["95%"]}
              width={["100%"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["flex"]}
              alignItems={["center"]}
              gap={[4]}
            >
              <Box
                height={["15%"]}
                width={["95%"]}
                bgColor={"#fff"}
                borderRadius={[10]}
                boxShadow={"0px 0px 0px 0px rgba(0,0,0,0.2)"}
                color={"#000"}
                display={["flex"]}
                justifyContent={["left"]}
                alignItems={["center"]}
              >
                <Text
                  width={["40%", "15%"]}
                  display={["flex"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                  fontSize={["16px", "24px"]}
                  fontWeight={500}
                >
                  Total Users : {UserList.length}
                </Text>
              </Box>
              <Box
                height={["10%"]}
                width={["95%"]}
                bgColor={"#000"}
                color={"#fff"}
                borderRadius={10}
                display={["flex"]}
                justifyContent={["space-around"]}
                alignItems={"center"}
                fontSize={["10px", "16px"]}
              >
                <Box>ID</Box>
                <Box>Name</Box>
                <Box>Email</Box>
                <Box>Phone No</Box>
                <Box>Location</Box>
                <Box>User Type</Box>
              </Box>
              <Box
                height={["70%"]}
                width={["95%"]}
                bgColor={"#fff"}
                borderRadius={10}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["flex-start"]}
                alignItems={["center"]}
                gap={[2]}
                overflow={"scroll"}
                overflowX={"hidden"}
              >
                {UserList.length > 0 ? (
                  UserList.map((items) => (
                    <Box
                      height={["12%"]}
                      width={["98%"]}
                      borderBottom={["1px solid rgb(185, 185, 185)"]}
                      color={"#000"}
                      display={["flex"]}
                      justifyContent={["space-between"]}
                      alignItems={"center"}
                      key={items?.id}
                      fontSize={["8px", "14px"]}
                      flex={"0 0 auto"}
                    >
                      <Box
                        width={["10%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                      >
                        {items?.id}
                      </Box>
                      <Box
                        width={["16%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        height={"auto"}
                      >
                        {items?.username}
                      </Box>
                      <Box
                        width={["16%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        height={"100%"}
                        wordBreak={"break-word"}
                      >
                        {items?.email}
                      </Box>
                      <Box
                        width={["16%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        wordBreak={"break-word"}
                      >
                        {items?.phoneno}
                      </Box>
                      <Box
                        width={["16%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        wordBreak={"break-word"}
                      >
                        {items?.address}
                      </Box>
                      <Box
                        width={["16%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        wordBreak={"break-word"}
                      >
                        {items?.usertype}
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Box></Box>
                )}
              </Box>
            </Box>
          ) : isClicked === 1 ? (
            <Box
              height={["95%"]}
              width={["100%"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["flex"]}
              alignItems={["center"]}
              gap={[4]}
            >
              <Box
                height={["15%"]}
                width={["95%"]}
                color={"#000"}
                display={["flex"]}
                justifyContent={["right"]}
                alignItems={["center"]}
                gap={[6]}
              >
                <Text
                  width={["45%", "18%"]}
                  height={["60%"]}
                  display={["flex"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                  fontSize={["12px", "18px"]}
                  fontWeight={500}
                  bgColor={"red.600"}
                  color={"#fff"}
                  borderRadius={10}
                >
                  Stock available: {Totalqty}
                </Text>
                <Text
                  width={["45%", "18%"]}
                  height={["60%"]}
                  bgColor={"#000"}
                  display={["flex"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                  fontSize={["12px", "18px"]}
                  fontWeight={500}
                  borderRadius={10}
                  color={"#fff"}
                >
                  Total Contributers: {NgoList.length}
                </Text>
              </Box>
              <Box
                height={["10%"]}
                width={["95%"]}
                bgColor={"#000"}
                padding={["0px 10px", "0px 50px"]}
                color={"#fff"}
                borderRadius={10}
                display={["flex"]}
                justifyContent={["space-between"]}
                alignItems={"center"}
                fontSize={["10px", "16px"]}
              >
                <Box>Product ID</Box>
                <Box>Product Name</Box>
                <Box>Total Quantity</Box>
                <Box>Shelf Life(m)</Box>
              </Box>
              <Box
                height={["70%"]}
                width={["95%"]}
                bgColor={"#fff"}
                borderRadius={10}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["flex-start"]}
                alignItems={["center"]}
                gap={[2]}
                overflow={"scroll"}
                overflowX={"hidden"}
              >
                {NgoProductList.length > 0 ? (
                  NgoProductList.map((items) => (
                    <Box
                      height={["12%"]}
                      width={["100%"]}
                      borderBottom={["1px solid rgb(185, 185, 185)"]}
                      color={"#000"}
                      display={["flex"]}
                      justifyContent={["space-between"]}
                      alignItems={"center"}
                      fontSize={["8px", "14px"]}
                      flex={"0 0 auto"}
                    >
                      <Box
                        width={["10%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                      >
                        {items?.productid}
                      </Box>
                      <Box
                        width={["24%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        height={"auto"}
                      >
                        {items?.productname}
                      </Box>
                      <Box
                        width={["5%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        height={"100%"}
                        wordBreak={"break-word"}
                      >
                        {items?.quantity}
                      </Box>
                      <Box
                        width={["20%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        wordBreak={"break-word"}
                      >
                        {items?.shelflife}
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Box></Box>
                )}
              </Box>
            </Box>
          ) : isClicked === 2 ? (
            <Box
              height={["95%"]}
              width={["100%"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["flex"]}
              alignItems={["center"]}
              gap={[4]}
            >
              <Box
                height={["15%"]}
                width={["95%"]}
                color={"#000"}
                display={["flex"]}
                justifyContent={["right"]}
                alignItems={["center"]}
                gap={[6]}
              >
                <Text
                  width={["45%", "18%"]}
                  height={["60%"]}
                  bgColor={"#000"}
                  display={["flex"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                  fontSize={["12px", "18px"]}
                  fontWeight={500}
                  borderRadius={10}
                  color={"#fff"}
                >
                  Total SOS: {SOSInfoList.length}
                </Text>
              </Box>
              <Box
                height={["10%"]}
                width={["95%"]}
                bgColor={"#000"}
                padding={["0px 10px", "0px 50px"]}
                color={"#fff"}
                borderRadius={10}
                display={["flex"]}
                justifyContent={["space-between"]}
                alignItems={"center"}
                fontSize={["8px", "16px"]}
              >
                <Box>UserID</Box>
                <Box>UserName</Box>
                <Box>PhoneNo</Box>
                <Box>Location</Box>
                <Box>Coordinates</Box>
                <Box>DisasterType</Box>
                <Box>Severity</Box>
              </Box>
              <Box
                height={["70%"]}
                width={["95%"]}
                bgColor={"#fff"}
                borderRadius={10}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["flex-start"]}
                alignItems={["center"]}
                gap={[2]}
                overflow={"scroll"}
                overflowX={"hidden"}
              >
                {SOSInfoList?.length > 0 ? (
                  SOSInfoList?.map((items) => (
                    <Box
                      height={["14%"]}
                      width={["100%"]}
                      borderBottom={["1px solid rgb(185, 185, 185)"]}
                      color={"#000"}
                      display={["flex"]}
                      justifyContent={["space-between"]}
                      alignItems={"center"}
                      fontSize={["8px", "14px"]}
                      flex={"0 0 auto"}
                    >
                      <Box
                        width={["12%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                      >
                        {items?.userid}
                      </Box>
                      <Box
                        width={["14%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        height={"auto"}
                      >
                        {items?.username}
                      </Box>
                      <Box
                        width={["14%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        height={"100%"}
                        wordBreak={"break-word"}
                      >
                        {items?.phoneno}
                      </Box>
                      <Box
                        width={["14%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        wordBreak={"break-word"}
                      >
                        {items?.location}
                      </Box>
                      <Box
                        width={["14%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        wordBreak={"break-word"}
                      >
                        {items?.coordinates}
                      </Box>
                      <Box
                        width={["14%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        wordBreak={"break-word"}
                      >
                        {items?.disastertype}
                      </Box>
                      <Box
                        width={["14%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        wordBreak={"break-word"}
                      >
                        {items?.severity}
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Box></Box>
                )}
              </Box>
            </Box>
          ) : isClicked === 3 ? (
            <Box
              color="#000"
              height="100%"
              width="100%"
              p={6}
              display="flex"
              flexDirection="column"
              overflowX="hidden"
              overflowY="auto"
              fontFamily="Poppins, sans-serif"
              bgGradient="linear(to-br, #f0f4ff, #e8fcff)"
            >
              {AverageRiskList?.average_risk_by_location ? (
                <>
                  {/* Location Risk Cards Grid */}
                  <Box
                    display="grid"
                    gridTemplateColumns={[
                      "1fr",
                      "repeat(2, 1fr)",
                      "repeat(3, 1fr)",
                    ]}
                    gap={6}
                  >
                    {Object.entries(
                      AverageRiskList.average_risk_by_location
                    ).map(([location, risks]) => (
                      <Box
                        key={location}
                        p={4}
                        borderRadius="xl"
                        backdropFilter="blur(10px)"
                        bg="rgba(255, 255, 255, 0.25)"
                        border="1px solid rgba(255, 255, 255, 0.2)"
                        boxShadow="lg"
                        transition="all 0.3s ease"
                        _hover={{
                          transform: "translateY(-4px)",
                          boxShadow: "2xl",
                        }}
                      >
                        <Text
                          fontWeight="semibold"
                          fontSize="md"
                          mb={2}
                          color="#1a202c"
                        >
                          📍{" "}
                          {location.charAt(0).toUpperCase() + location.slice(1)}
                        </Text>
                        {Object.entries(risks).map(([type, value]) => (
                          <Text
                            key={type}
                            fontSize="sm"
                            color="#2d3748"
                            mb={1}
                            noOfLines={1}
                          >
                            <strong>{type}:</strong> {value}
                          </Text>
                        ))}
                      </Box>
                    ))}
                  </Box>

                  {/* Most At-Risk Card */}
                  <Box
                    mt={8}
                    p={4}
                    borderRadius="xl"
                    backdropFilter="blur(10px)"
                    bg="rgba(255, 230, 230, 0.35)"
                    border="1px solid rgba(255, 0, 0, 0.15)"
                    boxShadow="lg"
                  >
                    <Text
                      fontWeight="bold"
                      fontSize="lg"
                      mb={2}
                      color="#a40000"
                    >
                      🚨 Most At-Risk Overall
                    </Text>
                    <Text fontSize="sm" mb={1}>
                      <strong>Location:</strong>{" "}
                      {AverageRiskList.most_at_risk_overall.location}
                    </Text>
                    <Text fontSize="sm" mb={1}>
                      <strong>Disaster Type:</strong>{" "}
                      {AverageRiskList.most_at_risk_overall.disaster_type}
                    </Text>
                    <Text fontSize="sm">
                      <strong>Average Risk:</strong>{" "}
                      {AverageRiskList.most_at_risk_overall.average_risk}
                    </Text>
                  </Box>

                  {/* Summary Message */}
                  <Box
                    mt={6}
                    p={4}
                    borderRadius="xl"
                    backdropFilter="blur(10px)"
                    bg="rgba(224, 247, 250, 0.35)"
                    border="1px solid rgba(0, 100, 100, 0.15)"
                    boxShadow="md"
                  >
                    <Text
                      fontWeight="bold"
                      fontSize="lg"
                      mb={2}
                      color="#005f73"
                    >
                      🧠 Summary
                    </Text>
                    <Text fontSize="sm" color="#2d3748">
                      {AverageRiskList.summary_message}
                    </Text>
                  </Box>
                </>
              ) : (
                <Box
                  height="100%"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap={4}
                >
                  <Spinner
                    size="xl"
                    color="red.400"
                    speed="0.65s"
                    thickness="4px"
                  />
                  <Text fontFamily="poppins" fontSize="xl" color="gray.600">
                    Loading...
                  </Text>
                </Box>
              )}
            </Box>
          ) : (
            <Box></Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Adminpage;
