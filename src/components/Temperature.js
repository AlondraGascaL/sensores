import { Typography } from "@material-ui/core";
// Importar modulos y estilos
import { CircularProgressbar, buildStyles } from "sensores";
import { useData } from "../context/DataContext";
import Base from "./Base";
import DataChart from "./DataChart";

// Animacion
import ChangingProgressProvider from "./ChangingProgressProvider";

const Temperature = () => {
  const { temperature, temperatureHistory } = useData();
  return (
    <>
      <Base data={temperature} title="Temperatura">
        <Typography>dentro de temperature</Typography>
      </Base>
      <DataChart data={temperatureHistory} from={1000} />
      <ChangingProgressProvider values={temperature}>
        {(value) => (
          <CircularProgressbar
            value={value}
            text={`${value}°C`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "butt",
              trailColor: "linear-gradient(to right bottom, #430089, #82ffa1)"
            })}
          />
        )}
      </ChangingProgressProvider>
    </>
  );

};


export default Temperature;
