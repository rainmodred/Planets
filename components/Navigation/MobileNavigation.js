import { useEffect, useState } from 'react';

import { routes } from '../../utils/routes';
import hamburger from '../../public/images/icon-hamburger.svg';

import Image from 'next/image';
import NavLink from '../Navigation/NavLink';
import { useRouter } from 'next/router';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style = 'overflow-y:hidden';
    } else {
      document.body.style = '';
    }
  }, [isOpen]);

  return (
    <>
      <button className="md:hidden" onClick={toggleMenu}>
        <Image src={hamburger} alt="menu"></Image>
      </button>
      <nav
        className={`z-10 fixed top-[90px] left-0 px-6 bg-blackMain w-full h-full overflow-y-auto md:hidden transition-transform ease-linear duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="">
          {routes.map(({ title, path }) => {
            return (
              <NavLink
                onClose={closeMenu}
                title={title}
                path={path}
                isActive={pathname === path}
                key={`link-${path}`}
              />
            );
          })}
        </ul>
      </nav>
    </>
  );
}
