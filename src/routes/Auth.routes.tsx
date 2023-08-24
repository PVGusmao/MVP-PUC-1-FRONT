import { Route, Routes } from "react-router-dom";

import Login from "../screen/Login";
import Register from "../screen/Register";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
    </Routes>
  );
}