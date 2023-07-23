import { Fragment } from "react";
import { Box, HStack, Heading, List, ListItem, Text } from "@chakra-ui/react";

interface Props {
  details: { title: string; detail: string }[];
}

const Details = ({ details }: Props) => {
  return (
    <>
      <Box>
        {details.map((item, index) => (
          <HStack key={index}>
            <Text fontSize="md" color="gray.200">
              {item.title}:{" "}
            </Text>
            <Heading size="md" color="gray.100">
              {item.detail}
            </Heading>
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default Details;
