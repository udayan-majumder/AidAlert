import { Box, Image, Text, Link} from "@chakra-ui/react";

export default function RegisterComponent() {
  return (
    <Box
      height={["100vh"]}
      width={["100%"]}
      display={["flex"]}
      justifyContent={["flex-start"]}
      alignItems={["center"]}
      flexDirection={["column", "row"]}
      fontFamily={"poppins"}
    >
      <Box
        height={["40%", "100%"]}
        width={["100%", "60%"]}
        bgImage={["url(/mountain.jpg)"]}
        backgroundRepeat={["none"]}
        backgroundSize={["cover"]}
        backgroundColor={["none"]}
        display={["flex"]}
        justifyContent={["center"]}
        alignItems={["center"]}
        flexDirection={["column"]}
      >
        <Box zIndex={2}>
          <Text
            fontSize={["20px", "45px"]}
            fontWeight={500}
            color={["white"]}
            opacity={["0.8"]}
          >
            Predict. Prepare. Protect.{" "}
          </Text>{" "}
        </Box>
        <Box zIndex={2}>
          <Text
            fontSize={["14px", "20px"]}
            color={["white"]}
            opacity={["0.5"]}
            fontStyle={["italic"]}
          >
            AI-powered disaster response to save lives{" "}
          </Text>{" "}
        </Box>
      </Box>
      <Box
        height={["40%", "100%"]}
        width={["100%", "60%"]}
        position={["absolute"]}
        zIndex={1}
        top={0}
        left={0}
        bgColor={["black"]}
        opacity={0.8}
      ></Box>
      <Box
        height={["60%", "100%"]}
        width={["100%", "40%"]}
        bgColor={["white"]}
        display={["flex"]}
        justifyContent={["flex-start"]}
        alignItems={["center"]}
        flexDirection={["column"]}
        gap={5}
      >
        <Box
          height={["10%"]}
          width={["95%"]}
          display={["flex"]}
          flexDirection={["column"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          // bgColor={"red"}
        >
          <Text color={["black"]} fontSize={["20px", "30px"]} fontWeight={700}>
            Continued by,{" "}
          </Text>{" "}
        </Box>
        <Box height={["15%","10%"]}>
          <Image src={["/AiD-ALERTblacklogo.png"]} />{" "}
        </Box>
        <Link
          width={["40%"]}
          height={["5%"]}
          color={["black"]}
          bgColor={["white"]}
          fontSize={["16px", "20px"]}
          fontWeight={600}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          border={"1px solid #000"}
          href="/auth/login"
        >
          LOG IN{" "}
        </Link>
        <Link
          fontSize={["16px", "20px"]}
          width={["40%"]}
          height={"5%"}
          fontWeight={600}
          bgColor={["white"]}
          color={["black"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          borderRadius={4}
          border={"1px solid #000"}
          href="/auth/register"
        >
          SIGN UP{" "}
        </Link>
        <Box height={["15%","10%"]} width={["95%"]}>
          <Text
            color={["black"]}
            opacity={0.5}
            height={["100%"]}
            width={["100%"]}
            display={["flex"]}
            justifyContent={["center"]}
            alignItems={["center"]}
            gap={3}
          >
            <Box width={["20%"]} border={"1px solid rgb(190, 190, 190)"}></Box>{" "}
            Or{" "}
            <Box width={["20%"]} border={"1px solid rgb(190, 190, 190)"}></Box>{" "}
          </Text>
        </Box>
        <Box height={["5%"]}>
          <Text fontStyle={["italic"]} opacity={0.8} color={"gray.500"}>
            Are you an organisation?{" "}
          </Text>
        </Box>
        <Link
          width={["40%"]}
          height={["5%"]}
          color={["black"]}
          bgColor={["white"]}
          fontSize={["16px", "20px"]}
          fontWeight={600}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          borderRadius={4}
          border={"1px solid #000"}
          href="/auth/ngologin"
        >
          LOG IN AS NGO{" "}
        </Link>
        <Link
          width={["40%"]}
          height={["5%"]}
          color={["black"]}
          p={0}
          fontSize={["16px", "20px"]}
          fontWeight={600}
          bgColor={["white"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          borderRadius={4}
          border={"1px solid #000"}
          href="/auth/ngoregister"
        >
          SIGN UP AS NGO{" "}
        </Link>
      </Box>
    </Box>
  );
}
