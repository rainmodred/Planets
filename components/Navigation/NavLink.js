import Image from 'next/image';
import Link from 'next/link';

import chevron from '../../public/images/icon-chevron.svg';

export default function NavLink({ onClose, title, path, isActive }) {
  const isVisible = isActive ? 'md:scale-100' : 'md:scale-0';
  const color = `bg-${title}`;

  return (
    <li
      className={`group relative items-center flex gap-4 py-4 lg:py-6 transition-all ease-linear duration-200 border-b md:text-navLink ${
        isActive ? 'text-white' : 'text-white-700'
      } hover:text-white border-white-100 sm:border-b-transparent`}
      key={`route-${path}`}
      onClick={onClose}
    >
      <span
        className={`group-hover:md:scale-100 duration-200 md:absolute lg:top-0 h-1 md:bottom-0 w-full ${color} ${isVisible} transition-all ease-linear md:block hidden`}
      ></span>
      <span
        className={`md:hidden block w-6 h-6 rounded-full bg-${title}`}
      ></span>
      <Link href={path}>
        <a className="mr-auto font-bold uppercase">{title}</a>
      </Link>
      <div className="md:hidden">
        <Image src={chevron} alt="chevron"></Image>
      </div>
    </li>
  );
}
