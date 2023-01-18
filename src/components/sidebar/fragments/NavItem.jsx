import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Icon, Button, Text } from "@chakra-ui/react";

export default function NavItem({
  label,
  link,
  icon,
  isOpen,
  onClose,
  onOpen,
}) {
  const location = useLocation();
  const active = location.pathname == link;
  return (
    <NavLink to={link} cursor="pointer">
      <Button
        transition="200ms"
        my={[1, 2, 3]}
        px={[2, 3, 8]}
        justifyContent="flex-start"
        alignItems="center"
        w="full"
        _hover={{ borderColor: "white" }}
        bgColor={"white"}
        color={"black"}
        position={"relative"}
        onClick={isOpen ? onClose : onOpen}
      >
        <Icon as={icon} w={5} h={5} mr={"10%"} />
        <Text fontWeight={500} ml={{ md: 2 }}>
          {label}
        </Text>
      </Button>
    </NavLink>
  );
}
