"use client"
import React from "react";
import LanguageSwitcher from "../toggles/LanguageSwitcher";
import { ModeToggle } from "../toggles/ModeToggle";

export default function Navbar() {
  return (
    <div className="flex">
      <div>
        <LanguageSwitcher />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
