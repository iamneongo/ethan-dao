"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SideMenu } from "@/components/SideMenu";

export function SiteChrome() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar onOpenMenu={() => setOpen(true)} />
      <SideMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
