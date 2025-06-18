const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Works', href: '#works' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
];

export const NavBar: React.FC = () => (
  <nav className='fixed top-0 z-50 flex w-full justify-center bg-gray-950 py-6 text-sm space-x-6 sm:space-x-10'>
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className='whitespace-nowrap transition hover:text-gray-400'
      >
        {link.label}
      </a>
    ))}
  </nav>
);
