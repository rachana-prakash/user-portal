import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import PrivateRoutes from "./pages/PrivateRoutes";
import UserDetail from "./pages/UserDetail";
import UserList from "./pages/UserList";
import ErrorPage from "./pages/ErrorPage";
import UserProfile from "./pages/UserProfile";
import UserPost from "./pages/UserPost";
import UserGallery from "./pages/UserGallery";
import UserTodo from "./pages/UserTodo";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <UserList /> }],
  },
  {
    path: "users",
    element: <PrivateRoutes />,
    children: [
      {
        path: ":id",
        element: <UserDetail />,
        children: [
          { index: true, element: <UserProfile /> },
          { path: "post", element: <UserPost /> },
          { path: "gallery", element: <UserGallery /> },
          { path: "todo", element: <UserTodo /> },
        ],
      },
    ],
  },
]);
