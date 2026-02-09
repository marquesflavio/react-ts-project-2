import { Route, Routes } from "react-router";
import { Appointments } from "../../../pages/Appointments";
import { MainLayout } from "../MainLayout";
import { Hours } from "../../../pages/Hours";
import { Services } from "../../../pages/Services";
import { Reports } from "../../../pages/Reports";

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Appointments />} />
        <Route path="hours" element={<Hours />} />
        <Route path="services" element={<Services />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};
