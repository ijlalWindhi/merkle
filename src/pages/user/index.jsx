import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Icon,
  useDisclosure,
  Progress,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { checkLogged } from "../../utils/constants";
import Table from "./fragments/Table";
import { PlusCircle } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, usersSelector } from "../../utils/store/reducer/usersSlice";
import ModalAdd from "./fragments/ModalAdd";

export default function index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(usersSelector.selectAll);

  const getUsersData = async () => {
    setLoading(true);
    await dispatch(getUsers());
    setLoading(false);
  };

  useEffect(() => {
    getUsersData();
  }, [dispatch]);

  useEffect(() => {
    const isLoggedIn = checkLogged();
    if (!isLoggedIn) {
      navigate("/login");
    }
    document.title = "Fake Store | Users";
  }, [navigate]);

  return (
    <>
      <Heading
        color={"pink.400"}
        fontFamily={"Poppins"}
        fontSize={{ base: "2xl", md: "5xl" }}
      >
        Users Page
      </Heading>
      <ModalAdd isOpen={isOpen} onClose={onClose} />
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        w="full"
        my={[4, 8]}
      >
        <Button
          colorScheme={"teal"}
          fontWeight={300}
          px={10}
          onClick={onOpen}
          isLoading={loading}
        >
          <Icon as={PlusCircle} w={5} h={5} mr={"10%"} />
          Add User
        </Button>
      </Flex>
      {loading ? (
        <Progress size="xs" isIndeterminate />
      ) : (
        <Table data={users} />
      )}
    </>
  );
}
