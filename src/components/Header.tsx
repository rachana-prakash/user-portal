import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useUserStore, { UserDetail } from "../store";
import ProfilePhoto from "./ProfilePhoto";

interface Props {
  title: string;
  userDetails: UserDetail;
}

const Header = ({ title, userDetails }: Props) => {
  const users = useUserStore((s) => s.users);
  const displayUsers = users
    .filter((user) => user.id !== userDetails.id)
    .splice(Math.floor(Math.random() * users.length - 2), 2);
  const navigate = useNavigate();
  const setSelectedUserDetails = useUserStore((s) => s.setSelectedUserDetails);

  return (
    <>
      <Box bg="white" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box color="gray.100">{title}</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton as={Button} cursor={"pointer"} minW={0}>
                  <Text>{userDetails?.name}</Text>
                  <ProfilePhoto size="32px" src={userDetails.profilepicture} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <ProfilePhoto
                      size="32px"
                      src={userDetails.profilepicture}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{userDetails.name}</p>
                    <p>{userDetails.email}</p>
                  </Center>
                  <br />
                  <MenuDivider />
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
                    onClick={() => {
                      setSelectedUserDetails(null);
                      navigate("/");
                    }}
                  >
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
