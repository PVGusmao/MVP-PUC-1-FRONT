import { useEffect, useState } from "react";
import CardSeries from "../../components/ListSeries/CardSeries";
import api from "../../service/api";
import { useAuth } from "../../context/Auth.context";

export interface ISerie {
  day_serie: string;
  identify: number;
  muscle_group: string;
  name: string;
  series: number;
  series_repeats: number;
  user_id: number;
  video_exercise: null;
}

export default function ListSeries() {
  const { user } = useAuth();
  
  const [serie, setSerie] = useState([] as ISerie[]);
  const [arrayIdentify, setArrayIdentify] = useState([] as number[]);

  function getAllSeries() {
    api.get("/exercise/list")
      .then((response) => {
        setSerie(response?.data?.data)
        howMutchSeries(response?.data?.data)
        // console.log(response?.data?.data)
      })
      .catch((error) => console.log(error))
  }

  function howMutchSeries(listSeries: ISerie[]) {
    const seriesIdentifyList = [1]
    let identifyChanges = 1
    
    for (let i = 0; i < listSeries.length; i += 1) {
      if (identifyChanges !== listSeries[i].identify) {
        seriesIdentifyList.push(listSeries[i].identify)
        identifyChanges = listSeries[i].identify
      }
    }

    setArrayIdentify(seriesIdentifyList);
  }


  useEffect(() => {
    getAllSeries();
  }, [])

  return (
    <div className="flex flex-col h-full min-h-[90vh] items-center">
      <div className="flex flex-col items-center mt-[50px]">
        <p className="w-[500px] text-center text-[20px]">Aqui você pode ver as suas séries, navegar por elas e caso queira, baixar em pdf para uma visualização enquanto treina.</p>
      </div>

      <div className="flex-col ">
        {
          arrayIdentify?.map((element, index) => (
            <CardSeries
              key={index}
              serie={serie}
              element={element}
              user={user}
            />
          ))
        }
      </div>

    </div>
  )
}