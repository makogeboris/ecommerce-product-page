import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(true);
  }

  function handleHideMenu() {
    setShowMenu(false);
  }

  return (
    <>
      <Header handleShowMenu={handleShowMenu} />
      <Container />
      {showMenu && <MobileMenu handleHideMenu={handleHideMenu} />}
    </>
  );
}

export default App;
