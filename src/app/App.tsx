import { BrowserRouter } from "react-router";
import { Router } from "./layouts/routes/Router";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
