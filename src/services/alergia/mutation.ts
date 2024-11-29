import { PathsPublic } from '@/router/enum/routerPaths'
import storeNotasEtiquetasAlergias from '@/store/storeNotasEtiquetasAlergias/storeNotasEtiquetasAlergias'
import { netWorkError } from '@/utils/axiosError'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Alergia } from './types/typeAlergias'
import { updateAlergia } from './api'

export const useUpdateAlergia = (id: string) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { setOpenAlergias } = storeNotasEtiquetasAlergias()

  return useMutation({
    mutationFn: (data: Alergia) => updateAlergia(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR, { replace: true })
          toast.warn('Sucedio algo inesperado', {
            toastId: 'error-alergia',
          })
        }
      }
      console.log(error)
    },
    async onSuccess(data) {
      // ver aca que si va el paciente por id
      // no creo que vaya el alergias
      await queryClient.invalidateQueries({
        queryKey: ['pacientes', id],
      })
      setOpenAlergias()
      toast.success(data.message, {
        position: 'top-center',
        toastId: 'update-alergia',
      })
    },
  })
}
