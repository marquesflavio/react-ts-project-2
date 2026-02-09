import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { appointmentsMock } from "@/features/appointments/mocks/appointments.mock"

export const Appointments = () => {
  return (
    <Table>
      <TableCaption>Lista de agendamentos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">Horário</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Serviço</TableHead>
          <TableHead className="text-right">Duração</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointmentsMock.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell className="font-medium">{appointment.startTime}</TableCell>
            <TableCell>{appointment.client.name}</TableCell>
            <TableCell>{appointment.service.name}</TableCell>
            <TableCell className="text-right">{appointment.durationMinutes}</TableCell>
            <TableCell className="text-right">{appointment.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          
        </TableRow>
      </TableFooter>
    </Table>
  )
}
