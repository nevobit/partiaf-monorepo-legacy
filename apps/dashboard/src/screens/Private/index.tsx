import Layout from "@/components/Layout";
import { PrivateRoutes } from "@/constants-definitions/Routes";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Bookings from "../Bookings";
import Cover from "../Cover";
import CreateCover from "../Cover/createCover";
import Dashboard from "../Dashboard";

import Product from "../Product";
import Settings from "../Settings";
import SettingsBusiness from "../SettingsBusiness";

const Private = () => {
  return (
    <Layout>
      <Routes>
        <Route path={PrivateRoutes.BOOKINGS} element={<Bookings />} />
        <Route path={PrivateRoutes.COVERS} element={<Cover />} />
        <Route path={PrivateRoutes.CREATE_COVER} element={<CreateCover />} />
        <Route path={PrivateRoutes.PRODUCT} element={<Product />} />
        <Route path={PrivateRoutes.SETTINGS} element={<Settings />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route
          path={PrivateRoutes.SETTINGS_BUSINESS}
          element={<SettingsBusiness />}
        />
      </Routes>
    </Layout>
  );
};

export default Private;
