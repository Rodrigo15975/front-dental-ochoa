import { PathsPublic } from '@/router/enum/routerPaths'
import storeGestionPaciente from '@/store/storeGestionPacientes/storeGestionPacientes'
import { netWorkError } from '@/utils/axiosError'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  createPacienteMayor,
  createPacienteMenor,
  updatePaciente,
  verifyMayorPaciente,
} from './api'
import {
  CreatePaciente,
  CreatePacienteMenor,
  DeletePaciente,
  PartialUpdatePaciente,
} from './types/typesPaciente'

export const useCreatePacienteMayor = () => {
  const navigate = useNavigate()
  const { setOpenFormGestionPaciente } = storeGestionPaciente()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreatePaciente) => createPacienteMayor(data),
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
      setOpenFormGestionPaciente()
    },
  })
}
export const useUpdatePaciente = (id: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: PartialUpdatePaciente) => updatePaciente(data, id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn(error.response?.data.message, {
          toastId: 'error-update',
          autoClose: 3000,
        })
      }
      console.log({ error })
    },

    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['pacientes', id],
      })
      toast.success(data.message, {
        position: 'top-center',
        autoClose: 3000,
        toastId: 'success-update',
      })
    },
  })
}

export const useDeletePaciente = (deletePaciente: () => void) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: DeletePaciente) => verifyMayorPaciente(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR)
        toast.warn(error.response?.data.message, {
          toastId: 'error-delete',
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
        toastId: 'success-delete',
      })
      deletePaciente()
    },
  })
}

export const useCreatePacienteMenor = () => {
  const navigate = useNavigate()
  const { setOpenFormGestionPaciente } = storeGestionPaciente()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreatePacienteMenor) => createPacienteMenor(data),
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
      setOpenFormGestionPaciente()
    },
  })
}
