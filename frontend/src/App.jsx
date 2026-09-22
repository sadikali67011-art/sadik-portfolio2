import { useState, useEffect } from "react";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollTop from "./components/ScrollTop";
import Education from "./components/Education";
import Services from "./components/Services";


function App() {


  const [loading, setLoading] = useState(true);



  useEffect(() => {


    setTimeout(() => {

      setLoading(false);

    }, 2000);


  }, []);




  if(loading){

    return <Loader />;

  }





  return (

    <>


      <Navbar />


      <main>


        <Hero />


        <About />

        <Services />

        <Education />


        <Skills />


        <Projects />


        <Contact />


      </main>



      <Footer />

      <ScrollTop/>


    </>

  );

}



export default App;