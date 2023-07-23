import React from "react";
import useUserList from "../hooks/useUserList";

const UserList = () => {
  const { data: users, error, isLoading } = useUserList();

  return <>UserList</>;
};

export default UserList;
