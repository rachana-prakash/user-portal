import { Grid, GridItem, Menu, MenuItem, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import useUserStore, { UserDetail } from "../store";

const UserDetailPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("Profile");
  const selectedUser = useUserStore((s) => s.selectedUser);
  return (
    <>
      <Grid
        gridTemplateColumns="300px 2fr"
        height="100vh"
        gridGap="40px"
        padding="10px"
      >
        <GridItem>
          <VStack
            height="100%"
            justifyContent="center"
            alignItems="center"
            borderRadius="50px"
            bgColor="purple.100"
          >
            <Menu>
              <MenuItem
                padding="20px"
                cursor="pointer"
                onClick={() => {
                  navigate(`/users/${selectedUser?.id}`);
                  setTitle("Profile");
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                padding="20px"
                cursor="pointer"
                onClick={() => {
                  navigate(`/users/${selectedUser?.id}/post`);
                  setTitle("Post");
                }}
              >
                Post
              </MenuItem>
              <MenuItem
                padding="20px"
                cursor="pointer"
                onClick={() => {
                  navigate(`/users/${selectedUser?.id}/gallery`);
                  setTitle("Gallery");
                }}
              >
                Gallery
              </MenuItem>
              <MenuItem
                padding="20px"
                cursor="pointer"
                onClick={() => {
                  navigate(`/users/${selectedUser?.id}/todo`);
                  setTitle("Todo");
                }}
              >
                Todo
              </MenuItem>
            </Menu>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack height="100%">
            <UserHeader
              title={title}
              userDetails={selectedUser as UserDetail}
            />
            <Outlet />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default UserDetailPage;
