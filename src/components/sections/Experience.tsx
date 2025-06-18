import { type Experience } from '../../types';
import { SectionTitle } from '../common/SectionTitle';
import { ExperienceItem } from '../experience/ExperienceItem';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => (
  <section
    id='experience'
    className='flex flex-col items-center px-4 py-20 pl-24 sm:px-0'
  >
    <SectionTitle>Experience</SectionTitle>
    <div className='mx-auto max-w-2xl space-y-8 text-left'>
      {experience.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} />
      ))}
    </div>
  </section>
);
