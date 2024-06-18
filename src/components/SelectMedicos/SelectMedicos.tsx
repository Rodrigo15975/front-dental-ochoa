import { useGetMedicosActivos } from "@/services/medicos/queries";

export const SelectMedicos = () => {
  const medicosActives = useGetMedicosActivos();

  return (
    <>
      <option value="">Seleccione al médico</option>
      {medicosActives?.map((medicos) => (
        <option
          key={`option-medicos-${medicos._id}`}
          className="font-robotoSlab_600 text-text_primary"
          value={medicos._id}
        >
          {medicos.name.charAt(0).toUpperCase() +
            medicos.name.slice(1).toLowerCase()}{" "}
          {medicos.apellidos.charAt(0).toUpperCase() +
            medicos.apellidos.slice(1).toLowerCase()}{" "}
        </option>
      ))}
    </>
  );
};
