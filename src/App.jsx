import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function handleShowMenu() {
    setShowMenu(true);
  }

  function handleHideMenu() {
    setShowMenu(false);
  }

  function toggleCart() {
    setShowCart((prev) => !prev);
  }

  return (
    <>
      <Header handleShowMenu={handleShowMenu} onToggleCart={toggleCart} />
      <Container showCart={showCart} />
      {showMenu && <MobileMenu handleHideMenu={handleHideMenu} />}
    </>
  );
}

export default App;
