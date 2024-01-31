import Main from "../Main";
import Footer from "../Footer";
import Header from "../Header";
import AboutUs from "../AboutUs";
import Projects from "../Projects";
import Expirence from "../Experience";

export default function Home() {

  return (
    <>
      <Header />
      <Main />
      <section id='habilidades'>
        <Projects />
      </section>
      <section id='sobre-nos'>
        <AboutUs />
      </section>
      <section id='experiencias'>
        <Expirence />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}