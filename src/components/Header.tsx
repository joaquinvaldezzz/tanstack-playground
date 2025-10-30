import { Fragment, useState } from "react";

import { Link } from "@tanstack/react-router";
import { Home, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <header className="flex items-center bg-gray-800 p-4 text-white shadow-lg">
        <button
          className="rounded-lg p-2 transition-colors hover:bg-gray-700"
          type="button"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/">
            <img className="h-10" src="/tanstack-word-logo-white.svg" alt="TanStack Logo" />
          </Link>
        </h1>
      </header>

      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-80 transform flex-col bg-gray-900 text-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-700 p-4">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-800"
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <Link
            className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
            to="/"
            onClick={() => setIsOpen(false)}
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          {/* Demo Links Start */}

          {/* Demo Links End */}
        </nav>
      </aside>
    </Fragment>
  );
};

export default Header;
