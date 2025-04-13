import { ReactNode } from 'react';
import Logo from '../components/base/Logo';

const LogoLayout = ({
  children,
  seo,
  name,
}: {
  children: ReactNode;
  seo?: ReactNode;
  name?: ReactNode;
}) => {
  return (
    <div className={'bg-white lg:h-screen'}>
      {seo}
      <div className="py-12 lg:py-24 space-y-12 w-full sm:max-w-md mx-auto p-3">
        <div
          className={
            'flex justify-center items-center flex-col space-y-2'
          }
        >
          <Logo size={150} />
          <div
            className={
              ' text-lg text-white font-bold bg-black p-2 rounded-full px-3'
            }
          >
            {name}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default LogoLayout;
