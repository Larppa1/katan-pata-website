import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/palvelut" element={<Services />}></Route>
        <Route path="/hinnasto" element={<Pricing />}></Route>
        <Route path="/ota-yhteytta" element={<Contact />}></Route>
        <Route path="/tietoja" element={<About />}></Route>
      </Routes>
    </Router>
  );
}
