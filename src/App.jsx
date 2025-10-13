import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Blog from "./sections/Blog"

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Blog />
            <Contact />
            <Footer />
            {/* <Testimonials /> */}
        </>
    )
}

export default App