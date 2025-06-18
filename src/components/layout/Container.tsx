import { type ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className='bg-gray-950 text-gray-50 font-sans'>{children}</div>;
}
