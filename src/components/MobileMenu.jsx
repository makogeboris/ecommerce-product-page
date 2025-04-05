function MobileMenu({ handleHideMenu }) {
  return (
    <>
      <div className="absolute top-0 left-0 z-20 h-screen w-[60%] bg-white lg:hidden">
        <div className="flex flex-col gap-14 p-6 pt-9">
          <button
            onClick={handleHideMenu}
            className="group w-fit cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
            aria-label="Close Menu"
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.99998 5.37868L2.40379 0.782486L0.282471 2.90381L4.87866 7.5L0.282471 12.0962L2.40379 14.2175L6.99999 9.62132L11.5962 14.2175L13.7175 12.0962L9.12131 7.5L13.7175 2.90381L11.5962 0.782486L6.99998 5.37868Z"
                className="fill-[var(--color-dark-grayish-blue)] transition-colors duration-300 group-hover:fill-[var(--color-very-dark-blue)]"
              />
            </svg>
          </button>

          <nav>
            <ul className="flex flex-col items-start gap-5">
              <li>
                <a
                  className="text-base font-bold text-[var(--color-very-dark-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
                  href="#"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-[var(--color-very-dark-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
                  href="#"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-[var(--color-very-dark-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
                  href="#"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-[var(--color-very-dark-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-base font-bold text-[var(--color-very-dark-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        onClick={handleHideMenu}
        className="fixed inset-0 z-0 h-full w-full bg-[var(--color-black-75)] transition-all duration-500 lg:hidden"
      ></div>
    </>
  );
}

export default MobileMenu;
