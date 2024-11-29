import { Form, Formik } from 'formik'

import { LoadingForm } from '@/components/Common'
import { LoginAuth, useLoginAuth, useVerifyTokenAcess } from '@/services/auth'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import HomeFormIcon from './HomeFormIcon'
import HomeInputs from './HomeFormInputs'
import HomeFromButton from './HomeFromButton'
import { initialValuesFormLogin } from './labeInputs/labelInputs'
import { validationValuesFormLogin } from './validation/validationHomeForm'

const HomeForm = () => {
  const [cookies] = useCookies(['auth'])
  const authLogin = useLoginAuth()
  const { mutate, isPending } = useVerifyTokenAcess()
  const handledSubmit = (data: LoginAuth) => authLogin.mutate(data)

  useEffect(() => {
    if (cookies.auth) mutate()
  }, [cookies.auth, mutate])

  if (isPending) return <LoadingForm />
  if (authLogin.isPending) return <LoadingForm />

  return (
    <article className="flex bg-default flex-col px-[2.5rem] justify-center flex-[0_1_27.25rem] min-h-[80vh] border-2 hover:shadow-none transition border-border_three/40 rounded-2xl shadow-md">
      <HomeFormIcon />
      <Formik
        initialValues={initialValuesFormLogin}
        onSubmit={handledSubmit}
        validationSchema={validationValuesFormLogin}
      >
        {({ getFieldProps }) => (
          <Form className="animate-fade animate-once animate-delay-200 animate-ease-linear min-h-[40vh] flex flex-col">
            <HomeInputs fieldProps={getFieldProps} />
            <HomeFromButton />
          </Form>
        )}
      </Formik>
    </article>
  )
}
export default HomeForm
