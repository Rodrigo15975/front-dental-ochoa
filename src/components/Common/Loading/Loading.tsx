import { m } from "framer-motion";
import { ProgressSpinner } from "primereact/progressspinner";

const Loading = () => {
  return (
    <>
      <m.div className="flex fixed inset-0 bg-default/50 justify-center items-center">
        <ProgressSpinner style={{ width: 90, height: 90 }} />
      </m.div>
    </>
  );
};

export default Loading;
