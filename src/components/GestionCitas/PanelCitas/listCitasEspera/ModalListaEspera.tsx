import { Modal, Table, Typography } from "@/components/Common";
import storeGestionCitas from "@/store/storeGestionCitas/storeGestionCitas";
import columnsListEspera from "./columnsListEspera/columnsListEspera";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { BiArrowBack, BiListMinus } from "react-icons/bi";
import { Button } from "primereact/button";
import { AnimatePresence } from "framer-motion";
import { useGetAllCitas } from "@/services/citas/queries";
import { STATUSCITA } from "@/services/citas/types/typesCitas";

const ModalListaEspera = () => {
  const { columns } = columnsListEspera();
  const { data, isLoading } = useGetAllCitas();
  const { openModalListEspera, setOpenModalListEspera } = storeGestionCitas();
  const [search, setSearch] = useState<string>("");

  const header = (
    <>
      <div className="flex flex-col gap-2 align-items-center justify-between">
        <div>
          <Typography
            label="Lista de espera pacientes"
            className="text-2xl text-text_six flex items-center gap-2"
          >
            <BiListMinus />
          </Typography>
        </div>
        <div className="flex justify-between mt-2 items-center gap-2">
          <InputText
            type="search"
            className="rounded-lg shadow-md"
            placeholder="Busqueda..."
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              setSearch(target.value.toLocaleLowerCase());
            }}
          />
          <Button
            className="text-text_primary shadow-md h-[3rem] flex-[0_1_8rem] flex items-center justify-center p2 bg-bg_three/50 text-xl"
            onClick={setOpenModalListEspera}
            type="button"
          >
            <BiArrowBack />
          </Button>
        </div>
      </div>
    </>
  );
  const appointInEspera = data?.filter(
    (appointments) => appointments.estado.estado === STATUSCITA.EN_ESPERA
  );

  useEffect(() => {
    openModalListEspera
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModalListEspera]);

  return (
    <>
      <AnimatePresence>
        {openModalListEspera && (
          <Modal
            className="min-h-[80vh] p-8 flex-[0_1_80rem]  bg-default rounded-xl shadow-md border border-border_four/50"
            type="CENTER"
            animate="OPACITY"
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <Table
                columnsConfig={columns}
                data={appointInEspera ?? []}
                headerClassName="bg-list-espera text-default"
                globalFilter={search}
                header={header}
                row={8}
                loading={isLoading}
              />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalListaEspera;
