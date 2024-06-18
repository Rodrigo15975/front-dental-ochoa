import { FINAL, INICIO } from "./horarios";

export const Inicio = () => {
  return (
    <>
      {INICIO.map((time, index) => (
        <option key={index} value={time.value}>
          {time.name}
        </option>
      ))}
    </>
  );
};

export const Final = () => {
  return (
    <>
      {FINAL.map((time, index) => (
        <option key={index} value={time.value}>
          {time.name}
        </option>
      ))}
    </>
  );
};
