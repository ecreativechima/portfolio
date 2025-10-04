import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => {
  return (
    <div className="p-4">
      {/* Navbar */}
      <header className="fixed top-0 left-0 z-[1000] flex justify-between py-5 px-[10%] w-full bg-[#1f242d] shadow-md">
        <nav className="flex">
          <ul className="flex space-x-4 items-center">
            <div className="text-white text-[25px] tracking-[1px] no-underline font-semibold">
              <span className="text-[#0ef]">E</span>
              mma's Creative.
            </div>
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/skills" className="text-white hover:text-gray-300">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Dynamic Pages */}
      <Outlet />

      {/* Devtools */}
      <TanStackRouterDevtools />
    </div>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
});