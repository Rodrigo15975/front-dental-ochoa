import { useQuery } from "@tanstack/react-query";
import { getIdRole, getProfile } from "./api";
import { ROLES } from "@/types/typeRoles";

export const useGetProfile = (
  userId: string,
  role: keyof typeof ROLES | undefined
) => {
  return useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getProfile(userId, role),
  });
};

export const useGetId = () => {
  return useQuery({
    queryKey: ["id"],
    queryFn: getIdRole,
  });
};
