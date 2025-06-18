import { type Me } from '../../types';

interface HeroProps {
  me: Me;
}

export const Hero: React.FC<HeroProps> = ({ me }) => (
  <section className='flex min-h-screen flex-col items-center justify-center px-4 pt-8 text-center sm:px-0'>
    <img
      src=''
      alt={`${me.name} ${me.lastName}`}
      className='mb-4 h-12 w-12 rounded-full border-2 border-gray-50'
    />
    <h1 className='text-2xl font-bold sm:text-3xl md:text-5xl'>
      {me.name} {me.lastName}
    </h1>
    <p className='text-lg font-bold text-indigo-600 sm:text-xl md:text-2xl'>
      {me.role}
    </p>
  </section>
);
