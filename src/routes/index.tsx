import { createFileRoute } from "@tanstack/react-router";

import logo from "../logo.svg";

const Page = () => (
  <div className="text-center">
    <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-[calc(10px+2vmin)] text-white">
      <img
        className="pointer-events-none h-[40vmin] animate-[spin_20s_linear_infinite]"
        src={logo}
        alt="logo"
      />
      <p>
        Edit <code>src/routes/index.tsx</code> and save to reload.
      </p>
      <a
        className="text-[#61dafb] hover:underline"
        href="https://reactjs.org"
        rel="noopener noreferrer"
        target="_blank"
      >
        Learn React
      </a>
      <a
        className="text-[#61dafb] hover:underline"
        href="https://tanstack.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Learn TanStack
      </a>
    </header>
  </div>
);

const Route = createFileRoute("/")({
  component: Page,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "My App is a web application",
      },
      {
        title: "My App",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    styles: [
      {
        media: "all and (max-width: 500px)",
        children: `p {
                  color: blue;
                  background-color: yellow;
                }`,
      },
    ],
    scripts: [
      {
        src: "https://www.google-analytics.com/analytics.js",
      },
    ],
  }),
});

export default Route;
