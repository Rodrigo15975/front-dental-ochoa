import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CreateServicio, PartialUpdateServices } from './types/typesServicios'
import { createServicio, deleteServicio, updateServicio } from './api'
import { AxiosError } from 'axios'
import { netWorkError } from '@/utils/axiosError'
import { useNavigate } from 'react-router-dom'
import { PathsPublic } from '@/router/enum/routerPaths'
import { toast } from 'react-toastify'
import { storeGestionServicios } from '@/store'

export const useCreateServicio = () => {
  const navigate = useNavigate()
  const { setOpenFormGestionServicios } = storeGestionServicios()

  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (servicios: CreateServicio) => createServicio(servicios),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR)
          toast.warn('Ocurrio algo inesperado', { toastId: 'error' })
          return
        }
      }
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['servicios'],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 3000,
        toastId: 'createService',
      })
      setOpenFormGestionServicios()
    },
  })
}

export const useUpdateServicio = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (servicios: PartialUpdateServices) => updateServicio(servicios),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn('Ocurrio algo inesperado', {
          toastId: 'error',
        })
      }
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['servicios'],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 3000,
        toastId: 'updateService',
      })
    },
  })
}

export const useDeleteServicio = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deleteServicio(id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn('Ocurrio algo inesperado', {
          toastId: 'error',
        })
      }
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['servicios'],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 3000,
        toastId: 'deleteService',
      })
    },
  })
}
