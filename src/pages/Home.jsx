import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import '../style/Home.css'
import { homeSection } from "../data/Homesection"
import parse from 'html-react-parser'
import Course from "../components/Course"
import Tutor from "../components/Tutor"
import Partner from "../components/Partner"
import Contact from "../components/Contact"

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
      <section id="home">
       <img src={homeSection.image}/>
       <div class="kolom">
           {parse(homeSection.content)}     
        </div>
    </section>
    <Course />
    <Tutor />
    <Partner />
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default Home