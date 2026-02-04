import { FaCalendarAlt, FaCalendarCheck } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { TbClockHour4Filled } from "react-icons/tb";
import { DividerX } from "../Divider/DividerX";
import { NavLink } from "react-router";

const navItemBase =
  "flex gap-2 items-center p-2 rounded-md transition-colors px-4";

const navItemActive =
  "bg-blue-50 text-blue-600 font-medium";

const navItemInactive =
  "text-gray-700 hover:bg-gray-100";

export const Sidebar = () => {
  return (
    <aside className="min-w-60 max-w-80 flex flex-col shadow-sm shadow-gray-200">
      <div className="flex items-center gap-2 py-2 px-4">
        <div className="border p-2 rounded-md">
          <FaCalendarAlt size={25} />
        </div>
        <div>
          <h2 className="font-bold">AgendaPro</h2>
          <span className="font-light text-sm">Sistema de agendamento</span>
        </div>
      </div>

      <DividerX />
      <div>
        <ul>
          <li>
            <NavLink
              to={"/"}
              end
              className={({ isActive }) =>
                `${navItemBase} ${
                  isActive ? navItemActive : navItemInactive
                }`
              }
            >
              <FaCalendarCheck />
              Agenda
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"hours"}
              className={({ isActive }) =>
                `${navItemBase} ${
                  isActive ? navItemActive : navItemInactive
                }`
              }
            >
              <TbClockHour4Filled />
              Horários
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"services"}
              className={({ isActive }) =>
                `${navItemBase} ${
                  isActive ? navItemActive : navItemInactive
                }`
              }
            >
              <FaListCheck />
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"reports"}
              className={({ isActive }) =>
                `${navItemBase} ${
                  isActive ? navItemActive : navItemInactive
                }`
              }
            >
              <GoGraph />
              Relatórios
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};
