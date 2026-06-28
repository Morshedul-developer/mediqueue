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

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 lg:flex">
          {user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <div className="cursor-pointer">
                  <Avatar
                    isBordered
                    src={user.image || ""}
                    name={user.name || "User"}
                    className="cursor-pointer"
                  />
                </div>
              </DropdownTrigger>

              <DropdownMenu aria-label="Profile Actions">
                <DropdownItem
                  key="profile-info"
                  textValue="profile-info"
                  className="h-14 gap-2"
                >
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs text-default-500">
                    {user.email}
                  </p>
                </DropdownItem>

                <DropdownItem
                  key="profile"
                  onPress={() => router.push("/my-profile")}
                >
                  My Profile
                </DropdownItem>

                <DropdownItem
                  key="logout"
                  color="danger"
                  onPress={handleLogout}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <>
              <Button
                as={Link}
                href="/login"
                variant="bordered"
              >
                Login
              </Button>

              <Button
                as={Link}
                href="/register"
                color="primary"
              >
                Register
              </Button>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl lg:hidden"
        >
          {open ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-2 px-5 py-5">
            {navLinks.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 transition
                  ${
                    pathname === item.link
                      ? "bg-primary text-white"
                      : "hover:bg-default-100"
                  }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-4 border-t pt-4">
              {user ? (
                <>
                  <div className="mb-4 flex items-center gap-3">
                    <Avatar
                      src={user.image || ""}
                      name={user.name || "User"}
                    />

                    <div>
                      <p className="font-semibold">
                        {user.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <Button
                    as={Link}
                    href="/my-profile"
                    className="mb-3 w-full"
                    variant="bordered"
                    onPress={() => setOpen(false)}
                  >
                    My Profile
                  </Button>

                  <Button
                    color="danger"
                    className="w-full"
                    onPress={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <div className="space-y-3">
                  <Button
                    as={Link}
                    href="/login"
                    variant="bordered"
                    className="w-full"
                    onPress={() => setOpen(false)}
                  >
                    Login
                  </Button>

                  <Button
                    as={Link}
                    href="/register"
                    color="primary"
                    className="w-full"
                    onPress={() => setOpen(false)}
                  >
                    Register
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;