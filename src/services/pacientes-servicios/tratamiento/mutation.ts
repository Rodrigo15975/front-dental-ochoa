import { InitialServicesExistente } from '@/components/GestionPacientes/PanelListPacientes/ModalAddServicioExistentePaciente/FormServicesExistente/initialValuesExistente'
import { InitialEditAction } from '@/components/PacientesData/HistorialDelPaciente/TimeLineHistoryPaciente/HistoryServicioosPaciente/initialEditAction'
import { PathsPublic } from '@/router/enum/routerPaths'
import { netWorkError } from '@/utils/axiosError'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTratamientoServicio, updateTratamientoServicio } from './api'
import { storeGestionServicios } from '@/store'

export const useCreateTratamientoServicio = (idPaciente: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { setOpenAddExistinServicio } = storeGestionServicios()
  return useMutation({
    mutationFn: (data: InitialServicesExistente) =>
      createTratamientoServicio(data, idPaciente),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn(error.response?.data.message, {
          toastId: 'error-create',
          autoClose: 3000,
        })
      }
      console.log({ error })
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['pacientes'],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 3000,
        toastId: 'success-create',
      })
      setOpenAddExistinServicio()
    },
  })
}

export const useUpdateEstadoTratamientoServicio = (
  idPaciente: string,
  closeEdit: () => void
) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: InitialEditAction) => updateTratamientoServicio(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn(error.response?.data.message, {
          toastId: 'error-create',
          autoClose: 3000,
        })
      }
      console.log(error)
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['pacientes', idPaciente],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 3000,
        toastId: 'success-create',
      })
      closeEdit()
    },
  })
}
