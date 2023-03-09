import Layout from "@/components/Layout";
import { PrivateRoutes } from "@/constants-definitions/Routes";
import { Route, Routes } from "react-router-dom";
import Bookings from "../Bookings";
import Cover from "../Cover";
import CoversDetails from "../Cover/details";
import Dashboard from "../Dashboard";

import Product from "../Product";
import Settings from "../Settings";
import SettingsBusiness from "../SettingsBusiness";
import Waiters from "../waiters";

const Private = () => {
  return (
    <Layout>
      <Routes>
        <Route path={PrivateRoutes.BOOKINGS} element={<Bookings />} />
        <Route path={PrivateRoutes.COVERS} element={<Cover />} />
        <Route
          path={PrivateRoutes.COVERS_DETAILS}
          element={<CoversDetails />}
        />
        <Route path={PrivateRoutes.PRODUCT} element={<Product />} />
        <Route path={PrivateRoutes.SETTINGS} element={<Settings />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.WAITERS} element={<Waiters />} />
        <Route
          path={PrivateRoutes.SETTINGS_BUSINESS}
          element={<SettingsBusiness />}
        />
      </Routes>
    </Layout>
  );
};

export default Private;
