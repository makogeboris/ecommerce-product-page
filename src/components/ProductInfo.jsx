import { motion } from "motion/react";
import { toast } from "react-hot-toast";
import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";

function ProductInfo({ quantity, onIncrement, onDecrement, onShowQuantity }) {
  return (
    <div className="flex flex-col gap-6 px-6 sm:max-w-[33.75rem] md:px-0 lg:max-w-[27.8125rem]">
      <div className="xs:space-y-0 space-y-4">
        <p className="text-sm font-bold tracking-[2px] text-[var(--color-orange)] uppercase">
          Sneaker Company
        </p>
        <h1 className="xs:text-[2.75rem] xs:mt-6 xs:leading-12 text-[1.75rem] leading-8 font-bold text-[var(--color-very-dark-blue)]">
          Fall Limited Edition Sneakers
        </h1>
        <p className="xs:mt-8 text-base font-normal text-[var(--color-dark-grayish-blue)]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>

      <div className="flex items-center justify-between md:flex-col md:items-start">
        <div className="flex items-center gap-4">
          <p className="text-[1.75rem] font-bold text-[var(--color-very-dark-blue)]">
            $125.00
          </p>
          <div className="w-[3.1875rem] rounded-md bg-[var(--color-pale-orange)] px-2 py-1.5">
            <p className="text-base font-bold text-[var(--color-orange)]">
              50%
            </p>
          </div>
        </div>

        <p className="text-base font-bold text-[var(--color-grayish-blue)] line-through">
          $250.00
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 md:mt-2 md:flex-row">
        <div className="flex w-full items-center justify-between rounded-[10px] bg-[var(--color-light-grayish-blue)] p-4 lg:max-w-[9.8125rem]">
          <motion.button
            whileHover={{ scale: 1.5, transition: { duration: 0.1 } }}
            whileTap={{ scale: 1.2 }}
            aria-label="Decrease item"
            onClick={onDecrement}
            className="cursor-pointer transition-all duration-300 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
          >
            <img src={minusIcon} alt="" />
          </motion.button>
          <p className="text-base font-bold text-[var(--color-very-dark-blue)]">
            {quantity}
          </p>
          <motion.button
            whileHover={{ scale: 1.5, transition: { duration: 0.1 } }}
            whileTap={{ scale: 1.2 }}
            aria-label="Increase item"
            onClick={onIncrement}
            className="cursor-pointer transition-all duration-300 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
          >
            <img src={plusIcon} alt="" />
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.5, y: 2 }}
          onClick={() => {
            if (!quantity) return;
            toast.success("Item added to cart");
            onShowQuantity();
          }}
          className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-[10px] bg-[var(--color-orange)] p-4 text-base font-bold text-white transition-all duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
        >
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.0905 2.91311H16.7397C17.2062 2.91311 17.5482 3.35211 17.4353 3.80391L15.9785 9.63048C15.9025 9.93446 15.6378 10.1539 15.3251 10.1723L3.86762 10.8456C4.07245 11.3243 4.54702 11.6529 5.09162 11.6529H13.0982C14.2967 11.6529 15.2717 12.628 15.2717 13.8264C15.2717 15.0249 14.2967 16 13.0982 16C11.5964 16 10.5406 14.502 11.0544 13.0868H7.13056C7.645 14.5038 6.58692 16 5.08677 16C3.27933 16 2.26409 13.9081 3.37522 12.4891C2.75894 12.0009 2.40119 11.2825 2.34268 10.6204C1.43419 0.498541 1.47444 0.946953 1.55953 1.89506L1.56008 1.9012C1.61714 2.53699 1.6934 3.38676 1.51811 1.43385H0.716927C0.320978 1.43385 0 1.11288 0 0.716927C0 0.320978 0.320978 0 0.716927 0H2.17355C2.54465 0 2.85443 0.28322 2.88761 0.652847L3.0905 2.91311ZM4.3471 13.8264C4.3471 14.2343 4.67894 14.5661 5.08677 14.5661C5.49463 14.5661 5.82647 14.2343 5.82647 13.8264C5.82647 13.4186 5.49463 13.0868 5.08677 13.0868C4.67894 13.0868 4.3471 13.4186 4.3471 13.8264ZM13.0982 14.5661C12.6903 14.5661 12.3585 14.2343 12.3585 13.8264C12.3585 13.4186 12.6903 13.0868 13.0982 13.0868C13.506 13.0868 13.8379 13.4186 13.8379 13.8264C13.8379 14.2343 13.506 14.5661 13.0982 14.5661ZM3.67463 9.42062L14.7152 8.77181L15.8215 4.34693H3.21921L3.67463 9.42062Z"
              fill="white"
            />
          </svg>
          Add to cart
        </motion.button>
      </div>
    </div>
  );
}

export default ProductInfo;
