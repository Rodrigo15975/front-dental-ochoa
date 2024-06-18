import AppListPanelHorarios from "./PanelListaHorarios/AppListaPanelHorarios";

const AppPanelGestionHorarios = () => {
  return (
    <div className="flex flex-col min-h-[87vh] justify-end">
      <article className="px-[2rem] gap-4 flex min-h-[80vh] justify-evenly">
        <section className="border-border_three/60 border rounded-3xl flex-[0_1_30rem] shadow-sm">
          <AppListPanelHorarios />
        </section>
        <section className="border-border_three/60 border rounded-3xl flex-[0_1_55.9375rem] shadow-sm">
          {/* Aca va el calendario de horarios */}
        </section>
      </article>
    </div>
  );
};

export default AppPanelGestionHorarios;
