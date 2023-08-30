import { Route, Routes } from "react-router-dom";

import Login from "../screen/Login/Login";
import Register from "../screen/Register/Register";

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