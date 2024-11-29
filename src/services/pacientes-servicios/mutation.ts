import { PathsPublic } from '@/router/enum/routerPaths'
import { storeGestionServicios } from '@/store'
import { netWorkError } from '@/utils/axiosError'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createServicioPaciente, getFindByDniPaciente } from './api'
import { CreateServicioPaciente } from './types/typesPacienteServicios'

export const useCreateServicioPaciente = (
  mayorEdad: boolean,
  idPaciente: string
) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { setOpenAddNewServicios } = storeGestionServicios()

  return useMutation({
    mutationFn: (data: CreateServicioPaciente) =>
      createServicioPaciente(mayorEdad, data, idPaciente),
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
      setOpenAddNewServicios()
    },
  })
}

export const useGetFindByDniPaciente = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (dni: string) => getFindByDniPaciente(dni),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn(error.response?.data.message, {
          toastId: 'error-dni-data',
          autoClose: 3000,
        })
      }
      console.log({ error })
    },

    async onSuccess(data) {
      if (data.name) {
        toast.success('Datos obtenidos', {
          position: 'top-center',
          autoClose: 1000,
          toastId: 'success-dni-data',
        })
      }
    },
  })
}
