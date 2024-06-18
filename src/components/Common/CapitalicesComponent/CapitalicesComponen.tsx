import { capitalize } from "@/utils";

export const capitalizeNombre = (name: string) => {
  const capitalizename = capitalize(name);
  return (
    <>
      <p className="font-robotoSlab_600">{capitalizename}</p>
    </>
  );
};
export const capitalizeApellido = (apellido: string) => {
  const capitalizeApe = capitalize(apellido);
  return (
    <>
      <p className="font-robotoSlab_600">{capitalizeApe}</p>
    </>
  );
};
