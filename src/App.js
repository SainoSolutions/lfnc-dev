import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, createContext, useContext } from "react";
import { api } from "./api/apiClient";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import Donate from "./pages/Donate/Donate";
import SowASeed from "./pages/Donate/SowASeed";
import PrayerRequest from "./pages/PrayerRequest";
import MessageFromPastor from "./pages/MessageFromPastor";
import FuneralService from "./pages/FuneralService/FuneralService";
import BaptismService from "./pages/BaptismService/BaptismService";
import BirthdayService from "./pages/BirthdayService/BirthdayService";
import VolunteerService from "./pages/VolunteerService/VolunteerService";
import Layout from "./components/Layout/Layout";
import Events from "./pages/Events/Events";
import Media from "./pages/Media/Media";
import Sermons from "./pages/Sermons/Sermons";
import ContactUs from "./pages/ContactUs/ContactUs";
import NewsAndUpdates from  "./pages/News&Updates";
import MembersRegistration from "./pages/MembersRegistration/MembersRegistration";
import UnifiedServiceForm from "./pages/Services/UnifiedServiceForm";
import LoadingSpinner from "./components/reuseable/LoadingSpinner";

const LoadingContext = createContext();
export const useGlobalLoading = () => useContext(LoadingContext);

function AppContent() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const prevPathname = useRef(pathname);

//     useEffect(() => {
//     const disableRightClick = (e) => e.preventDefault();
//     document.addEventListener('contextmenu', disableRightClick);

//     return () => {
//       document.removeEventListener('contextmenu', disableRightClick);
//     };
    
//   }, []);
//   useEffect(() => {
//   const disableInspectKeys = (e) => {
//     if (
//       e.key === 'F12' ||
//       (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) ||
//       (e.ctrlKey && e.key === 'U')
//     ) {
//       e.preventDefault();
//     }
//   };

//   document.addEventListener('keydown', disableInspectKeys);

//   return () => {
//     document.removeEventListener('keydown', disableInspectKeys);
//   };
// }, []);

  const showLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setIsLoading(true);
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      prevPathname.current = pathname;
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await api.get("/api/events");
        console.log("Events:", events);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <LoadingContext.Provider value={{ showLoading }}>
      {isLoading && <LoadingSpinner />}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />       
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/sow-a-seed" element={<SowASeed />} />
          <Route path="/prayer-request" element={<PrayerRequest />} />
          <Route path="/message-from-pastor" element={<MessageFromPastor />} />
          <Route path="/funeral-service" element={<FuneralService />} />
          <Route path="/baptism-service" element={<BaptismService />} />
          <Route path="/birthday-service" element={<BirthdayService />} />
          <Route path="/volunteer-service" element={<VolunteerService />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/news-updates" element={<NewsAndUpdates />} />
          <Route path="/members-registration" element={<MembersRegistration />} />
          <Route path="/unified-service-form" element={<UnifiedServiceForm />} />
        </Routes>
      </Layout>
    </LoadingContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;