import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { createUsuario, deleteUsuario, updateUsuario } from './api'
import { CreateUsuario, UpdateUsuarios } from './types/typesUsuarios'
import { AxiosError } from 'axios'
import { netWorkError } from '@/utils/axiosError'
import { PathsPublic } from '@/router/enum/routerPaths'
import { toast } from 'react-toastify'
import { storeGestionUsuarios } from '@/store'

export const useCreateUsuario = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { setOpenFormGestionUsuarios } = storeGestionUsuarios()

  return useMutation({
    mutationFn: (data: CreateUsuario) => createUsuario(data),
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
        queryKey: ['usuarios'],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 3000,
        toastId: 'success-create',
      })
      setOpenFormGestionUsuarios()
    },
  })
}

export const useUpdateUsuario = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateUsuarios) => updateUsuario(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn('Ocurrio algo inesperado', {
          toastId: 'error-update',
          autoClose: 3000,
        })
      }
      console.log(error)
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['usuarios'],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 3000,
        toastId: 'success-update',
      })
    },
  })
}

export const useDeleteUsuario = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteUsuario(id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn('Ocurrio algo inesperado', {
          toastId: 'error-delete',
          autoClose: 3000,
        })
      }
      console.log(error)
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['usuarios'],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 3000,
        toastId: 'success-delete',
      })
    },
  })
}
