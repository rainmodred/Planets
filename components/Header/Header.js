import Link from 'next/link';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../Navigation/MobileNavigation';

export default function Header() {
  return (
    <header className="relative">
      <div className="container h-[90px] flex items-center justify-between px-6 py-4 m-auto md:py-0 md:pt-4 lg:pt-0 lg:flex-row md:flex-col md:items-center md:gap-7">
        <span className="absolute bottom-0 left-0 w-full h-px bg-white-100"></span>
        <Link href="/earth">
          <a className="font-sans text-3xl font-medium uppercase tracking-custom">
            the planets
          </a>
        </Link>

        <MobileNavigation />
        <Navigation />
      </div>
    </header>
  );
}
