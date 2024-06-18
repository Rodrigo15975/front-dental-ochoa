import { Modal } from "@/components/Common";
import storeUpdatePhotoProfile from "@/store/storeUpdateProfile/storeUpdatePhotoProfile";
import { AnimatePresence } from "framer-motion";
import Photo from "./Photo";

const ProfilePhoto = () => {
  const { openUpdatePhotoProfile, setOpenUpdatePhotoProfile } =
    storeUpdatePhotoProfile();
  return (
    <>
      <AnimatePresence>
        {openUpdatePhotoProfile && (
          <Modal
            onClick={setOpenUpdatePhotoProfile}
            type="CENTER"
            animate="BOTTOM"
            className="bg-white justify-start  items-start p-4 rounded-3xl hover:border-border_three transition shadow-md border-border_three/50 flex flex-[0_1_30rem] border min-h-[30vh]"
          >
            <Photo />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfilePhoto;
