import React from "react";

import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      {/* <img src="./icons/icon_menu.svg" alt="menu" className="menu" /> */}
      <div className="navbar-left">
        {/* <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" /> */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/alumnos">Alumnos</a>
          </li>
          <li>
            <a href="/maestros">Maestros</a>
          </li>
          <li>
            <a href="/materias">Materias</a>
          </li>
          <li>
            <a href="/calificaciones">Calificaciones</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">iserm@accitesz.com</li>
          {/* <li className="navbar-shopping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
