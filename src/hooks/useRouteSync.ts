import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useNav } from "../store/useNav";

export function useRouteSync() {
  const { pathname } = useLocation();
  const setActivePath = useNav((s) => s.setActivePath);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname, setActivePath]);

  return null;
}
