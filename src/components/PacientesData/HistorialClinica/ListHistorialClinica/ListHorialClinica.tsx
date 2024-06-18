import { Button, Typography } from "@/components/Common";
import { useEffect, useState } from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import ModalTableHistorialClinica from "./table/ModalTableHistorialClinica";

const ListHorialClinica = () => {
  const [openHistory, setOpenHistory] = useState<boolean>(false);
  const open = () => setOpenHistory(!openHistory);

  useEffect(() => {
    if (openHistory) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openHistory]);

  return (
    <>
      <div className="flex items-center gap-2 shadow-md border justify-between text-text_six font-robotoSlab_500  text-2xl p-4  w-full bg-default">
        <Typography className="flex items-center gap-2 " label="Historial">
          <BsBookmarkPlusFill />
        </Typography>
        <Button
          onClick={open}
          type="button"
          className="flex text-xl bg-bg_nine p-2 rounded-md shadow-md hover:bg-bg_nine/50 transition hover:shadow-none items-center gap-2"
          label="Ver historial"
        >
          <FaBookReader />
        </Button>
      </div>
      <ModalTableHistorialClinica open={openHistory} setOpen={open} />
    </>
  );
};

export default ListHorialClinica;
