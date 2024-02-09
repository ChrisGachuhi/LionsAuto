import { Route, Routes } from 'react-router-dom'
import './assets/Style.scss'
import '@vetixy/circular-std'
// eslint-disable-next-line no-unused-vars
import { library } from '@fortawesome/fontawesome-svg-core'

import { Navbar, Whatsapp, Form, Footer } from './Components'
import Home from './Pages/Home'
import ProductSolutions from './Pages/ProductSolutions'
import Business from './Pages/Business'
import Software from './Pages/Software'
import SupportedDevices from './Pages/SupportedDevices'
import Pricing from './Pages/Pricing'
import Payment from './Pages/Payment'
import Contact from './Pages/Contact'

import GpsSoftware from './Pages/Home/GpsSoftware'
import LoadMonitoring from './Pages/Home/LoadMonitoring'
import FuelMonitoring from './Pages/Home/FuelMonitoring'
import GeneratorMonitoring from './Pages/Home/GeneratorMonitoring'
import MiningEquipment from './Pages/Home/MiningEquipment'

import GpsTracker from './Pages/Products/GpsTracker'
import SchoolBusTracker from './Pages/Products/SchoolBusTracker'
import MotorcycleTracker from './Pages/Products/MotorcycleTracker'
import IntelligentLock from './Pages/Products/IntelligentLock'
import PersonalTracker from './Pages/Products/PersonalTracker'
import AssetTracker from './Pages/Products/AssetTracker'
import GarbageTruck from './Pages/Products/GarbageTruck'
import TruckTelematics from './Pages/Products/TruckTelematics'
import TankerTruck from './Pages/Products/TankerTruck'
import BusMonitoring from './Pages/Products/BusMonitoring'
import SmartCar from './Pages/Products/SmartCar'

import Franchising from './Pages/Business/Franchising'
import WhiteLabel from './Pages/Business/WhiteLabel'
import Distribution from './Pages/Business/Distribution'

import CloudHosted from './Pages/Software/CloudHosted'
import SelfHosted from './Pages/Software/SelfHosted'
import PersonalAccount from './Pages/Software/PersonalAccount'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GPS-Software" element={<GpsSoftware />} />
        <Route path="/Load-Monitoring" element={<LoadMonitoring />} />
        <Route path="/Fuel-Monitoring" element={<FuelMonitoring />} />
        <Route path="/Generator-Monitoring" element={<GeneratorMonitoring />} />
        <Route
          path="/Mining-Equipment-Monitoring"
          element={<MiningEquipment />}
        />
        <Route path="/GPS-Software/Cloud-Hosted" element={<CloudHosted />} />
        <Route path="/GPS-Software/Self-Hosted" element={<SelfHosted />} />
        <Route
          path="/GPS-Software/Personal-Account"
          element={<PersonalAccount />}
        />
        <Route path="/Products" element={<ProductSolutions />} />
        <Route path="/AIS-140-GPS-Tracker" element={<GpsTracker />} />
        <Route path="/School-Bus-Tracker" element={<SchoolBusTracker />} />
        <Route
          path="/Smart-Motorcycle-Tracker"
          element={<MotorcycleTracker />}
        />
        <Route
          path="/Intelligent-Electric-Lock"
          element={<IntelligentLock />}
        />
        <Route path="/Personal-tracker" element={<PersonalTracker />} />
        <Route path="/Asset-tracker" element={<AssetTracker />} />
        <Route path="/Garbage-Truck-Monitoring" element={<GarbageTruck />} />
        <Route path="/Truck-Telematics" element={<TruckTelematics />} />
        <Route path="/Tanker-Truck-Monitoring" element={<TankerTruck />} />
        <Route path="/Bus-Monitoring" element={<BusMonitoring />} />
        <Route path="/Smart-Car-Devices" element={<SmartCar />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Business/Franchising" element={<Franchising />} />
        <Route path="/Business/White-Label" element={<WhiteLabel />} />
        <Route path="/Business/Distribution" element={<Distribution />} />
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
  )
}

export default App
