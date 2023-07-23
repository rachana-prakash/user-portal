import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist or is private."
            : "An unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
