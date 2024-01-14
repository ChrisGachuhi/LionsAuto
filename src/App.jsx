import { Route, Routes } from "react-router-dom";
import "./assets/Style.scss";
import "@vetixy/circular-std";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  Home,
  ProductSolutions,
  Business,
  Software,
  SupportedDevices,
  Pricing,
  Payment,
  Contact,
} from "./Pages";

import { Navbar, Whatsapp, Form, Footer } from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductSolutions />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Software" element={<Software />} />
        <Route path="/Devices" element={<SupportedDevices />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Whatsapp />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
