import { Avatar } from "antd";
import { FaRegUser } from "react-icons/fa";

import { CiEdit } from "react-icons/ci";

import { useGetId, useGetProfile } from "@/services/profile/queries";
import storeOptionProfile from "@/store/storeUpdateProfile/storeOptionProfile";
import { capitalize } from "lodash";
import { Button, ErrorNetWork } from "..";
import LoadingStatic from "../Loading/LoadingStatic";

const Profile = () => {
  const { setOpenOption } = storeOptionProfile();
  const userId = useGetId();
  const { data, isLoading, isError } = useGetProfile(
    userId.data?.id ?? "",
    userId.data?.role
  );

  const capitalizeName = capitalize(data?.name);
  if (isError) return <ErrorNetWork />;
  return (
    <>
      <div className="flex items-center gap-2 justify-center">
        <div className="flex gap-2 items-center">
          {isLoading ? (
            <LoadingStatic />
          ) : (
            <>
              <p className="text-[1rem] text-text_primary/80 font-robotoSlab_500">
                {capitalizeName}
              </p>
              <Avatar
                style={{
                  background: "white",
                }}
                alt="profile"
                src={data?.url_perfil}
                size="large"
                icon={<FaRegUser className="text-text_eight  rounded-full" />}
              />
            </>
          )}
        </div>
        <Button
          className="profile bg-bg_six transition w-[2.5rem] items-center h-[2.5rem] flex justify-center rounded-full shadow-md"
          onClick={setOpenOption}
          type="button"
        >
          <CiEdit className="text-white" />
        </Button>
      </div>
    </>
  );
};

export default Profile;
