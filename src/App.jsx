import { Route, Routes } from "react-router-dom";
import "./assets/Style.scss";
import "@vetixy/circular-std";
// eslint-disable-next-line no-unused-vars
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
        <Route path="/GPS-Software" />
        <Route path="/GPS-Software/Cloud-Hosted" />
        <Route path="/GPS-Software/Self-Hosted" />
        <Route path="/GPS-Software/Personal-Account" />

        <Route path="/Load-Monitoring" />
        <Route path="/Fuel-Monitoring" />
        <Route path="/Generator-Monitoring" />
        <Route path="/Battery-Solution" />

        <Route path="/Products" element={<ProductSolutions />} />
        {/* pending products pages - recommend ommission */}

        <Route path="/Business" element={<Business />} />
        <Route path="/Business/Franchising"/>
        <Route path="/Business/White-Label"/>
        <Route path="/Business/Distribution"/>


        <Route path="/Software" element={<Software />} />
        <Route path="/School-Management" />
        <Route path="/Hospital-Management" />
        <Route path="/Hotel-Management" />

        <Route path="/Devices" element={<SupportedDevices />} />
        {/* pending device description pages - recommend ommission */}

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
