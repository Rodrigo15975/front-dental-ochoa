import Panel from '@/components/Common/Panel/Panel'
import PanelCitas from './PanelCitas'
import ListHeaderCita from './listCitasEspera/HeaderListCita'
import ModalListaMedicos from './ListMedicos/ModalListaMedicos'
import ModalConfigurationHours from './horario/configurationHours/ModalConfigurationHours'
import ModalListAsistenciaMedicos from './ListAsistenciaMedicos/ModalListAsistenciaMedicos'
import ModalListaEspera from './listCitasEspera/ModalListaEspera'
import ModalListSala from './listSala/ModalListSala'

const AppPanelCitas = () => {
  return (
    <>
      <div className="flex flex-col ">
        <Panel
          className="min-h-[0vh] mt-4"
          headerChildren={<ListHeaderCita />}
          panelChildren={<PanelCitas />}
        />
      </div>
      <ModalConfigurationHours />
      <ModalListaMedicos />
      <ModalListAsistenciaMedicos />
      <ModalListaEspera />
      <ModalListSala />
    </>
  )
}

export default AppPanelCitas
