import { Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import Vehicle from "./vehicles/Vehicle";
import Login from "./login/Login";
import Agreement from "./login/Agreement";
import Cert from "./login/Cert";
import AccountSearch from "./login/AccountSearch";
import PasswordInit from "./login/PasswordInit";
import T from "./login/T";
import PhoneCert from "./login/PhoneCert";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/vehicles" element={<Vehicle />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/agreement" element={<Agreement />} />
      <Route path="/login/cert" element={<Cert />} />
      <Route path="/login/account-search" element={<AccountSearch />} />
      <Route path="/login/password-init" element={<PasswordInit />} />
      <Route path="/login/t" element={<T />} />
      <Route path="/login/phonecert" element={<PhoneCert />} />
    </Routes>
  );
}

export default Router;
