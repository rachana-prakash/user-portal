import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../store";

const PrivateRoutes = () => {
  const selectedUser = useUserStore((s) => s.selectedUser);
  if (!selectedUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
