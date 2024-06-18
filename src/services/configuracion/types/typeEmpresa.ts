import { PropsInitialInputsConfiguracion } from "@/components/Configuracion/PanelConfiguracion/DetallesConfiguracion/FormularioConfiguracion/inputsConfiguracion";

interface Empresa extends Partial<PropsInitialInputsConfiguracion> {
  _id: string;
  message: string;
}

export type PartialEmpresa = Partial<Empresa>;
