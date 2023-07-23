import {
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../store";

const UserDetail = () => {
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
        <GridItem></GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default UserDetail;
