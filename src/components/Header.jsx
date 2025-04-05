import Logo from "./Logo";
import Navbar from "./Navbar";
import CartButton from "./CartButton";
import Avatar from "./Avatar";

function Header({ handleShowMenu, onToggleCart, quantity, showQuantity }) {
  return (
    <header className="px-6 pt-5 pb-6 md:pt-7 md:pb-0">
      <div className="mx-auto flex max-w-[69.375rem] items-center justify-between gap-4 lg:border-b lg:border-b-[var(--color-light-grayish-blue)] lg:pb-8">
        <div className="flex items-center gap-4 lg:gap-14">
          <button
            onClick={handleShowMenu}
            className="group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)] lg:hidden"
            aria-label="Open mobile menu"
          >
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H16V3H0V0ZM0 6H16V9H0V6ZM16 12H0V15H16V12Z"
                className="fill-[var(--color-dark-grayish-blue)] transition-colors duration-300 group-hover:fill-[var(--color-very-dark-blue)]"
              />
            </svg>
          </button>

          <Logo />
          <Navbar />
        </div>

        <div className="flex items-center gap-6 md:gap-11">
          <CartButton
            onToggleCart={onToggleCart}
            quantity={quantity}
            showQuantity={showQuantity}
          />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
