import AppSidebar from "@/components/AppSidebar/AppSidebar";
import { m } from "framer-motion";
import { FC, PropsWithChildren } from "react";

// Configuras a tu gusto
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.1,
        }}
        className="flex"
      >
        <AppSidebar />
        {children}
      </m.main>
    </>
  );
};

export default Layout;
