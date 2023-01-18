import React from "react";
import { Button, Icon, useDisclosure } from "@chakra-ui/react";
import { Edit2 } from "react-feather";
import ModalEdit from "../ModalEdit";

export default function Edit({ payload }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalEdit isOpen={isOpen} onClose={onClose} payload={payload} />
      <Button
        color={"white"}
        bgColor={"blue.400"}
        fontSize={{ base: "xs", md: "sm" }}
        p={2}
        rounded={"xl"}
        _hover={{
          bgColor: "blue.500",
        }}
        onClick={onOpen}
      >
        <Icon
          as={Edit2}
          w={{ base: 4, md: 6 }}
          h={{ base: 4, md: 6 }}
          color={"white"}
        />
      </Button>
    </>
  );
}
