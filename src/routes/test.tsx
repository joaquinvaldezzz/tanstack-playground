import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

const Page = () => {
  const fruitsList = ["apple", "zebra", "banana", "mango", "durian", "orange"];
  const [fruits, setFruits] = useState<string[]>(fruitsList);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddFruit = () => {
    // If the input is empty or ...
    if (inputRef.current == null || inputRef.current.value === "") return;

    // if the fruit already exists (case insensitive), ...
    if (fruits.includes(inputRef.current.value.toLowerCase())) return;

    // do nothing.

    // Otherwise, add the fruit to the list
    setFruits([...fruits, inputRef.current.value]);

    // Clear the input
    inputRef.current.value = "";

    // Sort the fruits after adding
    setFruits((prevFruits) => [...prevFruits].sort((a, b) => a.localeCompare(b)));
  };

  return (
    <div className="pt-4">
      <div className="flex flex-col gap-3 md:flex-row">
        <input name="fruit" placeholder="Please put fruit name here..." ref={inputRef} />
        <button className="" type="button" onClick={handleAddFruit}>
          Add Fruit
        </button>
      </div>

      <ul className="mt-8 list-disc pl-4">
        {fruits.map((fruit, index) => (
          <li key={fruit.concat(index.toString())}>
            {fruit.length} {fruit.charAt(0).toUpperCase() + fruit.slice(1)}
          </li>
        ))}
      </ul>

      <p className="mt-4">
        The total number of characters is {fruits.reduce((acc, fruit) => acc + fruit.length, 0)}.
      </p>
    </div>
  );
};

const Route = createFileRoute("/test")({
  component: Page,
  head: () => ({
    meta: [
      {
        title: "Test Page",
      },
      {
        name: "description",
        content: "This is the test page description.",
      },
      {
        name: "og:title",
        content: "Test Page",
      },
      {
        name: "og:description",
        content: "This is the test page description.",
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

export default Route;
