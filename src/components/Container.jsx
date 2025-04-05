import Cart from "./Cart";
import Lightbox from "./Lightbox";
import ProductInfo from "./ProductInfo";

function Container({ showCart }) {
  return (
    <main>
      <div className="relative mx-auto mb-[5.5rem] flex w-full max-w-[63.4375rem] grid-cols-2 flex-col items-center gap-6 sm:mb-[8.25rem] md:mt-[5.625rem] md:px-6 lg:grid lg:grid-cols-2 lg:flex-row lg:gap-12">
        {showCart && <Cart />}
        <Lightbox />
        <ProductInfo />
      </div>
    </main>
  );
}

export default Container;
