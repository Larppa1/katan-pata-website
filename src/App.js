import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing'
import Services from './pages/Services/Services'
import Pricing from './pages//Pricing/Pricing'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SelfMonitoringPlan from "./pages/SelfMonitoringPlan/SelfMonitoringPlan"
import './styles.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/palvelut" element={<Services />}></Route>
        <Route path="/hinnasto" element={<Pricing />}></Route>
        <Route path="/ota-yhteytta" element={<Contact />}></Route>
        <Route path="/tietoja" element={<About />}></Route>
        <Route path="/rekisteriseloste" element={<PrivacyPolicy />}></Route>
        <Route path="/omavalvontasuunnitelma" element={<SelfMonitoringPlan />}></Route>
      </Routes>
    </Router>
  );
}
