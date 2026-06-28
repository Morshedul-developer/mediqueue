"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t bg-slate-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Description */}
        <div>
          <Link
            href="/"
            className="text-3xl font-bold text-white"
          >
            MediQueue
          </Link>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Find experienced tutors, book learning sessions,
            and manage your classes easily with MediQueue.
            Learn smarter with a simple and organized tutor
            booking platform.
          </p>
        </div>

        {/* Tutor Services */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Tutor Services
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                href="/tutors"
                className="transition hover:text-primary"
              >
                Find Tutors
              </Link>
            </li>

            <li>
              <Link
                href="/add-tutor"
                className="transition hover:text-primary"
              >
                Become a Tutor
              </Link>
            </li>

            <li>
              <Link
                href="/my-booked-sessions"
                className="transition hover:text-primary"
              >
                My Sessions
              </Link>
            </li>

            <li>
              <Link
                href="/my-tutors"
                className="transition hover:text-primary"
              >
                Manage Tutors
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-3 text-sm">
            <p>📍 Dhaka, Bangladesh</p>
            <p>📧 support@mediqueue.com</p>
            <p>📞 +880 1700-000000</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Follow Us
          </h3>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-primary hover:text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-primary hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-primary hover:text-white"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-primary hover:text-white"
            >
              <FaXTwitter />
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Stay connected for learning tips, updates, and
            new tutors.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} MediQueue. All Rights
            Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/"
              className="transition hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="transition hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;