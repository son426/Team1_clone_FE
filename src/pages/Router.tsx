import { Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import Vehicle from "./vehicles/Vehicle";

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/vehicles' element={<Vehicle />} />
    </Routes>
  );
}

export default Router;
