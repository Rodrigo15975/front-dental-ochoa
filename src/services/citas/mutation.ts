import { PathsPublic } from '@/router/enum/routerPaths'
import storeGestionCitas from '@/store/storeGestionCitas/storeGestionCitas'
import { netWorkError } from '@/utils/axiosError'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  createCita,
  deleteCita,
  updateChangeDateCita,
  updateCita,
  updateStatusCitaAtendida,
  updateStatusCitaCancelar,
  updateStatusCitaConfirmada,
  updateStatusCitaListaEspera,
  updateStatusCitaListaSala,
} from './api'
import {
  CreateCita,
  DeleteCita,
  UpdateChangeDateCita,
  UpdateCita,
  UpdateStatusCitaAtendida,
  UpdateStatusCitaCancelada,
  UpdateStatusCitaConfirmada,
  UpdateStatusCitaInSala,
  UpdateStatusCitaListaEspera,
} from './types/typesCitas'

export const useCreateCita = (closeAppointment: () => void) => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: CreateCita) => createCita(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })

        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['citas'],
      })
      toast.success(data.message, {
        toastId: 'create-horario',
      })
      closeAppointment()
    },
  })
}

export const useDeleteCita = (closeAppointment: () => void) => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: ({ idCita, idPaciente }: DeleteCita) =>
      deleteCita(idCita, idPaciente),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })

        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['citas'],
      })
      toast.success(data.message, {
        toastId: 'delete-cita',
      })
      closeAppointment()
    },
    onMutate() {
      console.log('mutate-delete-cita-form')
    },
  })
}

export const useUpdateCita = (closeForm: () => void) => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: UpdateCita) => updateCita(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })

        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['citas'],
      })
      toast.success(data.message, {
        toastId: 'create-horario',
      })
      closeForm()
    },
    onMutate() {
      console.log('mutate-update-cita-form')
    },
  })
}

export const useUpdateChangeDateCita = () => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: UpdateChangeDateCita) => updateChangeDateCita(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['citas'],
      })
      toast.success(data.message, {
        toastId: 'update-change-date',
      })
    },
  })
}

export const useUpdateStatusCitaConfirmada = (closeMenu: () => void) => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: UpdateStatusCitaConfirmada) =>
      updateStatusCitaConfirmada(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['citas'],
      })
      toast.success(data.message, {
        toastId: 'create-horario',
      })
      closeMenu && closeMenu()
    },
  })
}

export const useUpdateStatusCitaListaEspera = (closeMenu: () => void) => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: UpdateStatusCitaListaEspera) =>
      updateStatusCitaListaEspera(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['citas'],
      })
      toast.success(data.message, {
        toastId: 'update-status',
      })
      closeMenu()
    },
  })
}

export const useUpdateStatusCitaListaSala = () => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()

  const { setOpenModalListEspera } = storeGestionCitas()

  return useMutation({
    mutationFn: (data: UpdateStatusCitaInSala) =>
      updateStatusCitaListaSala(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['citas'],
      })
      toast.success(data.message, {
        toastId: 'update-status',
      })
      setOpenModalListEspera()
    },
  })
}

export const useUpdateStatusCitaAtendida = () => {
  const clientQuery = useQueryClient()
  const { setOpenModalListSala } = storeGestionCitas()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: UpdateStatusCitaAtendida) =>
      updateStatusCitaAtendida(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['citas'],
      })
      toast.success(data.message, {
        toastId: 'update-status',
      })
      setOpenModalListSala()
    },
  })
}

export const useUpdateStatusCitaCancelar = (closeMenu: () => void) => {
  const clientQuery = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: UpdateStatusCitaCancelada) =>
      updateStatusCitaCancelar(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true })
        toast.warning('Sucedio algo inesperado')
      }
    },
    async onSuccess(data) {
      await clientQuery.invalidateQueries({
        queryKey: ['citas'],
      })
      toast.success(data.message, {
        toastId: 'update-status',
      })
      closeMenu()
    },
  })
}
