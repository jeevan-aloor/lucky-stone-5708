import { Route, Routes } from "react-router-dom";
import Kids from "../Components/Kids";
import Logo from "../Components/Logo";
import Mens from "../Components/Mens";
import Womens from "../Components/Womens";
import Admin from "../Components/admin";
import Recentadd from "../Components/recentadd";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Womens />} />
      <Route path="/Mens" element={<Mens />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Logo" element={<Logo />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/recentadd" element={<Recentadd />} />
    </Routes>
  );
}
export default Router;
