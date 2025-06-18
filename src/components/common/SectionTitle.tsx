interface SectionTitleProps {
  children: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <div className='text-center'>
    <h2 className='mb-2 text-2xl font-bold sm:text-3xl'>{children}</h2>
    <div className='mx-auto mb-10 h-4 w-32 bg-indigo-600'></div>
  </div>
);
