import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateRoutes } from "./constant-definitions";
import Administator from "./screens/Administrator";
import NotFound from "./screens/NotFount";
import Private from "./screens/Private";
const Application = () => {
  return (
    <BrowserRouter>
      <Private />
    </BrowserRouter>
  );
};

export default Application;
