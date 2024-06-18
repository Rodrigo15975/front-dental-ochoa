export interface Nota {
  nota: string;
  _id?: string;
  message?: string;
}

// Trae los datos sin el idPaciente
export interface NotaPaciente extends Omit<Nota, "idPaciente"> {}
