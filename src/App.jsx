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
import MiningEquipment from './Pages/Home/MiningEquipment'
import FMB120 from './Pages/Devices/FMB120'
import FMB125 from './Pages/Devices/FMB125'
import FMB920 from './Pages/Devices/FMB920'
import GT06N from './Pages/Devices/GT06N'
import S102 from './Pages/Devices/S102'
import VT08S from './Pages/Devices/VT08S'
import VT05S from './Pages/Devices/VT05S'

// Animation logic
import { CurrentAnimationContext } from './Components/AnimationContext/CurrentAnimationContext'
import gsap from 'gsap'
import Terms from './Pages/Terms'
import Privacy from './Pages/Privacy'
import SpeedGovernor from './Pages/Software/SpeedGovernor'
import DriverBehavior from './Pages/Software/DriverBehavior'
import Login from './Pages/Login'
import ScrollToTop from './Components/Scrolltotop'

function App() {
  const animate = {
    headerAnimation: () => {
      gsap.fromTo(
        '.title',
        { scale: 0.8, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'back' }
      )
    },
    descriptionAnimation: (targetParent, targetChild) => {
      const elements = gsap.utils.selector(targetParent)(targetChild)
      // console.log(elements)

      for (let i = 0; i <= elements.length; i++) {
        gsap.fromTo(
          elements[i],
          { opacity: 0.8, scale: 0.8 },
          {
            scrollTrigger: { trigger: elements[i], start: 'top 90%' },
            opacity: 1,
            scale: 1,
            duration: 1,
          }
        )
      }
    },
    leftToRightImage: (target, triggerElement) => {
      gsap.fromTo(
        target,
        { x: -100, opacity: 0.6 },
        {
          scrollTrigger: {
            trigger: triggerElement,
            start: 'top 85%',
          },
          x: 0,
          opacity: 1,
          duration: 2,
          ease: 'back',
        }
      )
    },
    rightToLeftImage: (target, triggerElement) => {
      gsap.fromTo(
        target,
        { x: 100, opacity: 0.6 },
        {
          scrollTrigger: {
            trigger: triggerElement,
            start: 'top 85%',
          },
          x: 0,
          opacity: 1,
          duration: 2,
          ease: 'back',
        }
      )
    },
    benefitsArrayAnimation: (targetParent, targetChild) => {
      const elements = gsap.utils.selector(targetParent)(targetChild)

      for (let i = 0; i <= elements.length; i++) {
        gsap.fromTo(
          elements[i],
          { opacity: 0, y: 100 },
          {
            scrollTrigger: { trigger: elements[i], start: 'top 90%' },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'back',
          }
        )
      }
    },
  }

  return (
    <div className="App">
      <Navbar />
      <CurrentAnimationContext.Provider value={animate}>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/GPS-Software" element={<GpsSoftware />} />
          <Route path="/Load-Monitoring" element={<LoadMonitoring />} />
          <Route path="/Fuel-Monitoring" element={<FuelMonitoring />} />
          <Route
            path="/Generator-Monitoring"
            element={<GeneratorMonitoring />}
          />
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
          <Route path="/realtime-tracking" element={<GpsTracker />} />
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
          <Route path="/Speed-Governor" element={<SpeedGovernor />} />
          <Route path="/Driver-Behavior" element={<DriverBehavior />} />

          <Route path="/Devices" element={<SupportedDevices />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/FMB120-Vehicle-GPS-Tracker" element={<FMB120 />} />
          <Route path="/FMB920-Vehicle-GPS-Tracker" element={<FMB920 />} />
          <Route path="/FMB125-Vehicle-GPS-Tracker" element={<FMB125 />} />
          <Route path="/S102-GPS-Tracker" element={<S102 />} />
          <Route path="/GT06N-GPS-Tracker" element={<GT06N />} />
          <Route path="/VT08S-Vehicle-GPS-Tracker" element={<VT08S />} />
          <Route path="/VT05S-Vehicle-GPS-Tracker" element={<VT05S />} />

          <Route path="/Terms&Conditions" element={<Terms />} />
          <Route path="/PrivacyPolicy" element={<Privacy />} />
        </Routes>
      </CurrentAnimationContext.Provider>

      <Whatsapp />
      <Form />
      <Footer />
    </div>
  )
}

export default App
