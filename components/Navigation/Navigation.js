import { useRouter } from 'next/router';

import { routes } from '../../utils/routes';
import NavLink from './NavLink';

export default function Navigation() {
  const { asPath } = useRouter();

  return (
    <nav className="items-center hidden h-full md:flex">
      <ul className="flex h-full gap-8">
        {routes.map(({ title, path }) => {
          return (
            <NavLink
              title={title}
              path={path}
              isActive={asPath === path}
              key={`link-${path}`}
            />
          );
        })}
      </ul>
    </nav>
  );
}
