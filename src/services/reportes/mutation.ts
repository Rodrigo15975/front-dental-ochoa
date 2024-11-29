import { PathsPublic } from '@/router/enum/routerPaths'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getReportForDate } from './api'
import { DateReport } from './types/typesReportes'

export const useGetReportForDate = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: ({ end, start }: DateReport) => getReportForDate(start, end),
    onError(error) {
      if (error instanceof AxiosError) {
        if (error.code === 'ERR_NETWORK') {
          navigate(PathsPublic.NETWORKERROR)
          toast.error('Ocurrio algo inesperado')
        }
      }
      console.log(error)
    },
    async onSuccess(data) {
      return data.length > 0
        ? toast.success('Reporte obtenido')
        : toast.warning('Ningún dato encontrado')
    },
  })
}
