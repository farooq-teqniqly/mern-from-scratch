import React from "react";

export const Header = () => {
  return (
    <header data-testid="header">
      <h1>ProShop</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
            <a href="/cart">Cart</a>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
