import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useUserStore, { UserDetail } from "../store";
import ProfilePhoto from "./ProfilePhoto";

interface Props {
  title: string;
  userDetails: UserDetail;
}

const UserHeader = ({ title, userDetails }: Props) => {
  const users = useUserStore((s) => s.users);
  const displayUsers = users
    .filter((user) => user.id !== userDetails.id)
    .splice(Math.floor(Math.random() * users.length - 2), 2);
  const navigate = useNavigate();
  const setSelectedUserDetails = useUserStore((s) => s.setSelectedUserDetails);

  return (
    <>
      <Box
        width="100%"
        bg="white"
        px={4}
        borderBottom="2px solid var(--chakra-colors-gray-300)"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading size="md" color="gray.500">
              {title}
            </Heading>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton as={Button} cursor={"pointer"}>
                  <HStack>
                    <ProfilePhoto
                      size="32px"
                      src={userDetails.profilepicture}
                    />
                    <Text color="gray.500" paddingLeft="2px">
                      {userDetails?.name}
                    </Text>
                  </HStack>
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <ProfilePhoto
                      size="64px"
                      src={userDetails.profilepicture}
                    />
                  </Center>
                  <br />
                  <VStack>
                    <Text color="gray.500">{userDetails.name}</Text>
                    <Text color={"gray.200"}>{userDetails.email}</Text>
                  </VStack>
                  <br />
                  <MenuDivider />
                  <VStack>
                    {displayUsers?.map((user, index) => (
                      <MenuItem
                        onClick={() => {
                          setSelectedUserDetails(user);
                          navigate(`/users/${user.id}`);
                        }}
                        key={index}
                      >
                        <HStack>
                          <ProfilePhoto size="32px" src={user.profilepicture} />{" "}
                          <Text> {user.name}</Text>
                        </HStack>
                      </MenuItem>
                    ))}
                    <MenuItem
                      as={Button}
                      backgroundColor="red.600"
                      width="100px"
                      color="white"
                      cursor={"pointer"}
                      onClick={() => {
                        setSelectedUserDetails(null);
                        navigate("/");
                      }}
                    >
                      Sign Out
                    </MenuItem>
                  </VStack>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default UserHeader;
