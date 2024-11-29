import storeGetDataRuc from '@/store/storeGetDatRuc/storeGetDataRuc'
import { useMutation } from '@tanstack/react-query'
import { getRucData } from './api'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { PathsPublic } from '@/router/enum/routerPaths'

export const useGetRucData = () => {
  const navigate = useNavigate()
  const { updateDataRuc } = storeGetDataRuc()
  return useMutation({
    mutationFn: (ruc: string) => getRucData(ruc),
    onError(error) {
      if (error instanceof AxiosError) {
        if (error.code === 'ERR_NETWORK') {
          navigate(PathsPublic.NETWORKERROR)
          toast.error('Ocurrio algo inesperado')
        }
      }
      console.log(error)
    },
    onSuccess(data) {
      if (
        data.departamento !== undefined &&
        data.direccion !== undefined &&
        data.provincia !== undefined &&
        data.numeroDocumento !== undefined &&
        data.distrito !== undefined &&
        data.razonSocial !== undefined &&
        data.condicion !== undefined &&
        data.estado !== undefined
      ) {
        updateDataRuc(data)
        toast.success('Datos obtenidos', { position: 'top-center' })
        return
      }
      toast.warn('Sucedio algo inesperado o el RUC está incorrecto', {
        position: 'top-center',
        autoClose: 3000,
      })
    },
  })
}
