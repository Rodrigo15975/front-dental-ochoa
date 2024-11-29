import { useGetAllEstadosCitas } from '@/services/estado-cita/queries'
import { useGetServicios } from '@/services/servicios'

export const SelectEstadoCita = () => {
  const { data } = useGetAllEstadosCitas()
  const reservado = data?.filter((stado) => stado.estado === 'reservado')
  console.log({ estado: data })

  /**
   * 
   * @ERROR_CUANDO_SE_LE_HACE_CAMBIO
   */
  return (
    <>
      <option value="">Seleccione el estado</option>
      {reservado?.map((estado) => (
        <option
          className=" font-robotoSlab_600"
          key={`estado-cita-${estado._id}`}
          value={estado._id}
        >
          {estado.estado.charAt(0).toUpperCase() +
            estado.estado.slice(1).toLowerCase()}
        </option>
      ))}
    </>
  )
}

// creo que setiene que quitar esto creo
export const SelectServicioCita = () => {
  const { data } = useGetServicios()

  return (
    <>
      <option value="">Seleccione el servicio</option>
      {data?.slice(1).map((servicio) => (
        <option
          className=" font-robotoSlab_600"
          key={`estado-cita-${servicio._id}`}
          value={servicio._id}
        >
          {servicio.nombre.charAt(0).toUpperCase() +
            servicio.nombre.slice(1).toLowerCase()}
        </option>
      ))}
    </>
  )
}

// export const SelectEstadoEditCit = () => {
//   const { data } = useGetAllEstadosCitas();

//   return (
//     <>
//       {data?.map((estado) => (
//         <option
//           className="text-text_primary font-robotoSlab_600"
//           key={`estado-cita-${estado._id}`}
//           value={estado._id}
//         >
//           {estado.estado.charAt(0).toUpperCase() +
//             estado.estado.slice(1).toLowerCase()}
//         </option>
//       ))}
//     </>
//   );
// };
