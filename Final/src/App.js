import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AboutUs from "./components/AboutUs";
import ContactUs from './components/ContactUs';
import PageNotFound from "./components/PageNotFound";
import DataShow from './components/DataShow';
import DoctorDetails from './components/DoctorDetails';
import AllSpecialties from './components/AllSpecialties';
import SpecialtiesDetails from './components/SpecialtiesDetails';
import Customers from './components/Customers';
import EditeBook from './components/EditeBook';
import DeleteBook from './components/DeleteBook';
 



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/dataShow" element={<DataShow />} />
          {/* <Route path="/events" element={<HandlingEvents />} /> */}
          {/* <Route path="/hooks" element={<Hooks />} /> */}
          <Route path="/doctorDetails" element={<DoctorDetails />} />
          <Route path="/allSpecialties" element={<AllSpecialties />} />
          <Route path="/Details/:id" element={<SpecialtiesDetails />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/edite/:id" element={<EditeBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
