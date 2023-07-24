import { Heading, SimpleGrid } from "@chakra-ui/react";

interface Props {
  placeholder: string;
}
const Placeholder = ({ placeholder }: Props) => {
  return (
    <SimpleGrid
      height="80%"
      justifyContent="center"
      alignItems="center"
      padding={5}
    >
      <Heading color="white.50" fontSize="6xl">
        {placeholder}
      </Heading>
    </SimpleGrid>
  );
};

export default Placeholder;
