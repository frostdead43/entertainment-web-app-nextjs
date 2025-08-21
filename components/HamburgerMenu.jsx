"use client";
import Link from "next/link";
import { useState } from "react";

export function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <img
        src="/images/icons/avatar-icon.svg"
        onClick={() => setShowMenu(!showMenu)}
        style={{ cursor: "pointer" }}
      />
      <ul className={showMenu ? "show" : ""}>
        <li><Link href="/auth/login">Login</Link></li>
        <li><Link href="/auth/register">Register</Link></li>

      </ul>
    </div>
  );
}
