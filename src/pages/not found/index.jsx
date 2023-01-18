import React from "react";
import { Result } from "antd";
import { useNavigate } from "react-router-dom";
import { Button, Center } from "@chakra-ui/react";

export default function index() {
    const navigate = useNavigate();
    return (
        <Center minH={"100vh"}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button
                        colorScheme="blue"
                        rounded={0}
                        onClick={() => navigate(-1)}
                    >
                        Back to Previous Page
                    </Button>
                }
            />
        </Center>
    );
}
