import type { Appointment } from "../types/appointments.types";

export const appointmentsMock: Appointment[] = [
  {
    id: '1',
    date: '2026-02-10',
    startTime: '09:00',
    durationMinutes: 60,
    client: {
      id: 'c1',
      name: 'João Silva',
    },
    service: {
      id: 's1',
      name: 'Consulta Clínica',
    },
    status: 'confirmado',
  },
  {
    id: '2',
    date: '2026-02-10',
    startTime: '10:30',
    durationMinutes: 30,
    client: {
      id: 'c2',
      name: 'Maria Oliveira',
    },
    service: {
      id: 's2',
      name: 'Retorno',
    },
    status: 'agendado',
  },
  {
    id: '3',
    date: '2026-02-10',
    startTime: '11:30',
    durationMinutes: 45,
    client: {
      id: 'c3',
      name: 'Carlos Santos',
    },
    service: {
      id: 's3',
      name: 'Avaliação',
    },
    status: 'cancelado',
  },
  {
    id: '4',
    date: '2025-01-02',
    startTime: '11:30',
    durationMinutes: 45,
    client: {
      id: 'c4',
      name: 'Maria João',
    },
    service: {
      id: 's4',
      name: 'Atendimento clínico',
    },
    status: 'finalizado',
  },
]
