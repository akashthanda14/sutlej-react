import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/Hero'
// import AboutCompany from './components/AboutCompany'
import  ProductCard from './components/ProductCard'
import WhyChooseUs from './components/WhyChooseUs'
import OurProcess from './components/OurProcess'
import ContactForm from './components/ContactForm'
import CounterSection from './components/CounterSection'
import PackagingSection from './components/PackagingSection'
import Footer from './components/Footer'

// import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100">
     <div className="App">
      <Header />
      <HeroSection/>
      {/* <AboutCompany/> */}
      <ProductCard />
      <WhyChooseUs/>
      <div className="min-h-screen bg-[#0a1825] text-white">
      <OurProcess />
    </div>
      <ContactForm/>
      <CounterSection/>
      <PackagingSection/>
      <Footer/>

      {/* Other components can go here */}
    </div>
    </div>
    </>
  )
}

export default App
