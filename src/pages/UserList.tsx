import {
  Box,
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProfilePhoto from "../components/ProfilePhoto";
import useUserList from "../hooks/useUserList";
import useUserStore, { UserDetail } from "../store";

const UserList = () => {
  const { data, error, isLoading } = useUserList();
  const setSelectedUser = useUserStore((s) => s.setSelectedUserDetails);
  const setUsers = useUserStore((s) => s.setUsers);
  const setPageTitle = useUserStore((s) => s.setPageTitle);
  const navigate = useNavigate();
  if (isLoading) return <Skeleton />;
  if (error) throw error;
  return (
    <>
      <Box display="flex" justifyContent="center">
        <SimpleGrid width="50%" borderRadius="20px" backgroundColor="white.50">
          <Box textAlign="center">
            <Heading marginY="20px" size="md" color="gray.500">
              Select an account
            </Heading>
            <List
              backgroundColor="white"
              overflowY="auto"
              height="500px"
              sx={{
                "&::-webkit-scrollbar": {
                  width: "10px",
                  borderRadius: "16px",
                  backgroundColor: `rgba(216, 216, 216, 0.5)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: "16px",
                  backgroundColor: `rgba(216, 216, 216, 0.5)`,
                },
              }}
            >
              {data?.users?.map((user: UserDetail) => (
                <ListItem
                  margin="5px 10px 10px 10px"
                  cursor="pointer"
                  padding="5px"
                  key={user.id}
                >
                  <HStack
                    alignItems="center"
                    onClick={() => {
                      setSelectedUser(user);
                      setUsers(data?.users);
                      navigate(`users/${user.id}/profile`);
                      setPageTitle("Profile");
                    }}
                  >
                    <Button paddingLeft="0" fontSize="lg" variant="ghost">
                      <ProfilePhoto size="32px" src={user.profilepicture} />
                      <Text marginX="5px" color="gray.600">
                        {user.name}
                      </Text>
                    </Button>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default UserList;
