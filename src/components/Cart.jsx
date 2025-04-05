import deleteIcon from "../assets/icon-delete.svg";

function Cart({ quantity, isItemInCart, onDelete, onCheckout }) {
  return (
    <div className="xs:right-6 absolute top-0 right-2 min-h-[16rem] w-full max-w-[22.5rem] rounded-[10px] bg-white px-6 pt-6 pb-8 shadow-2xl md:-top-[92px] lg:right-0">
      <p className="text-base font-bold text-[var(--color-very-dark-blue)]">
        Cart
      </p>

      <div className="mt-7 h-[1px] w-full bg-[#E4E9F2]"></div>

      {!isItemInCart || quantity === 0 ? (
        <div className="pt-16">
          <p className="text-center text-base font-bold text-[var(--color-dark-grayish-blue)]">
            Your cart is empty
          </p>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <img
              className="size-[50px] rounded-sm"
              src="/images/image-product-1-thumbnail.jpg"
              alt=""
            />
            <div className="flex flex-col items-start">
              <p className="text-base font-normal text-[var(--color-dark-grayish-blue)]">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-base font-normal text-[var(--color-dark-grayish-blue)]">
                $125.00 x {quantity}{" "}
                <span className="font-bold text-[var(--color-very-dark-blue)]">
                  ${125.0 * quantity}
                </span>
              </p>
            </div>

            <button
              aria-label="Remove item"
              onClick={onDelete}
              className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
            >
              <img src={deleteIcon} alt="" />
            </button>
          </div>

          <button
            onClick={onCheckout}
            className="w-full cursor-pointer rounded-[10px] bg-[var(--color-orange)] p-4 text-base font-bold text-white transition-all duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange)]"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
