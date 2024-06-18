export interface GetAllEtiquetas {
  _id: string;
  etiqueta: string;
  bgColor: string;
}

export interface InitialTags {
  tags: GetAllEtiquetas[];
}

export interface CreateEtiquetas extends InitialTags {
  idPaciente?: string;
}

export interface Message {
  message: string;
}
