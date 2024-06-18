import { FC } from "react";
import Archivos from "./Archivos";
import HistoryArchive from "./historyArchive/HistoryArchive";

const AppArchivos: FC = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <Archivos />
        <div className="w-full">
          <HistoryArchive />
        </div>
      </div>
    </>
  );
};

export default AppArchivos;
