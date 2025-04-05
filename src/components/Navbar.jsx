function Navbar() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        <li>
          <a
            className="relative text-base font-normal text-[var(--color-dark-grayish-blue)] transition-all duration-300 after:absolute after:-bottom-12 after:left-0 after:h-[4px] after:w-0 after:bg-[var(--color-orange)] after:transition-all after:duration-300 hover:text-[var(--color-very-dark-blue)] hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
            href="#"
          >
            Collections
          </a>
        </li>
        <li>
          <a
            className="relative text-base font-normal text-[var(--color-dark-grayish-blue)] transition-all duration-300 after:absolute after:-bottom-12 after:left-0 after:h-[4px] after:w-0 after:bg-[var(--color-orange)] after:transition-all after:duration-300 hover:text-[var(--color-very-dark-blue)] hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
            href="#"
          >
            Men
          </a>
        </li>
        <li>
          <a
            className="relative text-base font-normal text-[var(--color-dark-grayish-blue)] transition-all duration-300 after:absolute after:-bottom-12 after:left-0 after:h-[4px] after:w-0 after:bg-[var(--color-orange)] after:transition-all after:duration-300 hover:text-[var(--color-very-dark-blue)] hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
            href="#"
          >
            Women
          </a>
        </li>
        <li>
          <a
            className="relative text-base font-normal text-[var(--color-dark-grayish-blue)] transition-all duration-300 after:absolute after:-bottom-12 after:left-0 after:h-[4px] after:w-0 after:bg-[var(--color-orange)] after:transition-all after:duration-300 hover:text-[var(--color-very-dark-blue)] hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="relative text-base font-normal text-[var(--color-dark-grayish-blue)] transition-all duration-300 after:absolute after:-bottom-12 after:left-0 after:h-[4px] after:w-0 after:bg-[var(--color-orange)] after:transition-all after:duration-300 hover:text-[var(--color-very-dark-blue)] hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
