import { type Work } from '../../types';

export const WorkCard: React.FC<{ work: Work }> = ({ work }) => (
  <article className='max-w-sm overflow-hidden rounded-xl bg-gray-900 p-4 text-left shadow-lg'>
    <img
      src=''
      alt={work.workName}
      className='mb-4 h-48 w-full rounded-md object-cover'
    />
    <h3 className='mb-1 text-lg font-semibold'>{work.workName}</h3>
    <p className='mb-4 text-sm text-gray-400'>{work.workDescription}</p>
    <div className='mb-4 flex flex-wrap ga-2'>
      {work.workTechnologies.map((tech) => (
        <span
          key={tech}
          className='rounded-md bg-gray-950 px-3 py-1 text-xs text-gray-400'
        >
          {tech}
        </span>
      ))}
    </div>
    <div className='flex gap-4'>
      <a
        href={work.codeButtonLink}
        className='rounded bg-indigo-600 px-4 py-2 text-sm hover:bg-indigo-400'
      ></a>
      <a
        href={work.demoButtonLink}
        className='rounded bg-gray-950 px-4 py-2 text-sm hover:bg-gray-600'
      ></a>
    </div>
  </article>
);
