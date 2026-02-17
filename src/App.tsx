import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Skills } from './components/Skills';
import { CareerTimeline } from './components/CareerTimeline';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ResumeSection } from './components/ResumeSection';
import { StickyResumeButton } from './components/StickyResumeButton';
import { DeveloperCenter } from './components/DeveloperCenter';

function App() {
    return (
        <div className="bg-background min-h-screen text-white selection:bg-accent-light selection:text-background">
            <Navbar />
            <main>
                <Hero />
                <ResumeSection />
                <FeaturedProjects />
                <Skills />
                <DeveloperCenter />
                <CareerTimeline />
                <CTA />
            </main>
            <Footer />
            <StickyResumeButton />
        </div>
    );
}

export default App;
