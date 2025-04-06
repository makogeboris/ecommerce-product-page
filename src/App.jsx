import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Container from "./components/Container";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [showQuantity, setShowQuantity] = useState(false);
  const [isItemInCart, setIsItemInCart] = useState(false);

  function handleShowMenu() {
    setShowMenu(true);
  }

  function handleHideMenu() {
    setShowMenu(false);
  }

  function toggleCart() {
    setShowCart((prev) => !prev);
  }

  function handleIncrement() {
    setQuantity((quantity) => quantity + 1);
  }

  function handleDecrement() {
    setQuantity((quantity) => Math.max(0, quantity - 1));
  }

  function handleShowQuantity() {
    if (!quantity) return;
    setShowQuantity(true);
    setIsItemInCart(true);
  }

  function handleDelete() {
    setQuantity(0);
    setShowQuantity(false);
  }

  function handleCheckout() {
    setQuantity(0);
    setShowQuantity(false);
    setShowCart(false);
  }

  return (
    <>
      <Header
        handleShowMenu={handleShowMenu}
        onToggleCart={toggleCart}
        quantity={quantity}
        showQuantity={showQuantity}
      />
      <Container
        showCart={showCart}
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onShowQuantity={handleShowQuantity}
        isItemInCart={isItemInCart}
        onDelete={handleDelete}
        onCheckout={handleCheckout}
      />
      <AnimatePresence initial={false}>
        {showMenu && <MobileMenu handleHideMenu={handleHideMenu} />}
      </AnimatePresence>
    </>
  );
}

export default App;
