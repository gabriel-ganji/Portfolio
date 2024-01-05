import AboutMe from "../AboutMe";
import Expirence from "../Experience";
import Footer from "../Footer";
import Courses from "../Habilities";
import Header from "../Header";
import Main from "../Main";
import Networks from "../MyNetworks";
import Projects from "../Projects";
import Training from "../Training";

export default function Home() {
    return (
      <>
        <Header />
        <Main/>
        <section data-aos='fade-up' id='sobre-min'>
          <AboutMe/>
        </section>
        <section id='experiencias'>
          <Expirence/>
        </section>
        <section data-aos='fade-up' id='formação'>
          <Training/>
        </section>
        <section id='habilidades'>
          <Projects/>
        </section>
        <section data-aos='fade-up' id='minhas-redes'>
          <Networks/>
        </section>
        <section>
          <Footer/>
        </section>
      </>     
    );
}