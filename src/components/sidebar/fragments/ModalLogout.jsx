import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../../utils/helper/localstorage";
import ImageLogout from "../../../assets/image-logout.svg";

export default function ModalLogout({ isOpen, onOpen, onClose }) {
  const navigate = useNavigate();

  const _handleLogout = () => {
    clearLocalStorage();
    navigate("/login");
    location.reload();
  };

  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      isCentepink
    >
      <ModalOverlay />
      <ModalContent borderRadius="3xl" py={8}>
        <ModalBody alignItems="center" textAlign="center">
          <Center>
            <Image
              src={ImageLogout}
              alt={"Image Logout"}
              w={["80%", "70%", "60%"]}
            />
          </Center>
          <Text as="h3" fontSize={23} fontWeight={600}>
            Logout
          </Text>
          <Text as="h6" fontSize={16} fontWeight={400}>
            Are you sure want to logout?
          </Text>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            variant={"outline"}
            bgColor={"white"}
            color={"pink.500"}
            borderColor={"pink.500"}
            borderWidth={"1px"}
            _hover={{
              bg: "pink.500",
              color: "white",
              border: "1px solid",
            }}
            px="10%"
            mr={3}
            onClick={onClose}
            borderRadius="full"
            fontWeight={500}
          >
            Cancle
          </Button>
          <Button
            px="10%"
            borderRadius="full"
            bgColor={"pink.500"}
            color={"white"}
            borderWidth={"1px"}
            fontWeight={500}
            _hover={{
              bg: "white",
              color: "pink.500",
              border: "1px solid",
            }}
            shadow="0 0 20px rgba(231, 0, 0, 20%)"
            onClick={() => _handleLogout()}
          >
            Logout
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
