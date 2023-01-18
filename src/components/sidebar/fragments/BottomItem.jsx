import React from "react";
import { Box, Icon, useDisclosure, Button, Text } from "@chakra-ui/react";
import ModalLogout from "./ModalLogout";
import { LogOut } from "react-feather";

export default function BottomItem() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display="flex" flexDir="column" w={"full"}>
        <Button
          transition="200ms"
          my={[2, 4]}
          fontWeight={500}
          py={3}
          justifyContent="start"
          alignItems="center"
          w="full"
          onClick={onOpen}
          bgColor={"primary.100"}
          color={"primary.200"}
          _hover={{ bg: "primary.100", color: "primary.200" }}
        >
          <Icon as={LogOut} w={5} h={5} mr={"10%"} />
          <Text fontWeight={500}>Logout</Text>
        </Button>
      </Box>
      <ModalLogout isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
