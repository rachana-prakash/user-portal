import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  List,
  ListItem,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useUserList from "../hooks/useUserList";
import useUserStore, { UserDetail } from "../store";
import ProfilePhoto from "../components/ProfilePhoto";

const UserList = () => {
  const { data, error, isLoading } = useUserList();
  const setSelectedUser = useUserStore((s) => s.setSelectedUserDetails);
  const setUsers = useUserStore((s) => s.setUsers);
  const navigate = useNavigate();
  if (isLoading) return <Skeleton />;
  if (error) throw error;
  return (
    <>
      <SimpleGrid backgroundColor="white.50" padding={5}>
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
              <ListItem cursor="pointer" key={user.id}>
                <HStack alignItems="center">
                  <Button
                    fontSize="lg"
                    variant="ghost"
                    onClick={() => {
                      setSelectedUser(user);
                      setUsers(data?.users);
                      navigate(`users/${user.id}`);
                    }}
                  >
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
    </>
  );
};

export default UserList;
