import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./constants-definitions/Routes";
import GuardRoute from "./guards";
import Business from "./screens/Business";

import Private from "./screens/Private";
import RegisterBusiness from "./screens/RegisterBusiness/Index";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Verification from "./screens/Verification";

const Application = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.SIGNIN} element={<Signin />} />
        <Route path={PublicRoutes.SIGNUP} element={<Signup />} />
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
