import storeOptionProfile from "@/store/storeUpdateProfile/storeOptionProfile";
import React, { FC } from "react";
import { Container, Header, Options } from "../Common";
import OptionsDashboard from "./OptionsDashboard";
import AppFormUpdateProfileDashboard from "./updateProfile/AppFormUpdateProfileDashboard";

import ProfilePhoto from "./profile/PhotoProfile/ProfilePhoto";

type PropsDashboardHeader = {
  title: string;
  icon: React.JSX.Element;
};

const DashboardHeader: FC<PropsDashboardHeader> = ({ icon, title }) => {
  // Este es el stado que controla las opciones
  const { openOption, setOpenOption } = storeOptionProfile();

  return (
    <Container>
      <Header iconTitle={icon} title={title} />
      <Options
        typeMode="BOTTOM-RIGHT"
        className="flex-[0_1_20rem] bg-options border border-border_primary/20"
        setState={setOpenOption}
        state={openOption}
      >
        <OptionsDashboard />
      </Options>
      {/* Formulario para actualizar el perfil */}
      <AppFormUpdateProfileDashboard />
      {/* Editar photo perfil */}
      <ProfilePhoto />
    </Container>
  );
};

export default DashboardHeader;
