export type Appointment = {
  id?: string;
  estado?: string;
  start: string | Date;
  end: string | Date;
  bg?: string;
};

// export type EventItem = {
//   start: Date;
//   end: Date;
//   data?: { appointment?: Appointment };
//   isDraggable?: boolean;
// };
