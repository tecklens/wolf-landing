import {Cta} from "./components/Cta";
import {FAQ} from "./components/FAQ";
import {Features} from "./components/Features";
import {Footer} from "./components/Footer";
import {Hero} from "./components/Hero";
// import {HowItWorks} from "./components/HowItWorks";
import {Navbar} from "./components/Navbar";
import {Newsletter} from "./components/Newsletter";
import {ScrollToTop} from "./components/ScrollToTop";
import {Services} from "./components/Services";
import {Sponsors} from "./components/Sponsors";
import {Team} from "./components/Team";
import "./App.css";
import Integration from "@/components/integration/integration.tsx";
// import {Testimonials} from "@/components/Testimonials.tsx";

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Sponsors/>
            {/*<About />*/}
            <Integration/>
            {/*<HowItWorks/>*/}
            <Features/>
            <Services/>
            <Cta/>
            {/*<Testimonials />*/}
            <Team/>
            {/*<Pricing />*/}
            <Newsletter/>
            <FAQ/>
            <Footer/>
            <ScrollToTop/>
        </>
    );
}

export default App;
