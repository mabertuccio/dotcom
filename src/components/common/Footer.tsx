import { type Me } from '../../types';

interface FooterProps {
  me: Me;
}

export const Footer: React.FC<FooterProps> = ({ me }) => (
  <footer className='py-10 text-center text-sm text-gray-400'>
    <p className='mb-2'>
      Made by {me.name} {me.lastName}
    </p>
    <a
      href={me.portfolioLink}
      target='_blank'
      rel='noopener noreferrer'
      className='hover:underline'
    >
      View Source
    </a>
  </footer>
);
