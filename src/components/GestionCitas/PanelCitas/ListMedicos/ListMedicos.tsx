import { GetAllMedicos } from "@/services/medicos/types/typesMedicos";
import { Avatar, List } from "antd";
import { BiUser } from "react-icons/bi";
import { FaUserDoctor, FaWhatsapp } from "react-icons/fa6";

type Props = {
  data: GetAllMedicos[];
};

const ListMedicos = ({ data }: Props) => {
  const medicosActivos = data?.filter((medicos) => medicos.activo !== false);

  return (
    <>
      <p className="text-2xl  gap-2 shadow-md border rounded-md p-4 mb-8 bg-bg_three/50 flex items-center font-robotoSlab_600">
        Lista de Medicos
        <FaUserDoctor />
      </p>

      <List
        dataSource={medicosActivos}
        renderItem={(item) => (
          <List.Item
            className="hover:shadow-md transition-all"
            key={item.email}
          >
            <List.Item.Meta
              className="font-robotoSlab text-text_primary "
              avatar={<Avatar className="shadow-sm bg-bg_three/10 text-text_secondary" icon={<BiUser />} src={item.url_perfil} />}
              title={
                <a
                  href={`https://wa.me/+51${item.celular}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-robotoSlab_500 flex gap-2 items-center text-xl hover:text-text_eight"
                >
                  {item.name}
                  <FaWhatsapp className="text-text_six bg-bg_three/50 rounded-full" />
                </a>
              }
              description={item.email}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default ListMedicos;
