import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      padding={10}
      minHeight="100vh"
      bgGradient={[
        " linear-gradient(180deg, rgba(97,58,201,1) 0%, rgba(98,56,200,1) 10%, rgba(255,255,255,1) 100%);",
      ]}
    >
      <Outlet />
    </Box>
  );
};

export default Layout;
