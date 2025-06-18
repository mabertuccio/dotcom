import { type Experience } from '../../types';

export const ExperienceItem: React.FC<{ experience: Experience }> = ({
  experience,
}) => (
  <article>
    <h3 className='mb-3 text-xl font-semibold'>{experience.role}</h3>
    <p className='mb-3 text-sm text-gray-400'>
      {experience.company} - {experience.date}
    </p>
    <ul className='space-y-2'>
      {experience.responsabilities.map((responsability, index) => (
        <li key={index} className='text-gray-400 flex items-start gap-2'>
          <span>✅</span>
          <span>{responsability}</span>
        </li>
      ))}
    </ul>
  </article>
);
