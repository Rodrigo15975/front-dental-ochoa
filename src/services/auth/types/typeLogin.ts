// Inputs de login, sus datos
export interface LoginAuth extends InitialValuesFormLogin {}

interface InitialValuesFormLogin {
  identifier: string;
  contraseña: string;
}

export interface PropsCookies {
  auth: string;
}

export interface PropsLogout {
  message: string;
}

export interface PropsVerifyAccessToken {
  success: boolean;
  statusCode: number;
  message: string;
}
