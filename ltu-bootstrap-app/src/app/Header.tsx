"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const studentNumber = "22133836";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <span className="navbar-brand fw-bold">{studentNumber}</span>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              href="/"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/about"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/escape-room"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Escape Room
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/coding-races"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Coding Races
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/court-room"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Court Room
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
