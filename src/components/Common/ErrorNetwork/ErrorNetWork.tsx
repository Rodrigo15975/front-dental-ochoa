import { PathsPublic } from "@/router/enum/routerPaths";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorNetWork = () => {
  const navigate = useNavigate();
  const navigateNetWorkError = () =>
    navigate(PathsPublic.NETWORKERROR, { replace: true });

  useEffect(() => {
    navigateNetWorkError();
  }, []);
  return (
    <>
      <p></p>
    </>
  );
};

export default ErrorNetWork;
