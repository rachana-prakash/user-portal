import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
// bgGradient={[
//   " linear-gradient(180deg, rgba(97,58,201,1) 0%, rgba(98,56,200,1) 10%, rgba(255,255,255,1) 100%);",
// ]}
const Layout = () => {
  return (
    <>
      <Box
        padding={10}
        display="block"
        position="relative"
        height="201px"
        width="100%"
        background="rgb(97,58,201)"
        transform="scale(1, 1)"
        _before={{
          content: `'""'`,
          display: "block",
          position: "fixed",
          borderRadius: "100%",
          width: "100%",
          height: "300px",
          backgroundColor: "white",
          right: "-25%",
          top: "179px",
        }}
        _after={{
          content: `'""'`,
          display: "block",
          position: "fixed",
          borderRadius: "100%",
          width: "100%",
          height: "300px",
          backgroundColor: "rgb(97,58,201)",
          left: "-25%",
          top: "-80px",
          clipPath: "ellipse(100% 15% at -15% 100%)",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
