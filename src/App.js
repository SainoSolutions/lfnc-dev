import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import Donate from "./pages/Donate/Donate";
import Layout from "./components/Layout/Layout";
import Events from "./pages/Events/Events";
import Media from "./pages/Media/Media";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />       
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/media" element={<Media />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
