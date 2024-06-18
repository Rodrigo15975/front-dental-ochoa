import { m } from "framer-motion";

import { varianContainer } from "@/components/Common";
import { useGetServicios } from "@/services/servicios";
import { Pagination } from "antd";
import { useState } from "react";
import TemplateCardServices from "./TemplatesServices/AppTemplateCardServices";
import { storeUsuarioAndMedico } from "@/store/storeSearchs/usuarios/storeUsuariosAndMedic";

const CarServices = () => {
  const { data = [] } = useGetServicios();
  const { searchByServices } = storeUsuarioAndMedico();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4; // Define cuántas cards quieres mostrar por página

  // Calcular el índice del primer y último elemento de la página actual
  const indexOfLastCard = currentPage * cardsPerPage;

  // falta añadir busqueda por dniy nombre
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // Obtener la porción paginada de datos

  // Aplicar el filtro a todos los datos
  const filteredData = data.filter((item) => {
    return (
      item.nombre.includes(searchByServices) ||
      item.costo.includes(searchByServices)
    );
  });

  // Obtener la porción paginada de datos filtrados
  const currentData = filteredData.slice(indexOfFirstCard, indexOfLastCard);

  // Manejar cambio de página
  const handlePageChange = (page: number) => setCurrentPage(page);
  return (
    <>
      <m.article
        initial="hidden"
        animate="show"
        variants={varianContainer}
        className="flex gap-4 justify-center flex-wrap"
      >
        {currentData.map((item) => (
          <TemplateCardServices key={`list-services-${item._id}`} data={item} />
        ))}
        <div className="w-full justify-center flex mt-8">
          <Pagination
            defaultCurrent={1}
            total={data.length} // Total de items
            pageSize={cardsPerPage} // Items por página
            onChange={handlePageChange} // Manejar cambio de página
          />
        </div>
      </m.article>
    </>
  );
};

export default CarServices;
