import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

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
          <Route path="/aboutus" element={<Home />} />
          <Route path="/get-involved" element={<Home />} />
          <Route path="/donate" element={<Home />} />
          <Route path="/events" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;