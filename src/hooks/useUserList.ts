import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Users } from "../store";

const useUserList = () => {
  const apiClient = new APIClient<Users>(`/users`);
  return useQuery({
    queryKey: ["users"],
    queryFn: apiClient.getAll,
  });
};

export default useUserList;
