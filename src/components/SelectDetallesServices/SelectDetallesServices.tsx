import { useGetAllEstados } from "@/services/estado-tratamiento/queries";

const SelectEstadoTratamiento = () => {
  const { data } = useGetAllEstados();

  return (
    <>
      <option value="">Estado del tratamiento</option>
      {data?.map((estados) => (
        <option key={estados._id} value={estados._id}>
          {estados.estado_tratamiento.charAt(0).toUpperCase() +
            estados.estado_tratamiento.slice(1).toLowerCase()}
        </option>
      ))}
    </>
  );
};

export default SelectEstadoTratamiento;
