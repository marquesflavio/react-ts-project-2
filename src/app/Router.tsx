import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { MainLayout } from "./layouts/MainLayout";

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
