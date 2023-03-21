import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./constants-definitions/Routes";
import GuardRoute from "./guards";
import Business from "./screens/Business";
import ForgotPassword from "./screens/ForgotPassword";

import Private from "./screens/Private";
import RegisterBusiness from "./screens/RegisterBusiness/Index";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Verification from "./screens/Verification";

const Application = () => {
  const [status, setStatus] = useState();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.SIGNIN} element={<Signin />} />
        <Route path={PublicRoutes.SIGNUP} element={<Signup />} />
        <Route path={PublicRoutes.FORGOT_PASSWORD_ADMIN} element={<ForgotPassword />} />
        <Route path={PrivateRoutes.VERIFICATION} element={<Verification />} />
        <Route path={PrivateRoutes.BUSINESS} element={<Business />} />
        <Route
          path={PrivateRoutes.REGISTER_BUSINESS}
          element={<RegisterBusiness />}
        />
        <Route element={<GuardRoute privateValidation={true} />}>
          <Route path="/*" element={<Private />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
