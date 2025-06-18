import { type Me } from '../../types';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface HeroProps {
  me: Me;
}

export const Hero: React.FC<HeroProps> = ({ me }) => (
  <section className='flex min-h-screen flex-col items-center justify-center px-4 pt-8 text-center sm:px-0'>
    <img
      src={me.avatarSource}
      alt={`${me.name} ${me.lastName}`}
      className='mb-4 h-24 w-24 rounded-full border-2 border-gray-50'
    />
    <h1 className='text-2xl font-bold sm:text-3xl md:text-5xl'>
      {me.name} {me.lastName}
    </h1>
    <p className='text-lg font-bold text-indigo-600 sm:text-xl md:text-2xl'>
      {me.role}
    </p>

    <div className='pt-4 flex gap-6'>
      {me.gitHubLink && (
        <a
          href={me.gitHubLink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-gray-50 transition-colors'
          aria-label='GitHub'
        >
          <FaGithub size={24} />
        </a>
      )}
      {me.linkedInLink && (
        <a
          href={me.linkedInLink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-gray-50 transition-colors'
          aria-label='LinkedIn'
        >
          <FaLinkedin size={24} />
        </a>
      )}
    </div>
  </section>
);
