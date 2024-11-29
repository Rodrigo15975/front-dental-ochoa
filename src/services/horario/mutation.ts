import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createHorario } from './api'
import { CreateHorario } from './types/typesHorario'
import { useNavigate } from 'react-router-dom'
import { netWorkError } from '@/utils/axiosError'
import { PathsPublic } from '@/router/enum/routerPaths'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import storeGestionCitas from '@/store/storeGestionCitas/storeGestionCitas'

export const useCreateHorario = (id: string) => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()
  const { setOpenConfiguration } = storeGestionCitas()
  return useMutation({
    mutationFn: (data: CreateHorario) => createHorario(data, id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
        toast.warning('Sucedio algo inesperado')
      }
    },

    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['horario'],
      })
      toast.success(data.message, {
        toastId: 'create-horario',
      })
      setOpenConfiguration()
    },
  })
}
