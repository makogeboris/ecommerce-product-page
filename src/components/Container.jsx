import { AnimatePresence } from "motion/react";
import Cart from "./Cart";
import LightboxComponent from "./LightboxComponent";
import ProductInfo from "./ProductInfo";

function Container({
  showCart,
  quantity,
  onIncrement,
  onDecrement,
  onShowQuantity,
  isItemInCart,
  onDelete,
  onCheckout,
}) {
  return (
    <main>
      <div className="relative mx-auto mb-[5.5rem] flex w-full max-w-[63.4375rem] grid-cols-2 flex-col items-center gap-6 sm:mb-[8.25rem] md:mt-[5.625rem] md:px-6 lg:grid lg:grid-cols-2 lg:flex-row lg:gap-[7.8125rem]">
        <AnimatePresence initial={false}>
          {showCart && (
            <Cart
              quantity={quantity}
              isItemInCart={isItemInCart}
              onDelete={onDelete}
              onCheckout={onCheckout}
            />
          )}
        </AnimatePresence>
        <LightboxComponent />
        <ProductInfo
          quantity={quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onShowQuantity={onShowQuantity}
        />
      </div>
    </main>
  );
}

export default Container;
