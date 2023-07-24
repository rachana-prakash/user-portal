import { Box, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Details from "../components/Details";
import ProfilePhoto from "../components/ProfilePhoto";
import useMapHelper from "../hooks/useMapHelper";
import useUserStore from "../store";

const UserProfile = () => {
  const selectedUser = useUserStore((s) => s.selectedUser);
  const userInfo = useMapHelper({
    username: selectedUser?.username,
    email: selectedUser?.email,
    phone: selectedUser?.phone,
    website: selectedUser?.website,
  });
  const userAddress = useMapHelper({
    street: selectedUser?.address.street,
    suite: selectedUser?.address.suite,
    city: selectedUser?.address.city,
    zipcode: selectedUser?.address.zipcode,
  });

  const userCompany = useMapHelper({
    name: selectedUser?.company.name,
    catchphrase: selectedUser?.company.name,
    bs: selectedUser?.company.bs,
  });

  return (
    <>
      <SimpleGrid
        height="100%"
        width="100%"
        gridColumnGap="20px"
        gridTemplateColumns="1fr 1fr"
      >
        <GridItem
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          borderRight="2px solid var(--chakra-colors-gray-300)"
        >
          <ProfilePhoto
            size="200px"
            src={selectedUser?.profilepicture as string}
          />
          <Heading size="md" color="gray.500">
            {selectedUser?.name}
          </Heading>
          <Details details={userInfo} />
          <Box borderTop="2px solid var(--chakra-colors-gray-300)">
            <Text textAlign="center" fontSize="xl" color="gray.400">
              Company
            </Text>
            <Details details={userCompany} />
          </Box>
        </GridItem>
        <GridItem>
          <Box padding="20px">
            <Text fontSize="xl" color="gray.400">
              Address
            </Text>
            <Details details={userAddress} />
          </Box>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default UserProfile;
