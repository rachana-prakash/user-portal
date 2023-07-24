import { Box, Grid, Heading, Text } from "@chakra-ui/react";

interface Props {
  details: { title: string; detail: string }[];
}

const Details = ({ details }: Props) => {
  return (
    <>
      <Box padding="20px">
        {details.map((item, index) => (
          <Grid gridTemplateColumns="1fr 2fr" key={index}>
            <Text fontSize="md" color="gray.400">
              {item.title[0].toUpperCase() + item.title.substring(1)}:{" "}
            </Text>
            <Heading size="md" color="gray.500">
              {item.detail}
            </Heading>
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default Details;
