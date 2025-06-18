import { type Education } from '../../types';

export const EducationItem: React.FC<{ education: Education }> = ({
  education,
}) => (
  <article>
    <h3 className='mb-3 text-xl font-semibold'>{education.degree}</h3>
    <p className='mb-3 text-sm text-gray-400'>
      {education.college} - {education.date}
    </p>
    <ul className='space-y-2'>
      {education.competencies.map((competency, index) => (
        <li key={index} className='flex items-center gap-2'>
          <span className='text-indigo-600'>•</span>
          <span className='text-gray-400'>{competency}</span>
        </li>
      ))}
    </ul>
  </article>
);
