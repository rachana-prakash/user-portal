import { Heading, SimpleGrid } from "@chakra-ui/react";

interface Props {
  placeholder: string;
}
const Placeholder = ({ placeholder }: Props) => {
  return (
    <SimpleGrid justifyContent="center" alignItems="center" padding={5}>
      <Heading color="white.50">{placeholder}</Heading>
    </SimpleGrid>
  );
};

export default Placeholder;
