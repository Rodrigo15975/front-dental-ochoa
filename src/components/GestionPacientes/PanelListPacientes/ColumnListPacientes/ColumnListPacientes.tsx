import { columnsData } from "./dataColumns";

const ColumnListPacientes = () => {
  const { columnsPacientes } = columnsData();
  return {
    columnsPacientes,
  };
};

export default ColumnListPacientes;
