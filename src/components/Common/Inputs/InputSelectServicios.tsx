import { ErrorMessage, Field } from "formik";
import { ReactNode } from "react";

type Props = {
  fieldProps: (name: string) => {
    onChange: (e: React.ChangeEvent) => void; // Función que maneja el evento onChange del campo
    onBlur: (e: React.FocusEvent) => void; // Función que maneja el evento onBlur del campo
    value: string; // Valor actual del campo
    name: string; // Nombre del campo
  };
  componentField?: React.JSX.Element & ReactNode;
  label?: string; // Texto que se utilizará como etiqueta para el input
  type?: string; // Tipo de input, por ejemplo, "text", "password", etc
  name: string; // Nombre único del input.
  className?: string; // Clase CSS que se puede aplicar al input para estilizarlo
  textPlaceHolder?: string;
  disabled?: boolean;
  labelClassName?: string;
  classNameParentInputs?: string;
  Icon?: string;
  reset?: boolean;
  as?: string;
  AsComPonente?: React.JSX.Element & ReactNode;
  component?: () => ReactNode;
};

const InputSelectServicios = ({
  fieldProps,

  name,
  className,
  textPlaceHolder,
  label,
  labelClassName,

  disabled,

  component,
}: Props) => {
  return (
    <>
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
      <Field
        disabled={disabled}
        autoComplete=""
        className={`${className} outline-none border`}
        {...fieldProps(name)}
        component={component}
        name={name}
        id={name}
        placeholder={textPlaceHolder}
      ></Field>
      <ErrorMessage name={name} component="p" className="text-text_seven" />
    </>
  );
};

export default InputSelectServicios;
