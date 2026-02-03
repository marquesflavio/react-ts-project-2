import { Outlet } from "react-router"
import { Header } from "../../shared/components/ui/Header/Header"
import { Sidebar } from "../../shared/components/ui/Sidebar/Sidebar"

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex text-foreground">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 bg-muted/30">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
