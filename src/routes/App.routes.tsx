import { Route, Routes } from "react-router-dom";

import Home from "../screen/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  );
}