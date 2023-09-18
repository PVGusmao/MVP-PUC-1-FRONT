import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/global.interfaces"
import { ISerie } from "../../screen/ListSeries"

import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";
import { BsFillTrashFill } from "react-icons/bs";

type Props = {
  element: number,
  serie: ISerie[],
  user: IUser,
}

export default function CardSeries({element, serie, user}: Props) {
  const [showSerie, setShowSerie] = useState(false);
  const [serieByIdentify, setSerieByIdentify] = useState([] as ISerie[]);

  function getAllSerie(): string[] {
    const allDaySerie = ["A"]
    let changeDaySerie = "A"

    const newArray = serie.filter((item) => item.identify === element)

    for(let i = 0; i < newArray.length; i++) {
      if (changeDaySerie !== newArray[i].day_serie) {
        allDaySerie.push(newArray[i].day_serie)
        changeDaySerie = newArray[i].day_serie
      }
    }

    return allDaySerie
  }

  function slideShowSerie() {
    const newSerieArray = serie.filter((item) => item.identify === element);
    setShowSerie(!showSerie)

    setSerieByIdentify(newSerieArray);
  }

  function removeExerciseFromSérie() {
    console.log('Removendo')
  }

  useEffect(() => {
    slideShowSerie()
  }, [])

  return (
    <div className="w-full flex-col items-center justify-center">
      <button onClick={slideShowSerie} className="z-1 flex items-center justify-between rounded-xl p-[10px] my-[10px] h-[100px] bg-red-700 w-[900px]">
        <div className="">
          <div className="mb-[5px] flex items-center justify-center bg-[white] w-[25px] rounded-xl">
            <p className="font-bold">{element}</p>
          </div>

          <div className="flex">
            {
              getAllSerie()?.map((element, index) => (
                <p className="text-white bold mx-[2px]" key={index}>{element}</p>
              ))
            }
          </div>

          <p className="text-white font-bold mx-[2px]">{user?.first_name} {user?.last_name}</p>
        </div>

        <div className="flex items-center justify-center rounded-full text-[30px] text-white w-[50px] h-[50px]">
          { showSerie ? <FaCircleChevronUp color="white" /> : <FaCircleChevronDown color="white" />}
        </div>
      </button>

      { showSerie &&
        <div className="border-b border-black">
          <div className="flex font-bold bg-blue-800 text-white border-l border-r border-t border-black">
            <p className="my-[10px] w-[50px] text-center">Day</p>
            <p className="my-[10px] w-[320px] ml-[20px]">Name</p>
            <p className="my-[10px] text-center w-[100px] ml-[20px]">Muscle</p>
            <p className="my-[10px] w-[50px] text-center ml-[20px]">Series</p>
            <p className="my-[10px] text-center w-[100px] ml-[20px]">Repeats</p>
            <p className="my-[10px] text-center w-[100px] ml-[20px]">Remove</p>
          </div>

          {
            serieByIdentify?.map((element, index) => (
              <div key={index} className={`flex font-bold items-center ${element.day_serie === "A" ? "bg-red-100" : element.day_serie === "B" ? "bg-green-100" : "bg-yellow-100"} border-l border-r border-t border-black`}>
                <p className="my-[10px] w-[50px] text-center">{element.day_serie}</p>
                <p className="my-[10px] w-[320px] ml-[20px]">{element.name}</p>
                <p className="my-[10px] text-center w-[100px] ml-[20px]">{element.muscle_group}</p>
                <p className="my-[10px] w-[50px] text-center ml-[20px]">{element.series}</p>
                <p className="my-[10px] text-center w-[100px] ml-[20px]">{element.series_repeats}</p>
                <button onClick={removeExerciseFromSérie} className="my-[10px] flex items-center justify-center w-[100px] ml-[20px]"><BsFillTrashFill color="red" size={20}/></button>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}