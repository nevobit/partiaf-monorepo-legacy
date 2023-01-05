import { PrivateRoutes, PublicRoutes } from "@/constants-definitions/Routes";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
  <Navigate replace to={PrivateRoutes.PRIVATE} />
);

const GuardRoute = ({ privateValidation }: Props) => {
  //  const userState = useSelector((store: AppStore) => store.user);
  const user = {
    name: "user Partiaf",
  };

  return user.name ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.SIGNIN} />
  );
};

export default GuardRoute;
