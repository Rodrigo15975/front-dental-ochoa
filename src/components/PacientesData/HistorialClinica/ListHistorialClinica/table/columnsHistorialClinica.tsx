import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { CreateHistorialClinica } from "@/services/historial-clinica/types/typesHistorialClinica";
import { ColumnProps } from "primereact/column";
import { BiCheckCircle } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";

const columnsHistorialClinica = () => {
  const fecha = (data: CreateHistorialClinica) => (
    <>
      <p>
        {data.fecha} {data.hora}
      </p>
    </>
  );

  const isTrue = (isTrue: boolean) => (
    <>
      <CommonTooltip title={`${isTrue ? "Tiene" : "No"}`}>
        <div
          className={`flex items-center justify-center w-full ${
            isTrue ? "bg-bg_three/80" : "border"
          } rounded-md shadow  h-[3rem] w-[3rem]`}
        >
          {isTrue ? (
            <BiCheckCircle className="text-2xl" />
          ) : (
            <IoCloseCircleOutline className="text-2xl" />
          )}
        </div>
      </CommonTooltip>
    </>
  );

  const columns: ColumnProps[] = [
    {
      field: "enfermedad",
      header: "Enfermedad",
    },
    {
      field: "sintomas",
      header: "Sintomas",
    },

    {
      field: "tiempo",
      header: "Tiempo",
    },
    {
      field: "alergias",
      header: "Alergia",
      body: (data: CreateHistorialClinica) => isTrue(data.alergias),
    },
    {
      field: "asma",
      header: "Asma",
      body: (data: CreateHistorialClinica) => isTrue(data.asma),
    },

    {
      field: "enfermedad_sanguinea",
      header: "Enfermedad Sanguinea",
      body: (data: CreateHistorialClinica) => isTrue(data.enfermedad_sanguinea),
    },
    {
      field: "gastritis",
      header: "Gastritis",

      body: (data: CreateHistorialClinica) => isTrue(data.gastritis),
    },
    {
      field: "hepatitis",
      header: "Hepatitis",

      body: (data: CreateHistorialClinica) => isTrue(data.hepatitis),
    },
    {
      field: "medicina_permanente",
      header: "Medicina permanente",
      body: (data: CreateHistorialClinica) => isTrue(data.medicina_permanente),
    },
    {
      field: "presion_alta",
      header: "Presion_alta",
      body: (data: CreateHistorialClinica) => isTrue(data.presion_alta),
    },
    {
      field: "presion_baja",
      header: "Presion_baja",
      body: (data: CreateHistorialClinica) => isTrue(data.presion_baja),
    },
    {
      field: "problemas_cardiacos",
      header: "Poblemas Cardiacos",
      body: (data: CreateHistorialClinica) => isTrue(data.problemas_cardiacos),
    },

    {
      field: "sangrado_encias",
      header: "Sangrado de encias",
      body: (data: CreateHistorialClinica) => isTrue(data.sangrado_encias),
    },
    {
      field: "ulcera",
      header: "Ulcera",
      body: (data: CreateHistorialClinica) => isTrue(data.ulcera),
    },

    {
      field: "fecha",
      header: "Registro",
      sortable: true,
      filter: true,
      body: (data: CreateHistorialClinica) => fecha(data),
    },
  ];
  return {
    columns,
  };
};

export default columnsHistorialClinica;

// alergias
// :
// false
// asma
// :
// false
// diabetes
// :
// false
// enfermedad
// :
// "kill2"
// enfermedad_sanguinea
// :
// false
// fecha
// :
// "2024-05-28"
// gastritis
// :
// true
// hepatitis
// :
// true
// hora
// :
// "00:15:42"
// medicina_permanente
// :
// false
// presion_alta
// :
// true
// presion_baja
// :
// true
// problemas_cardiacos
// :
// false
// sangrado_encias
// :
// false
// sintomas
// :
// "65665"
// tiempo
// :
// "45654"
// ulcera
// :
// false
