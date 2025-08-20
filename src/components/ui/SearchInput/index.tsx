import clsx from "clsx";
import { forwardRef, useEffect, useRef } from "react";

import type { SearchInputProps } from "./types";

type Props = SearchInputProps & {
  onClear?: () => void;
};

const SearchInput = forwardRef<HTMLInputElement, Props>(
  (
    { placeholder = "Buscar…", size = "md", className, onClear, ...props },
    ref,
  ) => {
    const innerRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;
      const handler = (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.value === "") onClear?.();
      };
      el.addEventListener("search", handler);
      return () => el.removeEventListener("search", handler);
    }, [onClear]);

    const sizeClasses: Record<string, string> = {
      sm: "h-7 w-40 md:w-56",
      md: "h-9 w-56 md:w-72",
      lg: "h-11 w-72 md:w-96",
    };

    return (
      <input
        ref={(node) => {
          innerRef.current = node;
          if (typeof ref === "function") ref(node);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          else if (ref) (ref as any).current = node;
        }}
        type="search"
        placeholder={placeholder}
        className={clsx(
          "rounded-md border border-[#8A939D] bg-transparent",
          "px-3 text-sm font-inter placeholder:text-[#8A939D]",
          "placeholder:font-light placeholder:text-xs",
          "placeholder:text-inter focus:border-cyan-600",
          "focus:outline-none focus:ring-1 focus:ring-cyan-500",
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

SearchInput.displayName = "SearchInput";
export default SearchInput;
