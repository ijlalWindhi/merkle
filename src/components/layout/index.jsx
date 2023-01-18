import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import { Box, Flex } from "@chakra-ui/react";

export default function index() {
  return (
    <Flex
      h={[null, null, "100vh"]}
      flexDir={["column", "column", "row"]}
      overflow="hidden"
      maxW={"100vw"}
    >
      <Sidebar />
      <Box
        w={["full"]}
        minH={{ base: "100vh", md: "auto" }}
        margin={{ base: "0", md: "3", lg: "10" }}
        p={{ base: 4, sm: 5, md: 5, lg: 10 }}
        bgColor={"primary.200"}
        borderRadius={{ base: 0, md: "3xl" }}
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
