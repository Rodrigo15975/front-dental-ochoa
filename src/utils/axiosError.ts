import { AxiosError } from "axios";

export const netWorkError = (axios: AxiosError) => {
  if (axios.code === "ERR_NETWORK") return true;
  console.log(axios);
};
