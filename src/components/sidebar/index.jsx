import React from "react";
import {
  Box,
  Flex,
  VStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { AlignCenter, X, Users } from "react-feather";
import NavItem from "./fragments/NavItem";
import BottomItem from "./fragments/BottomItem";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w={{ base: "full", md: "12vw" }}
      minH={{ base: 6, md: "full" }}
      bg={useColorModeValue("white")}
      px={[4, 20]}
      py={2}
      zIndex={10}
      boxShadow={"2px 0px 20px 2px rgba(0, 0, 0, 0.3);"}
      bgColor={"pink.400"}
      borderTopEndRadius={{ md: 20 }}
      borderBottomEndRadius={{ md: 20 }}
    >
      <Flex h={"full"} alignItems={"center"} flexDir={"column"}>
        <Flex
          justifyContent={{ base: "flex-end", md: "space-between" }}
          w={"full"}
          my={{ base: 4, md: 0 }}
          justifyItems={"center"}
          alignItems={"center"}
        >
          <Heading
            color={"white"}
            fontSize={{ base: "xl", md: "2xl" }}
            fontFamily={"Poppins"}
            display={{ md: "none" }}
            w={"full"}
            textAlign={"center"}
          >
            Fake Store
          </Heading>
          <IconButton
            size={"md"}
            p={2}
            my="auto"
            icon={isOpen ? <X /> : <AlignCenter />}
            aria-label={"Open Menu"}
            position={{ base: "absolute", md: "relative" }}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        <VStack
          spacing={8}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
          h={"full"}
        >
          <Heading
            color={"white"}
            fontSize={{ base: "xl", md: "xl" }}
            fontFamily={"Poppins"}
            mt={10}
          >
            Fake Store
          </Heading>
          <Box
            display={"flex"}
            w={"full"}
            h={"full"}
            flexDir={"column"}
            justifyContent={"space-between"}
            pb={{ base: "50%", lg: "100%" }}
          >
            <Box w={"full"}>
              <NavItem link={"/"} label={"Client"} icon={Users} />
            </Box>
            <BottomItem />
          </Box>
        </VStack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={[4]}>
            <NavItem link={"/"} label={"Client"} icon={Users} />
            <BottomItem />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
