import { Button, Modal, Table, Typography } from "@/components/Common";
import { useGetAllCitas } from "@/services/citas/queries";
import { STATUSCITA } from "@/services/citas/types/typesCitas";
import storeGestionCitas from "@/store/storeGestionCitas/storeGestionCitas";
import { AnimatePresence } from "framer-motion";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { BiArrowBack, BiListMinus } from "react-icons/bi";
import columnsListSala from "./columns/columnsSala";

const ModalListSala = () => {
  const { openModalListSala, setOpenModalListSala } = storeGestionCitas();
  const { data, isLoading } = useGetAllCitas();
  const [search, setSearch] = useState<string>("");

  const { columns } = columnsListSala();
  const header = (
    <>
      <div className="flex flex-col gap-2 align-items-center justify-between">
        <div>
          <Typography
            label="Lista de sala"
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
            onClick={setOpenModalListSala}
            type="button"
          >
            <BiArrowBack />
          </Button>
        </div>
      </div>
    </>
  );

  const appointInSala = data?.filter(
    (appointments) => appointments.estado.estado === STATUSCITA.EN_SALA
  );
  useEffect(() => {
    openModalListSala
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModalListSala]);

  return (
    <>
      <AnimatePresence>
        {openModalListSala && (
          <Modal
            className="min-h-[80vh] p-8 flex-[0_1_80rem]  bg-default rounded-xl shadow-md border border-border_four/50"
            type="CENTER"
            animate="OPACITY"
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <Table
                columnsConfig={columns}
                data={appointInSala ?? []}
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

export default ModalListSala;
