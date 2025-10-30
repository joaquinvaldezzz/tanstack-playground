import { useEffect, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

const CounterPage = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-4">
      <h1 className="mb-4 text-2xl font-semibold tracking-tight">Counter Page</h1>
      <p>Current count: {count}</p>
    </div>
  );
};

export const Route = createFileRoute("/beginner/counter")({
  component: CounterPage,
  head: () => ({
    meta: [
      {
        title: "Counter Page",
      },
      {
        name: "description",
        content: "This is the counter page description.",
      },
      {
        name: "og:title",
        content: "Counter Page",
      },
      {
        name: "og:description",
        content: "This is the counter page description.",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:image",
        content: "/tanstack-circle-logo.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Test Page",
      },
      {
        name: "twitter:description",
        content: "This is the test page description.",
      },
      {
        name: "twitter:image",
        content: "/tanstack-circle-logo.png",
      },
    ],
  }),
});
