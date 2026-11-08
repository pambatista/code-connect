import { Outlet } from 'react-router-dom';
import Logo from '../../molecules/Logo/Logo';
import symbolBL from '../../../assets/auth/symbol-bl.svg';
import symbolBR from '../../../assets/auth/symbol-br.svg';
import symbolTL from '../../../assets/auth/symbol-tl.svg';
import symbolTR from '../../../assets/auth/symbol-tr.svg';

function BgSymbol({ bottomLeft, className = '', topRight }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-122 w-102 opacity-30 ${className}`}
    >
      <img src={topRight} alt="" className="absolute right-0 top-0" />
      <img src={bottomLeft} alt="" className="absolute bottom-0 left-0" />
    </div>
  );
}

export default function AuthLayout({ image, imageAlt = '' }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-grafite font-prompt">
      <BgSymbol
        bottomLeft={symbolTL}
        topRight={symbolTR}
        className="left-36 top-0"
      />
      <BgSymbol
        bottomLeft={symbolBL}
        topRight={symbolBR}
        className="bottom-0 right-36"
      />
      <main className="relative z-10 flex! min-h-screen items-center justify-center p-6">
        <div className="flex w-full max-w-249 items-center justify-between rounded-4xl border border-grafite bg-cinza-escuro px-6 py-14 md:px-20">
          <div className="relative hidden h-157 w-102 shrink-0 lg:block">
            <img
              src={image}
              alt={imageAlt}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <Logo className="absolute bottom-8 left-1/2 -translate-x-1/2" />
          </div>
          <div className="mx-auto w-full max-w-103">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
