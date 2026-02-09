export type AppointmentStatus =
  | 'agendado' 
  | 'confirmado' 
  | 'finalizado' 
  | 'cancelado'

export interface Appointment {
  id: string
  date: string          
  startTime: string     
  durationMinutes: number

  client: {
    id: string
    name: string
  }

  service: {
    id: string
    name: string
  }

  status: AppointmentStatus
}
