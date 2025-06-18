import { type Work } from '../../types';
import { SectionTitle } from '../common/SectionTitle';
import { WorkCard } from '../work/WorkCard';

interface WorksProps {
  works: Work[];
}

export const Works: React.FC<WorksProps> = ({ works }) => (
  <section id='works' className='px-4 py-20 text-center sm:px-0'>
    <SectionTitle>Works</SectionTitle>
    <div className='flex justify-center'>
      {works.map((work) => (
        <WorkCard key={work.workName} work={work} />
      ))}
    </div>
  </section>
);
