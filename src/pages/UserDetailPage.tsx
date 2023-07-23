import { Box, Grid, GridItem, List, ListItem } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import useUserStore, { UserDetail } from "../store";

const UserDetailPage = () => {
  const navigate = useNavigate();
  const selectedUser = useUserStore((s) => s.selectedUser);
  return (
    <>
      <Grid>
        <GridItem>
          <Box bgColor="purple.100">
            <List color="white">
              <ListItem
                padding="20px"
                onClick={() => navigate(`/users/${selectedUser?.id}`)}
              >
                Profile
              </ListItem>
              <ListItem
                padding="20px"
                onClick={() => navigate(`/users/${selectedUser?.id}/post`)}
              >
                Post
              </ListItem>
              <ListItem
                padding="20px"
                onClick={() => navigate(`/users/${selectedUser?.id}/gallery`)}
              >
                Gallery
              </ListItem>
              <ListItem
                padding="20px"
                onClick={() => navigate(`/users/${selectedUser?.id}/todo`)}
              >
                Todo
              </ListItem>
            </List>
          </Box>
        </GridItem>
        <GridItem>
          <UserHeader
            title="Profile"
            userDetails={selectedUser as UserDetail}
          />
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default UserDetailPage;
