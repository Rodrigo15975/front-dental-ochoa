import { Button } from '@/components/Common'
import { useUpdateStatusCitaAtendida } from '@/services/citas/mutation'
import { GetAllCitas } from '@/services/citas/types/typesCitas'

import { ColumnProps } from 'primereact/column'

const ColumnsListSala = () => {
  const { mutate, isPending } = useUpdateStatusCitaAtendida()

  const changeStatus = (id: string) => mutate({ idDocStado: id })

  const acciones = (data: GetAllCitas) => {
    return (
      <div>
        <Button
          type="button"
          className={`bg-bg_three/80 ${
            isPending && 'bg-gray-400  cursor-none'
          }  w-full hover:bg-bg_three/30 transition h-[2.5rem] rounded-md shadow-md font-robotoSlab_600`}
          disabled={isPending}
          onClick={() => changeStatus(data._id)}
        >
          Atendido
        </Button>
      </div>
    )
  }

  const columns: ColumnProps[] = [
    {
      field: 'paciente.name',
      header: 'Paciente',
      // sortable: true,
      // filter: true,
    },
    {
      field: 'paciente.apellidos',
      header: 'Apellido',
      // sortable: true,
      // filter: true,
    },
    {
      field: 'observacion',
      header: 'Observacion/Comentarios',
      // sortable: true,
      // filter: true,
    },
    {
      field: 'medico.name',
      header: 'Medico',
    },
    {
      field: 'medico.apellidos',
      header: 'Apellido',
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

export default ColumnsListSala
