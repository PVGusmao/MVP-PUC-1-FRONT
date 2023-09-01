export default function FormSeries() {
  return (
    <div className="bg-black flex flex-col">
      <input placeholder="Dia da série, A, B, C, D ou E" className="w-[250px] m-[10px] p-[10px]" />

      <input placeholder="Nome do exercício" className="w-[250px] m-[10px] p-[10px]"/>

      <input placeholder="Musculatura" className="w-[250px] m-[10px] p-[10px]"/>

      <input placeholder="Número de séries" className="w-[250px] m-[10px] p-[10px]"/>

      <input placeholder="Número de repetições por série" className="w-[250px] m-[10px] p-[10px]"/>
    </div>
  )
}
