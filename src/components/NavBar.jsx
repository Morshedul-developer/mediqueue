"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const links = [
  { name: "Home", link: "/" },
  { name: "Tutors", link: "/tutors" },
  { name: "Add Tutor", link: "/add-tutor", private: true },
  { name: "My Tutors", link: "/my-tutors", private: true },
  {
    name: "My Booked Sessions",
    link: "/my-booked-sessions",
    private: true,
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const { data } = authClient.useSession();
  const user = data?.user;

  const navLinks = user
    ? links
    : links.filter((item) => !item.private);

  const handleLogout = async () => {
    await authClient.signOut();

    setOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide text-primary"
        >
          MediQueue
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={`relative pb-1 font-medium transition-all duration-300
                after:absolute after:bottom-0 after:left-0 after:h-0.5
                after:bg-primary after:transition-all after:duration-300 after:content-['']
                ${
                  pathname === item.link
                    ? "text-primary after:w-full"
                    : "text-gray-700 hover:text-primary after:w-0 hover:after:w-full"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        {user ? (
          <div className="hidden items-center gap-3 md:flex">
            <Avatar size="sm">
              <Avatar.Image
                src={user.image}
                alt={user.name}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>
                {user.name?.charAt(0)}
              </Avatar.Fallback>
            </Avatar>

            <Button
              variant="danger"
              size="sm"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              className="rounded-xl border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-[#FBBF24] px-4 py-2 font-medium text-[#6C4F00] transition hover:bg-[#f5b70a]"
            >
              Register
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="space-y-4 border-t bg-white px-4 pb-4 md:hidden">
          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                onClick={() => setOpen(false)}
                className={
                  pathname === link.link
                    ? "font-semibold text-[#6C4F00]"
                    : "text-gray-700"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth */}
          <div className="border-t pt-3">
            {user ? (
              <div className="flex items-center justify-center gap-3">
                <Avatar size="sm">
                  <Avatar.Image
                    src={user.image}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>
                    {user.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-gray-300 px-4 py-2 text-center"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-[#FBBF24] px-4 py-2 text-center text-[#6C4F00]"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;