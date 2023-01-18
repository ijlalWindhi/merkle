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
import ImageDelete from "../../../assets/image-delete.svg";
import { deleteUsers } from "../../../utils/store/reducer/usersSlice";
import { useDispatch } from "react-redux";

export default function ModalLogout({ isOpen, onClose, payload }) {
  const dispatch = useDispatch();
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent borderRadius="3xl" py={8}>
        <ModalBody alignItems="center" textAlign="center">
          <Center>
            <Image
              src={ImageDelete}
              w={["80%", "70%", "60%"]}
              alt={"image delete"}
            />
          </Center>
          <Text as="h3" fontSize={23} fontWeight={600}>
            Delete This User?
          </Text>
          <Text as="h6" fontSize={16} fontWeight={400}>
            Are you sure want to delete this user?
          </Text>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            variant={"outline"}
            colorScheme={"red"}
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
            colorScheme={"red"}
            fontWeight={500}
            onClick={() => {
              dispatch(deleteUsers(payload.id));
              onClose();
            }}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
