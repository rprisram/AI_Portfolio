import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import TechnicalArsenal from '@/components/TechnicalArsenal';
import ProjectGrid from '@/components/ProjectGrid';
import MLProjects from '@/components/MLProjects';
import Experience from '@/components/Experience';
import ChatAssistant from '@/components/ChatAssistant';
import Certifications from '@/components/Certifications';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <TechnicalArsenal />
      <ProjectGrid />
      <MLProjects />
      <Certifications />
      <Experience />
      <ChatAssistant />
    </main>
  );
}
