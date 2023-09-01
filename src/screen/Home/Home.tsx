import Welcome from "../../components/Home/Welcome";
import GenerateSerie from "../../components/Home/GenerateSerie";
import RegisteredSeries from "../../components/Home/RegisteredSeries";

export default function Home() {
  return (
    <div className="">
      <Welcome />

      <RegisteredSeries />

      <GenerateSerie />
    </div>
  )
}