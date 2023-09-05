import { useState } from "react";
import { IUser } from "../../interfaces/global.interfaces"
import { ISerie } from "../../screen/ListSeries"

import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";

type Props = {
  element: number,
  serie: ISerie[],
  user: IUser,
}

export default function CardSeries({element, serie, user}: Props) {
  const [showSerie, setShowSerie] = useState(false);

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

    return (allDaySerie)
  }

  function slideShowSerie() {
    const newSerieArray = serie.filter((item) => item.identify === element);
    setShowSerie(!showSerie)

    return newSerieArray;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <button onClick={slideShowSerie} className="z-1 flex items-center justify-between rounded-xl p-[10px] my-[10px] h-[100px] bg-red-700 w-[700px]">
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

      <p>asdasdasdads</p>
    </div>
  )
}