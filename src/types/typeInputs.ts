import { JSX, ReactNode } from "react";

interface PropsInputDefaultName {
  name: string;
  as?: string;
  textPlaceHolder: string;
  type?: string;
  label?: string;
  icon?: string;
  Component?: React.JSX.Element;
  componentField?: React.JSX.Element & ReactNode;
  disabled?: boolean;
}

export class InputDefaultNames implements PropsInputDefaultName {
  as?: string | undefined = "";
  name: string = "";
  type?: string | undefined = "";
  textPlaceHolder: string = "";
  icon?: string | undefined;
  label?: string | undefined;
  Component?: JSX.Element | undefined;
  componentField?: JSX.Element & ReactNode;
  disabled?: boolean | undefined;
}
