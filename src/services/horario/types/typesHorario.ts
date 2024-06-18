export interface GetHorario {
  inicio: string;
  final: string;
  _id?: string;
}

export type Message = { message: string };

export interface CreateHorario extends GetHorario {
  message?: string;
}
