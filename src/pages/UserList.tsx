import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useUserList from "../hooks/useUserList";
import useUserStore, { UserDetail } from "../store";

const UserList = () => {
  const { data, error, isLoading } = useUserList();
  const setSelectedUser = useUserStore((s) => s.setSelectedUserDetails);
  const navigate = useNavigate();
  if (isLoading) return <Skeleton />;
  if (error) throw error;
  return (
    <>
      <SimpleGrid justifyContent="center" alignItems="center" minHeight="100vh">
        <List overflowY="auto" height="300px">
          {data?.users?.map((user: UserDetail) => (
            <ListItem key={user.id}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius="50%"
                  objectFit="cover"
                  src={user.profilepicture}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="center"
                  fontSize="lg"
                  variant="ghost"
                  onClick={() => {
                    setSelectedUser(user);
                    navigate(`users/${user.id}`);
                  }}
                >
                  {user.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  );
};

export default UserList;
