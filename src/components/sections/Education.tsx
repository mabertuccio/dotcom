import { type Education } from '../../types';
import { SectionTitle } from '../common/SectionTitle';
import { EducationItem } from '../education/EducationItem';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
}) => (
  <section
    id='education'
    className='flex flex-col items-center px-4 py-20 pl-20 pr-20 sm:px-0'
  >
    <SectionTitle>Education</SectionTitle>
    <div className='mx-auto max-w-2xl space-y-8 text-left'>
      {education.map((edu, index) => (
        <EducationItem key={index} education={edu} />
      ))}
    </div>
  </section>
);
