type Props = {
  fecha: string;
  hora: string;
};

// esto ira dentro del paciente
const registroColumn = ({ fecha, hora }: Props) => {
  return (
    <>
      <p>
        {fecha} - {hora}
      </p>
    </>
  );
};

export default registroColumn;
