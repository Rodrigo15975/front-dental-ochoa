import { m } from 'framer-motion'
import { ProgressSpinner } from 'primereact/progressspinner'

const LoadingStatic = () => {
  return (
    <div className="px-8 flex items-center  justify-center">
      <m.div className="flex bg-default/50 px-4 overflow-hidden justify-center items-center">
        <ProgressSpinner style={{ width: 50, height: 50 }} />
      </m.div>
    </div>
  )
}

export default LoadingStatic
