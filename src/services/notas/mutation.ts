import { PathsPublic } from '@/router/enum/routerPaths'
import storeNotasEtiquetasAlergias from '@/store/storeNotasEtiquetasAlergias/storeNotasEtiquetasAlergias'
import { netWorkError } from '@/utils/axiosError'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateNota } from './api'
import { Nota } from './types/typesNotas'

export const useUpdateNota = (id: string) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { setOpenNotas } = storeNotasEtiquetasAlergias()

  return useMutation({
    mutationFn: (data: Nota) => updateNota(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR, { replace: true })
          toast.warn('Sucedio algo inesperado', {
            toastId: 'error-nota',
          })
        }
      }
      console.log(error)
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['pacientes', id],
      })
      toast.success(data.message, {
        position: 'top-center',
        toastId: 'create-nota',
      })
      console.log('success-nota')
      setOpenNotas()
    },
  })
}
