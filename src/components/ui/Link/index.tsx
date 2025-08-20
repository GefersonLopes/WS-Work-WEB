import clsx from "clsx";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import type { AppLinkProps, ToObject } from "./types";

function buildHref(
  path: string,
  id?: string | number,
  query?: AppLinkProps["query"],
) {
  const base = path.replace(/\/+$/, "");
  const withId = id != null ? `${base}/${id}` : base;
  const url = new URL(withId, "http://dummy");

  if (query) {
    Object.entries(query).forEach(([k, v]) => {
      if (v === undefined || v === null || v === "") return;
      url.searchParams.set(k, String(v));
    });
  }
  return url.pathname + url.search + url.hash;
}

export const Link: React.FC<AppLinkProps> = ({
  to,
  href,
  path,
  id,
  query,
  children,
  className,
  ...rest
}) => {
  let finalTo: string | ToObject | undefined = to ?? href;

  if (!finalTo && path) {
    finalTo = buildHref(path, id, query);
  }

  if (!finalTo) {
    finalTo = "#";
  }

  return (
    <RouterLink
      to={finalTo}
      className={clsx("text-primary underline underline-offset-3", className)}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};
export default Link;
