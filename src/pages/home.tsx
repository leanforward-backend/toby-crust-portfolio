import { ThemeToggle } from "../components/theme_toggle"
import { Navbar } from "../components/navbrar"
import { HeroSection } from "../components/hero_section"
import { AboutSection } from "@/components/about_section"
import { Projects } from "@/components/projects"
import { ContactSection } from "@/components/contact_section"
import { Footer } from "@/components/footer"


export const Home = () => {
    return (
        <div className={" min-h-screen bg-background text-foreground transition-colors duration-300"}>
            <ThemeToggle />

            {/* Background Effects */}

            <Navbar />
            {/* Nav bar */}

            <main>
                <HeroSection />
                <AboutSection />
                <Projects />
                <ContactSection />
            </main>

            <Footer />


        </div>
    )
}