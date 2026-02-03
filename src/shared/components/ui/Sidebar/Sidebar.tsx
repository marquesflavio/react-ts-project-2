import { FaCalendarAlt, FaCalendarCheck } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { TbClockHour4Filled } from "react-icons/tb";

export const Sidebar = () => {
  return (
    <aside className="min-w-60 max-w-80 flex flex-col p-4">
      <div className="flex items-center gap-2">
        <div className="border p-2 rounded-md">
          <FaCalendarAlt size={25} />
        </div>
        <div>
          <h2 className="font-bold">AgendaPro</h2>
          <span className="font-light text-sm">Sistema de agendamento</span>
        </div>
      </div>

      <div>
        <ul>
          <li className="flex gap-2 items-center">
            <FaCalendarCheck />
            Agenda
          </li>
          <li className="flex gap-2 items-center">
            <TbClockHour4Filled />
            Horários
          </li>
          <li className="flex gap-2 items-center">
            <FaListCheck />
            Serviços
          </li>
          <li className="flex gap-2 items-center">
            <GoGraph />
            Relatórios
          </li>
        </ul>
      </div>
    </aside>
  );
};
