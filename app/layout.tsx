"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


// Helper component to handle active link styling
function NavLink({
  href,
  children,
  exact = false,
}: {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
}) {
  const pathname = usePathname();
  // For root, match exactly. For others, match prefix.
  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={`hover:text-blue-300 ${
        isActive ? "border-b-2 border-black font-semibold" : "font-thin"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col items-center justify-between h-fit"
      >
        <nav 
          style={{ backgroundColor: "#f5f5ee" }}
          className="w-full z-20 flex items-center justify-center gap-16 h-32 text-black font-thin"
        >
          <NavLink href="/me" exact>
            Me
          </NavLink>
          <NavLink href="/software">
            Software
          </NavLink>
          <NavLink href="/work_experience">
            Work Experience
          </NavLink>
          <NavLink href="/education">
            Education
          </NavLink>
        </nav>
        {children}
        <footer
          className="w-full z-20 flex flex-row justify-center items-center h-32"
          style={{ backgroundColor: "#f5f5ee" }}
        >
          <p className="text-black"></p>
        </footer>
      </body>
    </html>
  );
}
