import AboutMe from "../AboutMe";
import Expirence from "../Experience";
import Header from "../Header";
import Main from "../Main";
import Networks from "../MyNetworks";
import Training from "../Training";

export default function Home() {
    return (
      <>
        <Header />
        <Main/>
        <AboutMe/>
        <Training/>
        <Expirence/>
        <Networks/>
      </>     
    );
}