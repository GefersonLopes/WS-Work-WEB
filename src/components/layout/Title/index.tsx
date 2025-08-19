import clsx from "clsx";

import type { TitlePageProps } from "./types";

function Title({ title, className }: TitlePageProps) {
  return (
    <h1
      className={clsx(
        "text-base lg:text-lg font-semibold tracking-wide font-poppins color-light mb-6",
        className,
      )}
    >
      {title}
    </h1>
  );
}

export default Title;
