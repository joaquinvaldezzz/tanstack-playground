import { useCallback, useState } from "react";

export function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn("Failed to copy to clipboard:", error);
      setIsCopied(false);
    }
  }, []);

  return { isCopied, copyToClipboard };
}
