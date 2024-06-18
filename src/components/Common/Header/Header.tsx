import { FC, ReactNode } from "react";
import { Title } from "..";
import Profile from "../Profile/Profile";

type PropsHeader = {
  title: string;
  children?: ReactNode;
  iconTitle?: ReactNode;
};

const Header: FC<PropsHeader> = ({ title, iconTitle }) => {
  return (
    <div className="shadow-md border-b border-border_three">
      <div className="justify-between text-2xl font-robotoSlab_700 flex items-center p-4 h-[4rem]">
        <Title
          label={title}
          className="flex title-common items-center gap-4"
          type="h1"
        >
          {iconTitle}
        </Title>
        <Profile />
      </div>
    </div>
  );
};

export default Header;
