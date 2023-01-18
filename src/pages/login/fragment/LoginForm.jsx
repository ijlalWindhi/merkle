import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "react-feather";
import {
  Button,
  Box,
  Heading,
  FormControl,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  FormHelperText,
} from "@chakra-ui/react";
import loginHandler from "./LoginHandler";
import AlertNotification from "../../../components/alert/Alert";

export default function LoginForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitHandler = async (values) => {
    setIsLoading(!isLoading);
    const res = await loginHandler(values);
    console.log(res);
    setMessage(res.message);
    setStatus(res.status);

    setTimeout(() => {
      if (res.status === "success") {
        navigate("/");
      }
      setMessage("");
      setStatus("");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Box width={{ lg: "100%" }} mx={"auto"} textAlign={"left"}>
      <AlertNotification status={status} message={message} />
      <Box mt={4}>
        <Heading fontWeight={700} color="pink.400">
          Login
        </Heading>
        <Text fontSize="md" my={3}>
          Login to start explore
        </Text>
      </Box>
      <Box>
        <FormControl method="POST">
          <Input
            type="text"
            name="username"
            id="username"
            borderRadius="full"
            focusBorderColor="pink.400"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <FormHelperText textColor="red" mb={4}>
              Masukkan username
            </FormHelperText>
          )}
          <InputGroup mt={4}>
            <Input
              type={show ? "text" : "password"}
              name="password"
              id="password"
              borderRadius="full"
              focusBorderColor="pink.400"
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
            <FormHelperText textColor="red">Masukkan password</FormHelperText>
          )}
          {errors.password?.type === "minLength" && (
            <FormHelperText textColor="red">
              Password minimal 4 karakter
            </FormHelperText>
          )}
          <Button
            mt={8}
            bg="pink.400"
            color="white"
            isLoading={isLoading}
            type="submit"
            w="full"
            borderRadius="full"
            borderWidth={2}
            borderColor="pink.400"
            _hover={{ bg: "white", color: "pink.400", borderColor: "pink.400" }}
            onClick={handleSubmit(async (values) => {
              await submitHandler(values);
            })}
          >
            Masuk
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
