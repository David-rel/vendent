import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-400">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <></>
              ) : (
                <p className="block h-6 w-6 text-lg text-black">☰</p>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex lg:space-x-36 md:space-x-28 sm:space-x-10">
                <Link href="/hotDeals" legacyBehavior>
                  <a className="text-yellow-300 hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium">
                    Hot Deals
                  </a>
                </Link>
                <Link href="/create" legacyBehavior>
                  <a className="text-yellow-300 hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium">
                    Create
                  </a>
                </Link>
                <Link href="/newReleases" legacyBehavior>
                  <a className="text-yellow-300 hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium">
                    New Releases
                  </a>
                </Link>
                <Link href="/bestSellers" legacyBehavior>
                  <a className="text-yellow-300 hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium">
                    Best Sellers
                  </a>
                </Link>
                <Link href="/help" legacyBehavior>
                  <a className="text-yellow-300 hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium">
                    Help
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          open
            ? "fixed inset-0 flex z-40 transition-transform transform translate-x-0"
            : "fixed inset-0 flex z-40 transition-transform transform -translate-x-full"
        } sm:hidden`}
      >
        <div className="flex-1 flex flex-col max-w-  w-4 pt-5 pb-4 bg-gray-400">
          <div className="-mr-14 p-1">
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              aria-label="Close sidebar"
            >
              <p className="block h-6 w-6 text-white">X</p>
            </button>
          </div>
          <div className="flex-shrink-0 flex items-center px-4">
            <p className="text-2xl leading-7 font-semibold text-white underline">
              Menu
            </p>
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              <Link href="/hotDeals" legacyBehavior>
                <a className="text-yellow-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base text-xl font-medium">
                  Hot Deals
                </a>
              </Link>
              <Link href="/create" legacyBehavior>
                <a className="text-yellow-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base text-xl font-medium">
                  Create
                </a>
              </Link>
              <Link href="/newReleases" legacyBehavior>
                <a className="text-yellow-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base text-xl font-medium">
                  New Releases
                </a>
              </Link>
              <Link href="/bestSellers" legacyBehavior>
                <a className="text-yellow-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base text-xl font-medium">
                  Best Sellers
                </a>
              </Link>
              <Link href="/help" legacyBehavior>
                <a className="text-yellow-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base text-xl font-medium">
                  Help
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
