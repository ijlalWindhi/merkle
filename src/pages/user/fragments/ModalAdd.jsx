import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Grid,
  Container,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Heading,
  FormHelperText,
  Box,
  Flex,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUsers } from "../../../utils/store/reducer/usersSlice";
import Alert from "../../../components/alert/Alert";
import { Eye, EyeOff } from "react-feather";

export default function ModalAdd({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async (values) => {
    setIsLoading(!isLoading);
    const data = {
      phone: values.phone,
      email: values.email,
      password: values.password,
      username: values.username,
      name: {
        firstname: values.firstname,
        lastname: values.lastname,
      },
      address: {
        city: values.city,
        zipcode: values.zipcode,
        street: values.street,
        number: values.number,
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
    };
    await dispatch(addUsers(data));
    setMessage("Success add users");
    setStatus("success");
    setTimeout(() => {
      onClose(), reset(), setStatus(""), setMessage("");
      setIsLoading(false);
    }, 1000);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      blockScrollOnMount={false}
      motionPreset="scale"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent borderRadius="20px">
        <ModalBody p={8}>
          <Heading fontSize={20}>Add User</Heading>
          <Box mt={4}>
            <Alert status={status} message={message} />
          </Box>
          <FormControl method="POST">
            <Container gridTemplateRows="repeat(2,1fr)" p={0} my={6}>
              <Grid templateColumns="repeat(2, 1fr)" gap={5} my={3}>
                <Flex direction="column">
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    borderRadius="full"
                    focusBorderColor="primary.100"
                    placeholder="Username"
                    {...register("username", {
                      required: true,
                    })}
                  />
                  {errors.username?.type === "required" && (
                    <FormHelperText textColor="red" mb={4}>
                      Enter username
                    </FormHelperText>
                  )}
                </Flex>
                <Flex direction="column">
                  <InputGroup>
                    <Input
                      type={show ? "text" : "password"}
                      name="password"
                      id="password"
                      borderRadius="full"
                      focusBorderColor="primary.100"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 4,
                      })}
                    />
                    <InputRightElement>
                      <IconButton
                        borderRadius="full"
                        size="sm"
                        variant="ghost"
                        mr={[2, 6, 10]}
                        onClick={handleClick}
                        aria-label={"whod hide"}
                        icon={show ? <EyeOff /> : <Eye />}
                      />
                    </InputRightElement>
                  </InputGroup>
                  {errors.password?.type === "required" && (
                    <FormHelperText textColor="red" mb={4}>
                      Enter password
                    </FormHelperText>
                  )}
                  {errors.password?.type === "minLength" && (
                    <FormHelperText textColor="red">
                      Password min 8 character
                    </FormHelperText>
                  )}
                </Flex>
                <Flex direction="column">
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    borderRadius="full"
                    focusBorderColor="primary.100"
                    placeholder="Phone"
                    {...register("phone", {
                      required: true,
                    })}
                  />
                  {errors.phone?.type === "required" && (
                    <FormHelperText textColor="red" mb={4}>
                      Enter phone
                    </FormHelperText>
                  )}
                </Flex>
                <Flex direction="column">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    borderRadius="full"
                    focusBorderColor="primary.100"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <FormHelperText textColor="red" mb={4}>
                      Enter email
                    </FormHelperText>
                  )}
                </Flex>
                <GridItem colSpan={2}>
                  <Text mb={1} fontWeight={"medium"}>
                    Name
                  </Text>
                  <Flex gap={5}>
                    <Flex direction="column">
                      <Input
                        type="text"
                        name="firstname"
                        id="firstname"
                        borderRadius="full"
                        focusBorderColor="primary.100"
                        placeholder="First Name"
                        {...register("firstname", {
                          required: true,
                        })}
                      />
                      {errors.firstname?.type === "required" && (
                        <FormHelperText textColor="red" mb={4}>
                          Enter firstname
                        </FormHelperText>
                      )}
                    </Flex>
                    <Flex direction="column">
                      <Input
                        type="text"
                        name="lastname"
                        id="lastname"
                        borderRadius="full"
                        focusBorderColor="primary.100"
                        placeholder="Last Name"
                        {...register("lastname", {
                          required: true,
                        })}
                      />
                      {errors.lastname?.type === "required" && (
                        <FormHelperText textColor="red" mb={4}>
                          Enter lastname
                        </FormHelperText>
                      )}
                    </Flex>
                  </Flex>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text mb={1} fontWeight={"medium"}>
                    Address
                  </Text>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5} my={3}>
                    <Flex direction="column">
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        borderRadius="full"
                        focusBorderColor="primary.100"
                        placeholder="City"
                        {...register("city", {
                          required: true,
                        })}
                      />
                      {errors.city?.type === "required" && (
                        <FormHelperText textColor="red" mb={4}>
                          Enter city
                        </FormHelperText>
                      )}
                    </Flex>
                    <Flex direction="column">
                      <Input
                        type="text"
                        name="street"
                        id="street"
                        borderRadius="full"
                        focusBorderColor="primary.100"
                        placeholder="Street"
                        {...register("street", {
                          required: true,
                        })}
                      />
                      {errors.street?.type === "required" && (
                        <FormHelperText textColor="red" mb={4}>
                          Enter street
                        </FormHelperText>
                      )}
                    </Flex>
                    <Flex direction="column">
                      <Input
                        type="text"
                        name="number"
                        id="number"
                        borderRadius="full"
                        focusBorderColor="primary.100"
                        placeholder="Number"
                        {...register("number", {
                          required: true,
                        })}
                      />
                      {errors.number?.type === "required" && (
                        <FormHelperText textColor="red" mb={4}>
                          Enter number
                        </FormHelperText>
                      )}
                    </Flex>
                    <Flex direction="column">
                      <Input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        borderRadius="full"
                        focusBorderColor="primary.100"
                        placeholder="Zipcode"
                        {...register("zipcode", {
                          required: true,
                        })}
                      />
                      {errors.zipcode?.type === "required" && (
                        <FormHelperText textColor="red" mb={4}>
                          Enter zipcode
                        </FormHelperText>
                      )}
                    </Flex>
                  </Grid>
                </GridItem>
              </Grid>
            </Container>
            <Button
              variant="outline"
              colorScheme={"teal"}
              fontWeight={500}
              px={6}
              borderRadius="full"
              onClick={handleClose}
              isLoading={isLoading}
            >
              Cancle
            </Button>
            <Button
              type="submit"
              ml={4}
              px={6}
              colorScheme={"teal"}
              borderRadius="full"
              fontWeight={500}
              onClick={handleSubmit(async (values) => {
                await submitHandler(values);
              })}
              isLoading={isLoading}
            >
              Submit
            </Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
