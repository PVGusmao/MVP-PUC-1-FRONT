import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Welcome from "../../components/Welcome";
import GenerateSerie from "../../components/GenerateSerie";
import RegisteredSeries from "../../components/RegisteredSeries";

export default function Home() {
  return (
    <div className="">
      <Welcome />

      <RegisteredSeries />

      <GenerateSerie />
    </div>
  )
}