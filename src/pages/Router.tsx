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
import Test from "./login/Test";
import SignUpPhone from "./login/SignUpPhone";
import SignUpInput from "./login/SignUpInput";

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
      <Route path="/login/signup/phone" element={<SignUpPhone />} />
      <Route path="/login/signup/input" element={<SignUpInput />} />
      <Route path="/:token" element={<Main />} />
      <Route path="/logout" element={<Main />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default Router;
