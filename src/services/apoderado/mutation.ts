import { PathsPublic } from '@/router/enum/routerPaths'
import { netWorkError } from '@/utils/axiosError'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getDataApoderado, updateDataApoderado } from './api'
import { ApoderadoEdit } from '@/components/GestionPacientes/AddPacientes/FormMenor/inputsPacienteMenor'

export const useGetDataApoderado = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (dni: string) => getDataApoderado(dni),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR, { replace: true })
          toast.warn('Sucedio algo inesperado', {
            toastId: 'error-data-dni-apoderado',
          })
        }
      }
      console.log(error)
    },

    onSuccess() {
      console.log('success-data-dni-apoderado')
      toast.success('Datos obtenido')
    },
  })
}

export const useUpdateDataApoderado = (
  idPaciente: string,
  closeEdit: () => void
) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: ApoderadoEdit) => updateDataApoderado(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR, { replace: true })
          toast.warn('Sucedio algo inesperado', {
            toastId: 'error-data-update-apoderado',
          })
        }
      }
      console.log(error)
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['pacientes', idPaciente],
      })
      console.log('success-data-update-apoderado')
      toast.success(data.message)
      closeEdit()
    },
  })
}
