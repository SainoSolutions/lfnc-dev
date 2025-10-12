import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Ministries from "./pages/Ministries";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
