import { useState } from "react";
import { PropsCardUsuario } from "./types/typesTemplateCardUsuarios";
import { storeUsuarioAndMedico } from "@/store/storeSearchs/usuarios/storeUsuariosAndMedic";
import { m } from "framer-motion";
import { varianContainer } from "@/components/Common";
import TemplateCardUsuarios from "./TemplateCardUsuarios";
import { Pagination } from "antd";

const AppTemplateCardUsuarios = ({ data }: PropsCardUsuario) => {
  const { searchByUsuarios } = storeUsuarioAndMedico();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5; // Define cuántas cards quieres mostrar por página

  // Calcular el índice del primer y último elemento de la página actual
  const indexOfLastCard = currentPage * cardsPerPage;

  // falta añadir busqueda por dniy nombre
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const filteredData = data.filter((item) => {
    return (
      item.name.includes(searchByUsuarios) ||
      item.dni.includes(searchByUsuarios)
    );
  });

  const currentData = filteredData.slice(indexOfFirstCard, indexOfLastCard);
  // Obtener la porción paginada de datos filtrados

  // Manejar cambio de página
  const handlePageChange = (page: number) => setCurrentPage(page);
  return (
    <>
      <m.article
        variants={varianContainer}
        initial="hidden"
        animate="show"
        className="flex justify-center gap-4 pt-4 flex-wrap"
      >
        {currentData.map((usuarios) => (
          // Luego ira el id en vez del index
          <TemplateCardUsuarios
            usuarios={usuarios}
            key={`card-${usuarios._id}-usuarios`}
          />
        ))}
      </m.article>
      <div className="w-full justify-center flex mt-8">
        <Pagination
          defaultCurrent={1}
          total={data.length} // Total de items
          pageSize={cardsPerPage} // Items por página
          onChange={handlePageChange} // Manejar cambio de página
        />
      </div>
    </>
  );
};

export default AppTemplateCardUsuarios;
