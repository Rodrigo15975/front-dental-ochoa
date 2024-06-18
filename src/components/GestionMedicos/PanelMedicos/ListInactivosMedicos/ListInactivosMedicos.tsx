import { ButtonIcon, Modal } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useActiveMedico } from "@/services/medicos/mutation";
import { useGetAllMedicos } from "@/services/medicos/queries";
import { storeGestionMedicos } from "@/store";
import { Avatar, List } from "antd";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { FaUserDoctor, FaWhatsapp } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
export default function ListInactivosMedicos() {
  const { data, isLoading } = useGetAllMedicos();

  const { mutate, isPending } = useActiveMedico();

  const { openListInactiveMedicos, setOpenListInactiveMedicos } =
    storeGestionMedicos();
  const inactivosData = data?.filter((medicos) => medicos.activo !== true);

  const changeActivo = (id: string) => mutate(id);

  useEffect(() => {
    if (openListInactiveMedicos) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openListInactiveMedicos]);

  return (
    <>
      <AnimatePresence>
        {openListInactiveMedicos && (
          <Modal
            onClick={setOpenListInactiveMedicos}
            className="bg-default border border-border_four/50 relative shadow-md flex-[0_1_70rem] min-h-[70vh] p-8 rounded-3xl"
            type="CENTER"
            animate="TOP"
          >
            <ButtonIcon
              className="absolute text-default -right-4 bg-bg_six p-4 hover:scale-105 rounded-full shadow-md -top-4"
              onClick={setOpenListInactiveMedicos}
            >
              <IoArrowBack className="text-xl" />
            </ButtonIcon>
            <p className="text-2xl  gap-2 shadow-md border rounded-md p-4 mb-8 bg-bg_three/50 n flex items-center font-robotoSlab_600">
              Lista de Medicos Inactivos
              <FaUserDoctor />
            </p>
            <div className="max-h-[70vh] overflow-y-auto">
              {isLoading ? (
                <LoadingStatic />
              ) : isPending ? (
                <div className="flex items-center justify-center">
                  <LoadingStatic />
                </div>
              ) : (
                <List
                  dataSource={inactivosData}
                  renderItem={(item) => (
                    <List.Item
                      className="hover:shadow-md transition-all"
                      key={item.email}
                    >
                      <List.Item.Meta
                        className="font-robotoSlab text-text_primary "
                        avatar={
                          <Avatar
                            className="bg-default border shadow"
                            icon={<BiUser className="text-text_eight" />}
                            src={item.url_perfil}
                          />
                        }
                        title={
                          <div className="flex items-center flex-[0_1_50rem] justify-between">
                            <div>
                              <a
                                href={`https://wa.me/+51${item.celular}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-robotoSlab_500  flex gap-2 items-center text-xl hover:text-text_eight"
                              >
                                {item.name}
                                <FaWhatsapp className="text-text_six bg-bg_three/50 rounded-full" />
                              </a>
                            </div>

                            <CommonTooltip
                              title="Activar médico"
                              position="topRight"
                              className="flex pr-6"
                            >
                              <div className="flex gap-2 w-full">
                                <label className="relative  inline-flex cursor-pointer items-center">
                                  <input
                                    onClick={() => changeActivo(item._id)}
                                    id="switch"
                                    type="checkbox"
                                    className="peer sr-only"
                                  />
                                  <div className="peer h-6 w-11 rounded-full border bg-bg_seven/50 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-bg_three/50 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                </label>
                              </div>
                            </CommonTooltip>
                          </div>
                        }
                        description={item.email}
                      />
                    </List.Item>
                  )}
                />
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
