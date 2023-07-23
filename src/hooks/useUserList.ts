import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useUserList = () => {
  const apiClient = new APIClient(`/users`);
  return useQuery({
    queryKey: ["users"],
    queryFn: apiClient.getAll,
  });
};

export default useUserList;
