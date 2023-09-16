import React from "react";

export default function Footer({ year = new Date().getFullYear() }) {
  return (
    <footer>
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
}
