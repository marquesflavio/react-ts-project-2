import { IoIosNotifications } from "react-icons/io"

export const Header = () => {
  return (
    <div className="flex justify-between">
        <div>
            <h1>Agenda de hoje</h1>
            <p>Terça-feira, 03 de fevereiro de 2026</p>
        </div>
        <div className="flex items-center gap-2 p-2">
            <input type="text" placeholder="Buscar agendamento" />
            <button>Novo agendamento</button>
            <IoIosNotifications />
        </div>
    </div>
  )
}
