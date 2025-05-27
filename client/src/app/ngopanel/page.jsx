'use client'

import {
  Box,
  Button,
  Text,
  Image,
  Menu,
  Portal
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  User,
  CircleUserRound,
  Trophy,
  ClipboardList,
  HandHeart,
  LogOut,
  X,
  AlignJustify,
  Save,
  CirclePlus,
  Trash2
} from "lucide-react";
import axios from "axios";
import NgoStore from "@/userstore/ngoinfoStore";

//Box Button Image
function NgoAdminPage(){
const [isClicked,setClicked] = useState(0)
const [reload,setreload] = useState(false)
const [pageloading,setpageLoading] = useState(true)
const  [Hamburger,setHamburger] = useState(false)
const [SelectedProduct,setSelectedProduct] = useState([])
const  {NgoProductList,setNgoProductList} = NgoStore()

const getProductDetails = async()=>{
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVERURL}/admin/getproducts`)
  setNgoProductList(res.data.List)
}


useEffect(()=>{
  getProductDetails()
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
            <Text fontSize={["16px"]}> About Us</Text>
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
            <Text fontSize={["18px"]} width={["90%"]} marginLeft={["10%"]}>
              Organization Dashboard
            </Text>
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
              <Trophy size={30} strokeWidth={1.0} />
              <Text fontWeight={100}>View Contributions</Text>
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
              <Text fontWeight={100}>Add Resource</Text>
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
              onClick={() => setClicked(2)}
            >
              <HandHeart size={30} strokeWidth={1.0} />
              <Text fontWeight={100}>Donate</Text>
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
              onClick={() => setClicked(1)}
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
          gap={5}
        >
          <Box
            height={["10%"]}
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
                      <Trophy size={30} strokeWidth={1.0} />
                      <Text fontWeight={100}>View Contributions</Text>
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
                      <Text fontWeight={100}>Add Resource</Text>
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
                      <HandHeart size={30} strokeWidth={1.0} />
                      <Text fontWeight={100}>Donate</Text>
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
                      onClick={() => setClicked(1)}
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

          {!pageloading ? (
            <Box>loading</Box>
          ) : isClicked === 0 ? (
            <Box>contribution</Box>
          ) : isClicked === 1 ? (
            <Box
              height={["85%"]}
              width={["95%"]}
              // bgColor={"teal"}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["flex-start"]}
              alignItems={["center"]}
              gap={5}
            >
              <Box
                height={["15%"]}
                width={["100%"]}
                bgColor={"#fff"}
                borderRadius={10}
                display={["flex"]}
                justifyContent={["space-between"]}
                alignItems={["center"]}
              >
                <Text
                  width={["40%", "20%"]}
                  color={"#000"}
                  textAlign={"center"}
                  fontWeight={500}
                  fontSize={["16px", "26px"]}
                >
                  My Resources
                </Text>

                <Box
                  width={["25%", "15%"]}
                  display={["flex"]}
                  flexDirection={["column", "row"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                  height={["80%"]}
                  gap={[1, 3]}
                  padding={["0px 5px"]}
                  // bgColor={"red"}
                >
                  <Button
                    height={["40%", "45%"]}
                    width={["100%", "45%"]}
                    bgColor={"red.500"}
                    color={["#fff"]}
                  >
                    <Save /> Save
                  </Button>
                  <Menu.Root>
                    <Menu.Trigger asChild>
                      <Button
                        height={["40%", "45%"]}
                        width={["100%", "45%"]}
                        bgColor={"red.500"}
                        color={["#fff"]}
                      >
                        <CirclePlus /> Add
                      </Button>
                    </Menu.Trigger>
                    <Portal>
                      <Menu.Positioner>
                        <Menu.Content>
                          {NgoProductList?.map((data, index) => (
                            <Menu.Item
                              key={data?.productid}
                              value={data?.productid}
                              onClick={() => {
                                setSelectedProduct((prev) => [
                                  ...prev,
                                  {
                                    ...data,
                                    qty: 1,
                                  },
                                ]);
                              }}
                            >
                              {data?.productname}
                            </Menu.Item>
                          ))}
                        </Menu.Content>
                      </Menu.Positioner>
                    </Portal>
                  </Menu.Root>
                </Box>
              </Box>
              <Box
                height={["80%"]}
                width={["100%"]}
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["flex-start"]}
                alignContent={["center"]}
                gap={6}
              >
                <Box
                  height={["10%"]}
                  width={["100%"]}
                  bgColor={"#1B1B1B"}
                  borderRadius={10}
                  display={["flex"]}
                  justifyContent={["space-around"]}
                  alignItems={["center"]}
                >
                  <Box>Product ID</Box>
                  <Box>Product</Box>
                  <Box>Quantity</Box>
                  <Box></Box>
                </Box>
                <Box
                  height={["85%"]}
                  width={["100%"]}
                  bgColor={"#fff"}
                  borderRadius={10}
                >
                  {SelectedProduct?.map((data) => (
                    <Box
                      key={data?.productid}
                      height={["10%"]}
                      width={["100%"]}
                      bgColor={"teal"}
                      flex={"0 0 auto"}
                      display={["flex"]}
                      justifyContent={["right"]}
                      alignItems={["center"]}
                    >
                      <Box
                        width={["98%"]}
                        display={["flex"]}
                        justifyContent={["space-around"]}
                        alignItems={["center"]}
                      >
                        <Box
                          width={["20%"]}
                          display={["flex"]}
                          justifyContent={["center"]}
                          alignItems={["center"]}
                        >
                          {data?.productid}
                        </Box>
                        <Box
                          width={["20%"]}
                          display={["flex"]}
                          justifyContent={["center"]}
                          alignItems={["center"]}
                        >
                          {data?.productname}
                        </Box>
                        <Box
                          width={["30%"]}
                          display={["flex"]}
                          justifyContent={["center"]}
                          alignItems={["center"]}
                        >
                          {data?.qty}
                        </Box>
                        <Button></Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ) : isClicked === 2 ? (
            <Box height={["85%"]} width={["95%"]} display={["flex"]} justifyContent={["space-between"]} alignItems={["center"]} gap={[8]} flexDirection={["column"]}>
              <Box display={["flex"]} height={["15%"]} width={["100%"]} bgColor={"white"} justifyContent={["space-between"]} alignItems={["center"]} padding={["0px 10px"]} borderRadius={10}>
                <Text width={["20%"]}display={["flex"]} justifyContent={["center"]} alignItems={["center"]}fontWeight={500} fontSize={["26px"]} color={["black"]}>My Donations</Text>
                <Button display={["flex"]} width={["10%"]}
                      justifyContent={["center"]} alignItems={["center"]}
                      gap={[2]}
                      bgColor={["red"]}
                      color={["white"]}>
                  <Trash2/>
                  <Text color={["white"]}>Delete All</Text>
                </Button>
              </Box>
            <Box display={["flex"]} height={["70%"]} width={["100%"]} bgColor={"white"} justifyContent={["space-between"]} alignItems={["center"]} padding={["0px 10px"]} borderRadius={10}>
              <Box display={["flex"]} height={["10%"]} width={["100%"]} bgColor={"teal"} justifyContent={["space-between"]} alignItems={["center"]} padding={["0px 10px"]} borderRadius={10}>
                <Text>Item Summary</Text>
              </Box>
            </Box>
            <Box display={["flex"]} height={["10%"]} width={["100%"]} bgColor={"white"} justifyContent={["space-between"]} alignItems={["center"]} padding={["0px 10px"]} borderRadius={10}></Box>




            </Box>
          ) : (
            <Box></Box>
          )}
        </Box>
      </Box>
    );
}


export default NgoAdminPage
