import { useEffect, useState } from 'react';
import Container from './components/layout/Container';
import { NavBar } from './components/common/NavBar';
import { Hero } from './components/sections/Hero';
import { Works } from './components/sections/Works';
import { EducationSection } from './components/sections/Education';
import { ExperienceSection } from './components/sections/Experience';
import { Footer } from './components/common/Footer';
import { type PortfolioData } from './types';
import dataJSON from './data/data.json';

function App() {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    setData(dataJSON);
  }, []);

  if (!data) return <div className='p-8'>Loading...</div>;

  return (
    <Container>
      <NavBar />
      <Hero me={data.me} />
      <Works works={data.works} />
      <EducationSection education={data.education} />
      <ExperienceSection experience={data.experience} />
      <Footer me={data.me} />
    </Container>
  );
}

export default App;
