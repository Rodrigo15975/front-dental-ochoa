export type FunctionalitConfiguracionUpload = {
  setConfigurationUploadLogo: () => void;
};

export interface StoreConfigurationUpload
  extends FunctionalitConfiguracionUpload {
  configurationUploadLogo: boolean;
}
