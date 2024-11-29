import { PathsPublic } from '@/router/enum/routerPaths'
import { netWorkError } from '@/utils/axiosError'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createEtiquetas, deleteEtiquetas } from './api'
import { CreateEtiquetas } from './types/typesEtiquetas'
import storeNotasEtiquetasAlergias from '@/store/storeNotasEtiquetasAlergias/storeNotasEtiquetasAlergias'

export const useCreateEtiquetas = (id: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { setOpenEtiquetas } = storeNotasEtiquetasAlergias()

  return useMutation({
    mutationFn: (data: CreateEtiquetas) => createEtiquetas(data),
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
        queryKey: ['pacientes', id],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 2000,
        toastId: 'success-create',
      })
      setOpenEtiquetas()
    },
  })
}

export const useDeleteEtiquetas = (idPaciente: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deleteEtiquetas(id, idPaciente),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn(error.response?.data.message, {
          toastId: 'error-delete',
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
        autoClose: 1000,
        toastId: 'success-delete',
      })
    },
  })
}
