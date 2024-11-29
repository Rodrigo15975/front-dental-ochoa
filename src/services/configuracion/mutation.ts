import { useMutation, useQueryClient } from '@tanstack/react-query'

import { toast } from 'react-toastify'
import { createEmpresa, deleteEmpresa, updateEmpresa } from './api'
import { PartialEmpresa } from './types/typeEmpresa'
import { storeConfiguracion, storeGetDataRuc } from '@/store'
import { netWorkError } from '@/utils/axiosError'
import { useNavigate } from 'react-router-dom'
import { PathsPublic } from '@/router/enum/routerPaths'
import { AxiosError } from 'axios'

export const useCreateEmpresa = () => {
  const queryClient = useQueryClient()
  const { clearDataRuc } = storeGetDataRuc()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: PartialEmpresa) => createEmpresa(data),
    onMutate() {
      console.log('mutate')
    },
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
      }
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({ queryKey: ['empresa'] })
      toast.success(data.message)
      clearDataRuc()
    },
  })
}

export const useUpdateEmpresa = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { setOpenFormEditConfiguracion } = storeConfiguracion()

  return useMutation({
    mutationFn: (data: PartialEmpresa) => updateEmpresa(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
      }
    },
    async onSuccess(data) {
      toast.success(data.message)
      setOpenFormEditConfiguracion()
      await queryClient.invalidateQueries({
        queryKey: ['empresa'],
      })
    },
  })
}

export const useDeleteEmpresa = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: PartialEmpresa) => deleteEmpresa(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
      }
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['empresa'],
      })
      toast.success(data.message)
    },
  })
}
