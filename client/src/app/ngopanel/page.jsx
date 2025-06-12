"use client";

import {
  Box,
  Button,
  Text,
  Image,
  Menu,
  Portal,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  CircleUserRound,
  Trophy,
  ClipboardList,
  HandHeart,
  LogOut,
  X,
  AlignJustify,
  Save,
  CirclePlus,
  Trash2,
} from "lucide-react";
import axios from "axios";
import NgoStore from "@/userstore/ngoinfoStore";
import UserDetails from "@/userstore/userinfoStore";
import toast,{Toaster} from "react-hot-toast";
import { useRouter } from "next/navigation";

//Box Button Image
function NgoAdminPage() {
  const [isClicked, setClicked] = useState(0);
  const [reload, setreload] = useState(false);
  const [pageloading, setpageLoading] = useState(true);
  const [Hamburger, setHamburger] = useState(false);
  const [SelectedProduct, setSelectedProduct] = useState([]);
  const  [DisasterType,setDisasterType] = useState('')
  const { NgoProductList, setNgoProductList, NgoCartList, setNgoCartList,NgoList,setNgoList} = NgoStore();
  const  {UserInfo,Userloading,setUserInfo,setUserloading} = UserDetails()
  const  router = useRouter()

  const getProductDetails = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVERURL}/admin/getproducts`
    );
    setNgoProductList(res.data.List);
  };

  const AddorRemoveQty = (givenproductid, type) => {
    if (type === "Add") {
      const updated = SelectedProduct.map((res) =>
        res.productid === givenproductid ? { ...res, qty: res.qty + 1 } : res
      );
      setSelectedProduct(updated);
    }
    if (type === "Remove") {
      const updated = SelectedProduct.map((res) =>
        res.qty > 1 && res.productid === givenproductid
          ? { ...res, qty: res.qty - 1 }
          : res
      );

      setSelectedProduct(updated);
    }
  };

  const RemoveItem = (givenproductid) => {
    const newarr = SelectedProduct.filter(
      (res) => res.productid !== givenproductid
    );
    setSelectedProduct(newarr);
  };

  const waitForUserId = async () => {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (UserInfo.userId) {
          clearInterval(interval);
          resolve(UserInfo.userId);
        }
        else{
          toast.error('relaod once network error',{
            position:"top-center"
          })
        }
      }, 2000); // check every 100ms
    });
  };

  const AddAllProducts = async () => {
    try {
      const id = await waitForUserId();

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVERURL}/ngo/addtocart`,
        {
          Userid: id,
          Products: SelectedProduct,
        }
      );

   

      if (res?.data?.message === "All items added successfully") {
        toast.success("All items added successfully", {
          position: "bottom-right",
        });
        setNgoCartList([])
        setreload(true);
      }
    } catch (error) {
      console.error("Error adding products:", error);
      toast.error("Failed to add products", { position: "bottom-right" });
    } finally {
      setSelectedProduct([]);
    }
  };
  
  
  const CartProductDetails = async()=>{
  
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVERURL}/ngo/getproducts`,
      {
        Userid: UserInfo?.userId,
      }
    );

  setNgoCartList(res?.data?.List)
  if(reload){
    setreload(false)
  }
  }
  
  const DonateProducts = async() =>{
  
  if(NgoCartList.length>0 && DisasterType.length>0) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVERURL}/ngo/donateproducts`,
      {
        "NgoCartList": NgoCartList,
        "UserInfo": UserInfo,
        "DisasterType":DisasterType,
      }
    );

    if (res.data.message === "all products added to cart") {
      toast.success("Donation Successfully");
      setNgoCartList([])
      setreload(true);
    }
  }
  else{
    toast.error("No items or Disaster type")
  }
  }

  const DeleteAllProducts = async()=>{
    if(NgoCartList.length>0){
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVERURL}/ngo/deleteallproducts`,
        {
          NgoCartList: NgoCartList,
        }
      );

      if (res.data.message === "all items removed") {
        toast.success("All products are removed");
        setreload(true);
      }
    }else{
      toast.error("no items to delete")
    }
  }

  const GetNgoList = async()=>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVERURL}/ngo/getngolist`)
    if(res?.data?.List.length > 0){
   setNgoList(res?.data?.List)

    }
    if (reload) {
      setreload(false);
    }
  }
  
  async function GetUserDetails() {
    try {
      const token = localStorage.getItem("token");
      const CheckLoginStatus = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVERURL}/user/userdetails`,
        {
          token: token,
        }
      );

     if (CheckLoginStatus.data.message === "Authorized") {
        setUserInfo(CheckLoginStatus?.data?.Userinfo);
      }
    } catch (err) {
      console.log(err);
    } finally {
      if (Userloading) setUserloading(false);
    }
  }
  useEffect(() => {
    getProductDetails();
    GetNgoList()
    GetUserDetails()
  }, []);
  
  useEffect(() => {
    if(!Userloading && UserInfo){
      setTimeout(() => {
        CartProductDetails();
        GetNgoList();
      },2000);
    }
  }, [Userloading,UserInfo.userId,reload]);

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
    <Toaster />
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
          onClick={() => {
            setreload(true);
            setClicked(2);
          }}
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
        width={["92%"]}
        display={["flex"]}
        justifyContent={["left", "right"]}
        alignItems={["center"]}
        gap={16}
      >
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
        <Image src={"/AiD-ALERTblacklogo.png"} height={["70%", "90%"]} />

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
              animation={"SlideIn 0.5s ease-in-out"}
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
                    color={"#fff"}
                    bgColor={"#121212"}
                    borderRadius={10}
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
                <Text fontSize={["18px"]} width={["90%"]} marginLeft={["10%"]}>
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
                  onClick={() => {
                    setHamburger(false);
                    setClicked(0);
                  }}
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
                  onClick={() => {
                    setHamburger(false);
                    setClicked(1);
                  }}
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
                  onClick={() => {
                    setHamburger(false);
                    setClicked(2);
                  }}
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

      {!pageloading ? (
        <Box>loading</Box>
      ) : isClicked === 0 ? (
        <Box
          height={["90%"]}
          width={["95%"]}
          // bgColor={"teal"}
          display={["flex"]}
          flexDirection={["column"]}
          justifyContent={["flex-start"]}
          alignItems={["center"]}
          gap={5}
        >
          <Box
            height={["20%"]}
            width={["100%"]}
            // bgColor={"#fff"}
            borderRadius={10}
            display={["flex"]}
            flexDirection={["column"]}
            justifyContent={["space-around"]}
            alignItems={["center"]}
          >
            <Text
              width={["90%"]}
              color={"#000"}
              // textAlign={"center"}
              fontWeight={500}
              fontSize={["16px", "24px"]}
              display={["flex"]}
              gap={[4]}
            >
              <Text color={"red.600"}>Welcome Back! </Text>
              {UserInfo?.Username}
            </Text>
            <Text
              width={["90%"]}
              color={"#000"}
              // textAlign={"center"}
              fontWeight={500}
              fontSize={["16px", "28px"]}
            >
              Disaster Relief Dashboard : Ngo Contribution
            </Text>
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
              fontSize={["8px", "16px"]}
            >
              <Box>Rank</Box>
              <Box>Organization ID</Box>
              <Box>Organization Name</Box>
              <Box>Total Donated Quantity</Box>
            </Box>
            <Box
              height={["85%"]}
              width={["100%"]}
              bgColor={"#fff"}
              borderRadius={10}
              overflowY={"scroll"}
              overflowX={"hidden"}
            >
              {NgoList?.length > 0 ? (
                NgoList?.map((data, index) => (
                  <Box
                    key={data?.userid}
                    height={["12%"]}
                    width={["100%"]}
                    // bgColor={"teal"}
                    flex={"0 0 auto"}
                    display={["flex"]}
                    justifyContent={["center"]}
                    alignItems={["center"]}
                    color={"#000"}
                  >
                    <Box
                      width={["98%"]}
                      height={["100%"]}
                      display={["flex"]}
                      justifyContent={["flex-start"]}
                      alignItems={["center"]}
                      borderBottom={"1px solid rgb(223, 223, 223)"}
                    >
                      <Box
                        width={["18%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        fontSize={["12px", "16px"]}
                      >
                        {index + 1}
                      </Box>
                      <Box
                        width={["25%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        fontSize={["12px", "16px"]}
                      >
                        {data?.userid}
                      </Box>
                      <Box
                        width={["25%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        fontSize={["12px", "16px"]}
                        gap={[2, 4]}
                      >
                        {data?.ngoname}
                      </Box>
                      <Box
                        width={["30%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                      >
                        {data?.total_quantity}
                      </Box>
                    </Box>
                  </Box>
                ))
              ) : (
                <Box
                  height={["100%"]}
                  width={["100%"]}
                  color={"gray.400"}
                  display={["flex"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                  fontSize={["22px"]}
                  letterSpacing={[0.5]}
                  fontStyle={"italic"}
                >
                  No Ngo Found!
                </Box>
              )}
            </Box>
          </Box>
        </Box>
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
                onClick={() => {
                  AddAllProducts();
                }}
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
              overflowY={"scroll"}
              overflowX={"hidden"}
            >
              {SelectedProduct.length > 0 ? (
                SelectedProduct?.map((data) => (
                  <Box
                    key={data?.productid}
                    height={["12%"]}
                    width={["100%"]}
                    // bgColor={"teal"}
                    flex={"0 0 auto"}
                    display={["flex"]}
                    justifyContent={["center"]}
                    alignItems={["center"]}
                    color={"#000"}
                  >
                    <Box
                      width={["98%"]}
                      height={["100%"]}
                      display={["flex"]}
                      justifyContent={["flex-start"]}
                      alignItems={["center"]}
                      borderBottom={"1px solid rgb(223, 223, 223)"}
                    >
                      <Box
                        width={["25%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        fontSize={["12px", "16px"]}
                      >
                        {data?.productid}
                      </Box>
                      <Box
                        width={["40%", "30%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        fontSize={["12px", "16px"]}
                      >
                        {data?.productname}
                      </Box>
                      <Box
                        width={["23%"]}
                        display={["flex"]}
                        justifyContent={["center"]}
                        alignItems={["center"]}
                        fontSize={["12px", "16px"]}
                        gap={[2, 4]}
                      >
                        <Button
                          w={["18px", "25px"]}
                          h={["18px", "25px"]}
                          minW={"unset"}
                          minH={"unset"}
                          p={"0"}
                          m={"0"}
                          border={"1px solid red"}
                          color={"red"}
                          fontSize={"16px"}
                          lineHeight={"1"}
                          onClick={() => {
                            AddorRemoveQty(data?.productid, "Remove");
                          }}
                        >
                          -
                        </Button>
                        {data?.qty}
                        <Button
                          w={["18px", "25px"]}
                          h={["18px", "25px"]}
                          minW={"unset"}
                          minH={"unset"}
                          p={"0"}
                          m={"0"}
                          border={"1px solid red"}
                          color={"red"}
                          fontSize={"16px"}
                          lineHeight={"1"}
                          onClick={() => {
                            AddorRemoveQty(data?.productid, "Add");
                          }}
                        >
                          +
                        </Button>
                      </Box>
                      <Button
                        width={["15%"]}
                        display={["flex"]}
                        justifyContent={["right"]}
                        alignItems={["center"]}
                        onClick={() => {
                          RemoveItem(data?.productid);
                        }}
                      >
                        <X />
                      </Button>
                    </Box>
                  </Box>
                ))
              ) : (
                <Box
                  height={["100%"]}
                  width={["100%"]}
                  color={"gray.400"}
                  display={["flex"]}
                  justifyContent={["center"]}
                  alignItems={["center"]}
                  fontSize={["22px"]}
                  letterSpacing={[0.5]}
                  fontStyle={"italic"}
                >
                  No Items Selected!
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      ) : isClicked === 2 ? (
        <Box
          height={["90%"]}
          width={["95%"]}
          display={["flex"]}
          justifyContent={["space-between"]}
          alignItems={["center"]}
          gap={[3]}
          flexDirection={["column"]}
        >
          <Box
            display={["flex"]}
            height={["10%", "10%"]}
            width={["100%"]}
            bgColor={"white"}
            justifyContent={["space-between"]}
            alignItems={["center"]}
            padding={["0px 10px"]}
            borderRadius={10}
          >
            <Text
              width={["40%", "20%"]}
              display={["flex"]}
              justifyContent={[""]}
              alignItems={["center"]}
              fontWeight={600}
              fontSize={["18px", "26px"]}
              color={["black"]}
              fontStyle
            >
              My Donations
            </Text>
            <Button
              width={["30%", "10%"]}
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              gap={[2]}
              bgColor={["red"]}
              color={["white"]}
              onClick={() => {
                DeleteAllProducts();
              }}
            >
              <Trash2 />
              <Text color={["white"]} fontSize={["12px", "14px"]}>
                Delete All
              </Text>
            </Button>
          </Box>
          <Box
            display={["flex"]}
            flexDirection={["column"]}
            height={["85%"]}
            width={["100%"]}
            bgColor={"white"}
            justifyContent={["flex-start"]}
            alignItems={["center"]}
            padding={["0px 10px"]}
            borderRadius={10}
            gap={[4]}
          >
            <Box
              display={["flex"]}
              height={["10%"]}
              width={["100%"]}
              justifyContent={["space-between"]}
              alignItems={["center"]}
              padding={["0px 10px"]}
              borderBottom={"1px solid rgb(218, 218, 218)"}
              fontWeight={500}
            >
              <Text color={["black"]}>Item Summary</Text>
            </Box>
            <Box
              display={["flex"]}
              height={["12%"]}
              width={["100%"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              padding={["0px 10px"]}
              flexDirection={["column"]}
              borderBottom={"1px solid rgb(218, 218, 218)"}
            >
              <Text
                display={["flex"]}
                color={["black"]}
                height={["10%"]}
                width={["100%"]}
                justifyContent={["space-between"]}
                alignItems={["center"]}
                fontWeight={500}
              >
                Name of Organization:
              </Text>
              <Box
                height={["80%"]}
                width={["100%"]}
                display={["flex"]}
                color={["black"]}
                justifyContent={["space-between"]}
                alignItems={["center"]}
                fontSize={["20px", "22px"]}
              >
                {UserInfo?.Username}
              </Box>
            </Box>

            <Box
              display={["flex"]}
              flexDirection={["row"]}
              height={["70%"]}
              width={["100%"]}
              justifyContent={["space-between"]}
              alignItems={["center"]}
            >
              <Box
                display={["flex"]}
                flexDirection={["column"]}
                height={["95%"]}
                width={["50%", "70%"]}
                justifyContent={["space-between"]}
                alignItems={["left"]}
              >
                <Text
                  color={["black"]}
                  display={["flex"]}
                  alignItems={["center"]}
                  height={["10%"]}
                  width={["90%"]}
                  // bgColor={"teal"}
                  flex={"0 0 auto"}
                  padding={"0px 10px"}
                  fontWeight={500}
                >
                  Summary:
                </Text>
                <Box
                  display={["flex"]}
                  flexDirection={["column"]}
                  justifyContent={["flex-start"]}
                  alignItems={["center"]}
                  height={["90%"]}
                  width={["95%"]}
                  overflow={["scroll"]}
                  // bgColor={"teal"}
                >
                  {NgoCartList.length > 0 ? (
                    NgoCartList?.map((items, index) => (
                      <Box
                        key={index}
                        height={["15%"]}
                        width={["98%"]}
                        display={["flex"]}
                        justifyContent={["space-around"]}
                        alignItems={["center"]}
                        gap={[5]}
                        flex={"0 0 auto"}
                        color={"#000"}
                        borderBottom={"1px solid rgb(230,230,230)"}
                      >
                        <Text
                          width={["30%"]}
                          display={["flex"]}
                          justifyContent={["center"]}
                          alignItems={["center"]}
                          fontSize={["12px", "18px"]}
                        >
                          ID: {items.productid}{" "}
                        </Text>
                        <Text
                          width={["50%", "30%"]}
                          display={["flex"]}
                          justifyContent={["center"]}
                          alignItems={["center"]}
                          fontSize={["12px", "18px"]}
                        >
                          {items.productname}
                        </Text>
                        <Text
                          width={["30%"]}
                          display={["flex"]}
                          justifyContent={["center"]}
                          alignItems={["center"]}
                          fontSize={["12px", "18px"]}
                        >
                          qty: {items.donateqty}{" "}
                        </Text>
                      </Box>
                    ))
                  ) : (
                    <Box
                      height={["100%"]}
                      width={["100%"]}
                      color={"gray.400"}
                      display={["flex"]}
                      justifyContent={["center"]}
                      alignItems={["center"]}
                      fontSize={["14px", "26px"]}
                    >
                      No items currently !
                    </Box>
                  )}
                </Box>
              </Box>
              <Box
                display={["flex"]}
                flexDirection={["column"]}
                height={["95%"]}
                width={["50%", "30%"]}
                borderLeft={"1px solid rgb(218, 218, 218)"}
                justifyContent={["center"]}
                alignItems={["center"]}
                gap={[2]}
              >
                <Text
                  color={["black"]}
                  fontSize={["12px", "25px"]}
                  width={["95%"]}
                  textAlign={["center"]}
                  fontWeight={[600]}
                  lineHeight={["1.3"]}
                >
                  Your generosity is rebuilding lives.
                </Text>
                <Text
                  color={["black"]}
                  fontSize={["12px", "15px"]}
                  width={["95%"]}
                  textAlign={["center"]}
                >
                  Earn a badge at every donation!
                </Text>
                <Image
                  src={["/best-seller.png"]}
                  height={["25%", "40%"]}
                ></Image>
                <Text
                  color={["black"]}
                  fontSize={["12px", "15px"]}
                  width={["95%"]}
                  textAlign={["center"]}
                >
                  Thank you!
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            height={["8%"]}
            width={["100%"]}
            display={["flex"]}
            justifyContent={["flex-start"]}
            alignItems={["center"]}
            gap={[3]}
            //bgColor={"white"}
            borderRadius={10}
          >
            <Text
              width={["40%", "25%"]}
              display={["flex"]}
              justifyContent={["left"]}
              alignItems={["center"]}
              fontWeight={600}
              fontSize={["13px", "20px"]}
              color={["black"]}
            >
              Donating for Disaster/Event:
            </Text>
            <Input
              width={["40%", "62%"]}
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              fontWeight={400}
              fontStyle={"italic"}
              fontSize={["12px", "16px"]}
              color={["black"]}
              bgColor={["white"]}
              border={"none"}
              placeholder="Enter here"
              onChange={(e) => {
                setDisasterType(e.target.value);
              }}
            />
            <Button
              display={["flex"]}
              width={["30%", "12%"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              gap={[2]}
              bgColor={["red"]}
              color={["white"]}
              onClick={() => {
                DonateProducts();
              }}
            >
              <Text color={["white"]} fontSize={["12px", "14px"]}>
                Donate
              </Text>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  </Box>
);
}

export default NgoAdminPage;
