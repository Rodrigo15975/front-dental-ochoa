import storeUpdateProfile from "@/store/storeUpdateProfile/storeUpdateProfile";
import { AnimatePresence } from "framer-motion";
import { Modal } from "../../Common";
import FormProfileUpdateDashboard from "./ProfileUpdateDashboard";
import ButtonProfileInformationClose from "./ButtonProfileInformationClose";

const AppFormUpdateProfileDashboard = () => {
  const { openUpdateProfile } = storeUpdateProfile();
  return (
    <>
      <AnimatePresence>
        {openUpdateProfile && (
          <Modal
            type="CENTER"
            animate="LEFT"
            className="relative flex border container p-8 items-center justify-center flex-[0_1_50rem] border-border_primary/80 rounded-md shadow-md bg-white min-h-[80vh]"
          >
            <ButtonProfileInformationClose />
            <div className="max-h-[80vh] overflow-y-auto">
              <FormProfileUpdateDashboard />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppFormUpdateProfileDashboard;
