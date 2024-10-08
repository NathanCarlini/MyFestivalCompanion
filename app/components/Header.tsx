"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [count, setCount] = useState(0)

  return (
      <header>My Festival Companion</header>
  );
}
