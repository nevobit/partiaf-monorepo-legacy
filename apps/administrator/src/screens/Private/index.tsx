import Layout from "@/components/Layout";
import { PrivateRoutes } from "@/constant-definitions";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Administator from "../Administrator";

const Private = () => {
  return (
    <Layout>
      <Routes>
        <Route path={PrivateRoutes.ADMINISTRATOR} element={<Administator />} />
      </Routes>
    </Layout>
  );
};

export default Private;
