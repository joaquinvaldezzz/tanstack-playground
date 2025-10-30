import { useRef, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FruitsList = () => {
  /**
   * 1. Display the current list of fruits as a list. They should be capitalized. Should be sorted a-z
   * 2. Append the number of letters at the start ex. 'apple' - '5 Apple'
   * 3. Add the functionality to add fruits to the list.
   * 4. At the end of the list, add a statement "The total number of characters is X". Ex. List of
   *    fruits are ['apple', 'kiwi'] -> "The total number of characters is 9".
   */

  const fruitsList = ["apple", "zebra", "banana", "mango", "durian", "orange"];
  const [fruits, setFruits] = useState<string[]>(fruitsList);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddFruit = () => {
    // If the input is empty or ...
    if (!inputRef.current || inputRef.current.value === "") return;

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
    <div className="container mx-auto px-4 pt-4">
      <div className="flex flex-col gap-3 md:flex-row">
        <Input
          className="rounded-lg border border-gray-300 px-3 py-2 placeholder:text-gray-600"
          name="fruit"
          placeholder="Please put fruit name here..."
          ref={inputRef}
        />
        <Button type="button" onClick={handleAddFruit} isCircle>
          Add fruit
        </Button>
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

export const Route = createFileRoute("/beginner/fruit-list")({
  component: FruitsList,
  head: () => ({
    meta: [
      {
        title: "Fruit List Page",
      },
    ],
  }),
});
