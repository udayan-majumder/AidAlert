import {
  Box,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

export default function RegisterComponent() {
  return (
    <Box
      height={["100vh"]}
      width={["100%"]}
      display={["flex"]}
      flexDirection={["column"]}
      justifyContent={["end"]}
      alignItems={["center"]}
      backgroundImage="url(./login-signup-bg.png)"
      backgroundSize={["cover"]}
      bgColor={["#2A2A2C"]}
    >
      <Box
        height={["65%", "70%"]}
        width={["100%"]}
        display={["flex"]}
        justifyContent={["top"]}
        alignItems={["center"]}
        flexDirection={["column"]}
      >
        <Box
          height={["15%", "30%"]}
          width={["100%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          {" "}
          <Image src="./AiD_ALERT.png" height={["100%"]} />{" "}
        </Box>
        <Box
          height={["10%"]}
          width={["100%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          {" "}
          <Text
            color={["white"]}
            fontFamily={["poppins"]}
            fontSize={["18px", "26px"]}
            opacity={0.8}
            fontWeight={600}
            letterSpacing={2}
          >
            {" "}
            Predict. Prepare. Protect.{" "}
          </Text>
        </Box>
        <Box
          height={["10%"]}
          width={["100%"]}
          display={["flex"]}
          justifyContent={["center"]}
          alignItems={["top"]}
        >
          {" "}
          <Text
            color={["white"]}
            fontFamily={["poppins"]}
            fontSize={["15px", "20px"]}
            opacity={0.8}
          >
            {" "}
            AI-Powered disaster response to save lives.{" "}
          </Text>
        </Box>
        <Box
          height={["20%"]}
          width={["100%"]}
          display={["flex"]}
          justifyContent={["center"]}
          flexDirection={["row"]}
          gap={10}
        >
          <Box>
            {" "}
            <Link
              href="/auth/login"
              variant="outline"
              color="white"
              border="1px solid #fff"
              _hover={{ bg: "whiteAlpha.200" }}
              _active={{ bg: "whiteAlpha.300" }}
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              borderRadius={["10px"]}
              height={["40px"]}
              width={["150px"]}
            >
              LOG IN
            </Link>{" "}
          </Box>
          <Box>
            <Link
              href="/auth/register"
              variant="outline"
              color="white"
              border="1px solid #fff"
              _hover={{ bg: "whiteAlpha.200" }}
              _active={{ bg: "whiteAlpha.300" }}
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              borderRadius={["10px"]}
              height={["40px"]}
              width={["150px"]}
            >
              SIGN UP
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
