import MainCard from "./Component/MainCard";
import { data } from "./data";

export default function App() {
  let dataShow = data.map((e, ind) => (
    <MainCard
      key={ind}
      image={e.image}
      name={e.name}
      title={e.title}
      web={e.web}
      about={e.about}
      inter={e.interstes}
    />
  ));
  return (
    <>
      <h1>Owners :</h1>
      <div className="main-app-card container">{dataShow}</div>
    </>
  );
}
