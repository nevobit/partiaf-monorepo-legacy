import { PrivateRoutes, PublicRoutes } from "@/constants-definitions/Routes";
import { AppStore } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
  <Navigate replace to={PrivateRoutes.PRIVATE} />
);

const GuardRoute = ({ privateValidation }: Props) => {
  const {admin} = useSelector((store: AppStore) => store.admins);

  return admin.email ? (
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
