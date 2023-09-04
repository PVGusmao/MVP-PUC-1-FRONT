import { useState } from "react"
import api from "../../../service/api";

interface ISteps {
  firstStep: boolean,
  secondStep: boolean,
  thirdStep: boolean,
}

export default function FormSeries() {
  const [showNextStep, setShowNextStep] = useState<ISteps>({
    firstStep: false,
    secondStep: false,
    thirdStep: false,
  });

  const [serie, setSerie] = useState({
    day_serie: '',
    identify: 0,
    num_of_exercises: 0
  });

  const [exercises, setExercises] = useState({})

  function manageAddSerie() {
    if (!showNextStep.firstStep) {
      api.get('/exercise/lastserie')
        .then((res) => serie.identify === 0 && setSerie({...serie, identify: res?.data?.data}))
        .catch((error) => console.log(error))
        .finally(() => setShowNextStep({...showNextStep, firstStep: true}))
    }

    if (serie?.day_serie?.length === 1) {
      setShowNextStep({...showNextStep, secondStep: true})
    }

    if (serie?.num_of_exercises !== 0) {
      setShowNextStep({...showNextStep, thirdStep: true})
    }

    const existingExercises = Object.keys(exercises)

    if (existingExercises.length > 0) {
      const body = {
        identify: serie?.identify,
        day_serie: serie?.day_serie?.toUpperCase(),
        exercises: Object.values(exercises),
      }

      console.log(body)

      api.post('/exercise/add', body)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error.response))
        .finally(() => {
          setShowNextStep({
            firstStep: false,
            secondStep: false,
            thirdStep: false,
          })

          setSerie({...serie,
            day_serie: '',
            num_of_exercises: 0
          })

          setExercises({})
          
          window.location.reload();
        })
      }
  }

  function exercisesInputs() {
    const inputElements = []

    for (let i = 0; i < serie.num_of_exercises; i += 1) {
      inputElements
        .push(
          <div className="" key={i}>
            <input
              className="w-[300px] p-[5px] m-[5px] rounded-lg"
              placeholder={`Nome do ${i + 1}° exercício da série ${serie?.day_serie.toUpperCase()}`}
              type="text"
              name="name"
              onChange={(e) => setExercises({...exercises, [`exercicio${i + 1}`]: {...exercises[`exercicio${i + 1}`], name: e?.target?.value}})}
            />

            <input
              className="w-[150px] p-[5px] m-[5px] rounded-lg"
              placeholder={`Grupo muscular`}
              type="text"
              name="muscle_group"
              onChange={(e) => setExercises({...exercises, [`exercicio${i + 1}`]: {...exercises[`exercicio${i + 1}`], muscle_group: e?.target?.value}})}
            />

            <input
              className="w-[300px] p-[5px] m-[5px] rounded-lg"
              placeholder={`Número de séries do ${i + 1}° exercício`}
              type="text"
              name="series"
              onChange={(e) => setExercises({...exercises, [`exercicio${i + 1}`]: {...exercises[`exercicio${i + 1}`], series: e?.target?.value}})}
            />

            <input
              className="w-[400px] p-[5px] m-[5px] rounded-lg"
              placeholder={`Número de repetições da série do ${i + 1}° exercício`}
              type="text"
              name="series_repeats"
              onChange={(e) => setExercises({...exercises, [`exercicio${i + 1}`]: {...exercises[`exercicio${i + 1}`], series_repeats: e?.target?.value}})}
            />
          </div>
        );     
      }
    
    return (
      inputElements?.map((element) => (
        element
      ))
    )
  }

  return (
    <div className="bg-black flex flex-col items-center h-[100vh]">      
      <div className="mt-[50px]">
        {
          showNextStep?.thirdStep &&
            exercisesInputs()
        }
      </div>

      {
        showNextStep?.secondStep && !showNextStep?.thirdStep &&
        <input
          maxLength={1}
          type="number"
          min={1}
          className="w-[400px] mt-[50px] p-[10px] rounded-lg"
          name=""
          placeholder={`Quantos exercícios tem na sua série ${serie?.day_serie}`}
          value={serie?.num_of_exercises}
          onChange={(e) => setSerie({...serie, num_of_exercises: +e?.target?.value})}
        />
      }

      {
        showNextStep?.firstStep && !showNextStep?.secondStep &&
        <input
          maxLength={1}
          min={1}
          className="w-[400px] mt-[50px] p-[10px] rounded-lg"
          name=""
          placeholder="Série A, B, C, D ou E"
          value={serie?.day_serie?.toUpperCase()}
          onChange={(e) => setSerie({...serie, day_serie: e?.target?.value})}
        />
      }

      <button
        className=" w-[400px] h-[60px] bg-[green] rounded-xl my-[50px] text-white text-[20px] font-bold"
        onClick={manageAddSerie}
      >
        Adicionar Nova Série
      </button>
    </div>
  )
}
0