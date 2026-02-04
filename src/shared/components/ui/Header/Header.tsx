import { IoIosNotifications, IoMdAdd, IoMdSearch } from "react-icons/io";
import { DividerX } from "../Divider/DividerX";
import { Button } from "../Button/Button";
import { ThemeToggle } from "../../../../features/theme/components/ThemeToggle";

export const Header = () => {
  return (
      <div>
        <div className="flex justify-between h-16 px-4 py-1">
          <div>
            <h1 className="font-bold text-2xl">Agenda de Hoje</h1>
            <p className="text-sm text-muted-foreground">Terça-feira, 03 de fevereiro de 2026</p>
          </div>
          <div className="flex items-center gap-2 p-2">
            <div className="flex border border-gray-400 items-center rounded-md p-1">
              <IoMdSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Buscar agendamento..."
                className="w-60 h-8 border-none outline-none ring-0 focus:ring-0 focus:outline-none"
              />
            </div>
            <Button icon={<IoMdAdd className="mr-1" size={20} />}>
              Novo agendamento
            </Button>
            <IoIosNotifications size={20} className="hover:cursor-pointer" />
            <ThemeToggle />
          </div>
        </div>
        <DividerX />
      </div>
  );
};
