import user from "../imgs/icon-user.svg";
import password from "../imgs/icon-password.svg";
import { InputDefaultNames } from "@/types/typeInputs";
import { LoginAuth } from "@/services/auth";
export const labelInputs: InputDefaultNames[] = [
  {
    label: "Email/phone/dni",
    name: "identifier",
    textPlaceHolder: "Example@hotmail.com",
    type: "text",
    icon: user,
  },
  {
    label: "Password",
    name: "contraseña",
    textPlaceHolder: "**********",
    type: "password",
    icon: password,
  },
];

export const initialValuesFormLogin: LoginAuth = {
  identifier: "test@hotmail.com",
  contraseña: "test",
};
