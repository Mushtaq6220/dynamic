"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const resourceLinks = [
  { href: "/resources/makkah-ziyarats", label: "Makkah Ziyarat" },
  { href: "/resources/madinah-ziyarats", label: "Madinah Ziyarat" },
];

export default function PackageResourcesMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className="package-resource-menu" ref={menuRef}>
      <button
        type="button"
        className={open ? "secondary-button package-resource-trigger active" : "secondary-button package-resource-trigger"}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        Resources
        <span className="dropdown-caret">▼</span>
      </button>

      {open ? (
        <div className="package-resource-dropdown">
          <p className="package-resource-note">For Ziyarat visits, please see the resources below.</p>
          {resourceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="package-resource-item"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
