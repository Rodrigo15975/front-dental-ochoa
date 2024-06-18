import { m } from "framer-motion";
import { ProgressSpinner } from "primereact/progressspinner";

const LoadingStatic = () => {
  return (
    <>
      <m.div className="flex bg-default/50 justify-center items-center">
        <ProgressSpinner style={{ width: 60, height: 60 }} />
      </m.div>
    </>
  );
};

export default LoadingStatic;
