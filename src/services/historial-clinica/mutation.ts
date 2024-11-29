import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { createHistorialClinica } from './api'
import { CreateHistorialClinica } from './types/typesHistorialClinica'
import { AxiosError } from 'axios'
import { netWorkError } from '@/utils/axiosError'
import { toast } from 'react-toastify'
import { PathsPublic } from '@/router/enum/routerPaths'

export const useCreateHistorialClinica = (id: string) => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: CreateHistorialClinica) =>
      createHistorialClinica(data, id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['pacientes', id],
      })
      toast.success(data.message, {
        toastId: 'create-horario',
      })
    },
  })
}
