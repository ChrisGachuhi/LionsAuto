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
import { GpsSoftware } from "./Pages/GpsSoftware";
import { CloudHosted } from "./Pages/CloudHosted";
import { SelfHosted } from "./Pages/SelfHosted";
import { PersonalAccount } from "./Pages/PersonalAccount";
import { LoadMonitoring } from "./Pages/LoadMonitoring";
import { FuelMonitoring } from "./Pages/FuelMonitoring";
import { GeneratorMonitoring } from "./Pages/GeneratorMonitoring";
import { BatterySolution } from "./Pages/BatterySolution";
import { Franchising } from "./Pages/Franchising";
import { WhiteLabel } from "./Pages/WhiteLabel";
import { Distribution } from "./Pages/Distribution";
import { SchoolManagement } from "./Pages/SchoolManagement";
import { HospitalManagement } from "./Pages/HospitalManagement";
import { HotelManagement } from "./Pages/HotelManagement";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GPS-Software" element={<GpsSoftware />} />
        <Route path="/GPS-Software/Cloud-Hosted" element={<CloudHosted />} />
        <Route path="/GPS-Software/Self-Hosted" element={<SelfHosted />} />
        <Route
          path="/GPS-Software/Personal-Account"
          element={<PersonalAccount />}
        />

        <Route path="/Load-Monitoring" element={<LoadMonitoring />} />
        <Route path="/Fuel-Monitoring" element={<FuelMonitoring />} />
        <Route path="/Generator-Monitoring" element={<GeneratorMonitoring />} />
        <Route path="/Battery-Solution" element={<BatterySolution />} />

        <Route path="/Products" element={<ProductSolutions />} />
        {/* pending products pages - recommend ommission */}

        <Route path="/Business" element={<Business />} />
        <Route path="/Business/Franchising" element={<Franchising />} />
        <Route path="/Business/White-Label" element={<WhiteLabel />} />
        <Route path="/Business/Distribution" element={<Distribution />} />

        <Route path="/Software" element={<Software />} />
        <Route path="/School-Management" element={<SchoolManagement />} />
        <Route path="/Hospital-Management" element={<HospitalManagement />} />
        <Route path="/Hotel-Management" element={<HotelManagement />} />

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
