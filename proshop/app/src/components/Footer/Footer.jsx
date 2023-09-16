import React from "react";

export const Footer = ({ year = new Date().getFullYear() }) => {
  return (
    <footer data-testid="footer">
      <p>&copy;{year} ProShop. All rights reserved.</p>
      <nav>
        <ul>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
