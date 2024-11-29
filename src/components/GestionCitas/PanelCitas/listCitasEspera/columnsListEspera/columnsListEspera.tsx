import { Button } from '@/components/Common'
import {
  capitalizeApellido,
  capitalizeNombre,
} from '@/components/Common/CapitalicesComponent/CapitalicesComponen'
import {
  useUpdateStatusCitaConfirmada,
  useUpdateStatusCitaListaSala,
} from '@/services/citas/mutation'
import { useGetAllCitas } from '@/services/citas/queries'
import { GetAllCitas, STATUSCITA } from '@/services/citas/types/typesCitas'
import storeGestionCitas from '@/store/storeGestionCitas/storeGestionCitas'
import dayjs from 'dayjs'

import { ColumnProps } from 'primereact/column'
import { toast } from 'react-toastify'

const ColumnsListEspera = () => {
  const { data } = useGetAllCitas()
  const appointInSala = data?.filter(
    (appointments) => appointments.estado.estado === STATUSCITA.EN_SALA
  )
  const { mutate, isPending: isPendingChangeCitaListaSala } =
    useUpdateStatusCitaListaSala()
  const { setOpenModalListEspera } = storeGestionCitas()

  const { mutate: mutateCitaConfirmada, isPending: isPendingCitaConfirmada } =
    useUpdateStatusCitaConfirmada(setOpenModalListEspera)

  // poner la hora en vez de la orden
  const OrdenHora = (data: GetAllCitas) => {
    const startTime = dayjs(data?.start).format('hh:mm A')
    const endTime = dayjs(data?.end).format('hh:mm A')
    return ` ${startTime} - ${endTime}`
  }

  const changeSala = (id: string) => {
    if (appointInSala?.length === 1)
      return toast.warning('El paciente está en sala ', { toastId: 'in sala' })
    mutate({ idDocStado: id })
  }

  const changeCalendarioCita = (id: string) =>
    mutateCitaConfirmada({ idDocStado: id })

  const isLoading = isPendingChangeCitaListaSala || isPendingCitaConfirmada

  const acciones = (data: GetAllCitas) => {
    return (
      <div className="flex items-center gap-3">
        <Button
          type="button"
          className={`bg-rose-500/80 p-2 ${
            isLoading && 'cursor-none bg-gray-600'
          } hover:bg-rose-500/50 transition h-[2.5rem] rounded-md shadow-md font-robotoSlab_600`}
          disabled={isLoading}
          onClick={() => changeSala(data._id)}
        >
          Cambiar a sala
        </Button>
        <Button
          type="button"
          disabled={isLoading}
          onClick={() => changeCalendarioCita(data._id)}
          className={`flex items-center ${
            isLoading && 'cursor-none bg-gray-600'
          } font-robotoSlab_600 p-1 hover:bg-bg_three/40 rounded-md shadow-md justify-center bg-bg_three/80 h-[2.5rem] w-full`}
        >
          Volver al calendario
        </Button>
      </div>
    )
  }
  const fecha = (data: GetAllCitas) => {
    const startDate = dayjs(data?.start).format('DD/MM/YYYY')

    return <>{startDate}</>
  }

  const columns: ColumnProps[] = [
    {
      field: '',
      header: 'Hora',
      body: (data: GetAllCitas) => OrdenHora(data),
    },
    {
      field: '',
      header: 'Fecha',
      body: (data: GetAllCitas) => fecha(data),
    },
    {
      field: 'paciente.name',
      header: 'Paciente',
      body: (data: GetAllCitas) => capitalizeNombre(data.paciente.name),
    },
    {
      field: 'paciente.apellidos',
      header: 'Apellido',
      body: (data: GetAllCitas) => capitalizeApellido(data.paciente.apellidos),
    },
    {
      field: 'observacion',
      header: 'Observacion/Comentarios',
    },
    {
      field: 'medico.name',
      header: 'Medico',
      body: (data: GetAllCitas) => capitalizeNombre(data.medico.name),
    },
    {
      field: 'medico.apellidos',
      header: 'Apellido',
      body: (data: GetAllCitas) => capitalizeApellido(data.medico.apellidos),
    },
    {
      field: '',
      header: 'Acciones',
      body: (data: GetAllCitas) => acciones(data),
    },
  ]
  return {
    columns,
  }
}

export default ColumnsListEspera
