import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { BsChatRight } from "react-icons/bs";
import { GrStatusGoodSmall } from "react-icons/gr";
import useUserStore from "../store";
import ProfilePhoto from "./ProfilePhoto";

const Chatbox = () => {
  const users = useUserStore((s) => s.users);
  return (
    <>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        borderRadius="4px"
        border="1px solid var(--chakra-colors-purple-100)"
      >
        <AccordionItem borderRadius="4px">
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            backgroundColor="purple.100"
            color="white"
            _hover={{ "background-color": "purple.100" }}
          >
            <Box display="flex" alignItems="center" textAlign="left">
              <BsChatRight fontWeight="bold" />
              <Text marginLeft="5px" fontSize="md">
                Chats
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel padding="5px">
            <SimpleGrid
              height="300px"
              overflowY="auto"
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
              {users?.map((user, index) => (
                <>
                  <GridItem
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingRight="5px"
                  >
                    <Box display="flex" padding="5px">
                      <ProfilePhoto size="24px" src={user.profilepicture} />
                      <Text marginLeft="10px"> {user.name}</Text>
                    </Box>
                    <GrStatusGoodSmall
                      color={index % 2 === 0 ? "green" : "grey"}
                    />
                  </GridItem>
                </>
              ))}
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Chatbox;
