import { useEffect } from "react";
import CardSeries from "../../components/ListSeries/CardSeries";
import api from "../../service/api";

export default function ListSeries() {
  function getAllSeries() {
    api.get("/exercise/list")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllSeries();
  }, [])

  return (
    <div className="flex flex-col h-[90vh]">
      <div className="flex flex-col items-center mt-[50px]">
        <p className="w-[500px] text-center text-[20px]">Aqui você pode ver as suas séries, navegar por elas e caso queira, baixar em pdf para uma visualização enquanto treina.</p>
      </div>

      <CardSeries />

    </div>
  )
}