import { Hero } from '@/components/sections/hero';
import { LogoSeal } from '@/components/sections/logo-seal';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { Footer } from '@/components/sections/footer';
import { Nav } from '@/components/nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoSeal />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
