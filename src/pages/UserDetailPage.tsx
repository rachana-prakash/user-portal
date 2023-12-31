import {
  Box,
  Grid,
  GridItem,
  Tab,
  TabList,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import Chatbox from "../components/Chatbox";
import UserHeader from "../components/UserHeader";
import useUserStore, { UserDetail } from "../store";

const tabItems = ["Profile", "Post", "Gallery", "Todo"];
const UserDetailPage = () => {
  const navigate = useNavigate();
  const selectedUser = useUserStore((s) => s.selectedUser);
  const setPageTitle = useUserStore((s) => s.setPageTitle);
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
            borderRadius="50px"
            bgColor="purple.100"
            justifyContent="center"
            alignItems="center"
          >
            <Tabs position="relative" variant="unstyled">
              <TabList>
                <VStack width="100%">
                  {tabItems.map((item, index) => (
                    <Tab
                      margin="20px"
                      key={index}
                      cursor="pointer"
                      display="flex"
                      justifyContent="flex-start"
                      color="gray.200"
                      width="100%"
                      borderBottom="2px solid white"
                      _selected={{ color: "white", fontWeight: "bold" }}
                      onClick={() => {
                        navigate(
                          `/users/${selectedUser?.id}/${item.toLowerCase()}`
                        );
                        setPageTitle(item);
                      }}
                    >
                      {item}
                    </Tab>
                  ))}
                </VStack>
              </TabList>
            </Tabs>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack height="100%">
            <UserHeader userDetails={selectedUser as UserDetail} />
            <Outlet />
          </VStack>
        </GridItem>
      </Grid>
      <Box position="fixed" bottom="0" right="0" width="300px">
        <Chatbox />
      </Box>
    </>
  );
};

export default UserDetailPage;
