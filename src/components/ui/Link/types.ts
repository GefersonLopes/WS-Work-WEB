import { type LinkProps as RouterLinkProps } from "react-router-dom";
export type ToObject = {
  pathname?: string;
  search?: string;
  hash?: string;
  state?: unknown;
};

export type AppLinkProps = Omit<RouterLinkProps, "to"> & {
  to?: string | ToObject;
  href?: string | ToObject;

  path?: string;
  id?: string | number;
  query?: Record<string, string | number | undefined>;
  className?: string;
};
