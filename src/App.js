import "./App.css";

import { Fragment } from "react";
import NavMenu from "./components/Header/NavList/NavMenu";
import HeaderBackround from "./components/Header/HeaderBackground";
import ProductsCategorie from "./components/Products/ProductsCategorie";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <Fragment>
      <header>
        <NavMenu />
        <HeaderBackround />
      </header>
      <main>
        <ProductsCategorie />
        <Newsletter />
      </main>
    </Fragment>
  );
}

export default App;
