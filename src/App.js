import "./App.css";

import { Fragment } from "react";
import NavMenu from "./components/Header/NavList/NavMenu";
import HeaderBackround from "./components/Header/HeaderBackground";
import ProductsCategorie from "./components/Products/ProductsCategorie";

function App() {
  return (
    <Fragment>
      <header>
        <NavMenu />
        <HeaderBackround />
      </header>
      <main>
        <ProductsCategorie />
      </main>
    </Fragment>
  );
}

export default App;
