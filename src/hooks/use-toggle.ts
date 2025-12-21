import { useCallback, useState } from "react";

export function useToggle(initialValue = false): [boolean, () => void] {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle];
}
