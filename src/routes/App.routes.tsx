import { Route, Routes } from "react-router-dom";

import Home from "../screen/Home/Home";
import ListSeries from "../screen/ListSeries";
import GenerateSeries from "../screen/GenerateSeries";
import RegisterExercises from "../screen/RegisterExercises";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/generate-series"
        element={<GenerateSeries />}
      />
      <Route
        path="/list-series"
        element={<ListSeries />}
      />
      <Route
        path="/register-exercises"
        element={<RegisterExercises />}
      />
    </Routes>
  );
}