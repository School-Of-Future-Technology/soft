import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ClassroomSection from "@/components/sections/ClassroomSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <section id="projects">
          <ProjectsSection />
        </section>
        <ClassroomSection />
        <section id="reviews">
          <TestimonialsSection />
        </section>
        <section id="programs">
          <ProgramsSection />
        </section>
        <CTASection />
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
