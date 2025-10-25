import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import Donate from "./pages/Donate/Donate";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />       
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
