import React from "react";
import ModalHapusPromosi from "../ModalDelete";
import { useDisclosure, Button, Icon } from "@chakra-ui/react";
import { Trash } from "react-feather";

export default function Delete({ payload }) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <ModalHapusPromosi isOpen={isOpen} onClose={onClose} payload={payload} />
      <Button
        color={"white"}
        bgColor={"pink.400"}
        fontSize={"md"}
        p={2}
        rounded={"xl"}
        _hover={{
          bgColor: "pink.500",
        }}
        onClick={onOpen}
      >
        <Icon
          as={Trash}
          w={{ base: 3, md: 5 }}
          h={{ base: 3, md: 5 }}
          color={"white"}
        />
      </Button>
    </>
  );
}
