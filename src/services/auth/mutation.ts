import { storeAuth } from '@/store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginAuth, logout, verifyTokenAccess } from './api'
import { LoginAuth } from './types/typeLogin'
import { PathsProtected, PathsPublic } from '@/router/enum/routerPaths'
import { netWorkError } from '@/utils/axiosError'

export const useLoginAuth = () => {
  const { setIsAuth } = storeAuth()
  const navigate = useNavigate()
  const [, setCookie] = useCookies(['auth'])
  return useMutation({
    mutationFn: (data: LoginAuth) => loginAuth(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR)
          toast.warning('Sucedio algo inesperado', {
            toastId: 'error-network',
            position: 'top-center',
          })
        }
        toast.warn(error.response?.data.message, {
          position: 'top-center',
          toastId: 'auth-error',
          autoClose: 4000,
        })
      }
      console.log(error)
    },
    onSuccess(data) {
      if (data.auth) {
        setCookie('auth', data.auth)
        setIsAuth(true)
        navigate(PathsProtected.DASHBOARD)
        return
      }
      console.log('sucess')
    },
  })
}

export const useVerifyTokenAcess = () => {
  const { setIsAuth } = storeAuth()
  const navigate = useNavigate()
  // const [, , clearCookies] = useCookies(["auth"]);

  return useMutation({
    mutationFn: async () => await verifyTokenAccess(),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR)
          toast.warning('Sucedio algo inesperado', {
            position: 'top-center',
            toastId: 'auth-error',
            autoClose: 4000,
          })
        }
      }
    },
    onSuccess(data) {
      if (data.success) {
        setIsAuth(true)
        navigate(PathsProtected.DASHBOARD, { replace: true })
        return
      }
      setIsAuth(false)
      navigate(PathsPublic.INICIO, { replace: true })
      // clearCookies("auth");
      return
    },
  })
}
export const useLogout = () => {
  const queryClient = useQueryClient()
  const [, , clearCookies] = useCookies(['auth'])
  const { setIsAuth } = storeAuth()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: () => logout(),

    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR)
          toast.warning('Sucedio algo inesperado', {
            position: 'top-center',
            toastId: 'auth-error',
            autoClose: 4000,
          })
        }
      }
    },
    onSuccess(data) {
      setIsAuth(false)
      clearCookies('auth')
      navigate(PathsPublic.INICIO, { replace: true })
      toast.success(data.message)
      queryClient.clear()
      return
    },
  })
}
