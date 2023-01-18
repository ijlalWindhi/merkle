import React from "react";
import Delete from "./action/Delete";
import Edit from "./action/Edit";
import { Flex } from "@chakra-ui/react";

export default function ActionButton({ payload }) {
  return (
    <Flex gap={3} mt={4}>
      <Edit payload={payload} />
      <Delete payload={payload} />
    </Flex>
  );
}
