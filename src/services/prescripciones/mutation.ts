import { PathsPublic } from '@/router/enum/routerPaths'
import { netWorkError } from '@/utils/axiosError'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createPrescripciones } from './api'
import { CreatePrescripciones } from './types/typesPrescripciones'

export const useCreatePrescripciones = (id: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreatePrescripciones) => createPrescripciones(data, id),
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
        autoClose: 3000,
        toastId: 'success-create',
      })
    },
  })
}
