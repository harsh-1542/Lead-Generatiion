import React, {useEffect, useState} from 'react'

import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Faqs from './components/Faqs/Faqs'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

const App = () => {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() =>{
  //   fetch("/api/home").then(
  //     response => response.json()
  //   ).then(
  //     data =>{
  //       setBackendData(data)
  //     }
  //   )
  // },[])
  return (
    <>

      {/* {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i )=>(
          <p key={i}>{user}</p>
        ))
      )} */}

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Faqs />
      <Contacts />
      <Footer /> 
    </>
  );
};

export default App;